const express = require("express")
const db = require("../db");
const router = express.Router()
const jwt = require("jsonwebtoken")
// ===REGISTER USER===
router.post('/register',(req,res)=>{
    const q = "SELECT * FROM users WHERE user_name = ? OR user_email = ?";
    db.query(q,[req.body.user_name,req.body.user_email],(error,data)=>{
        if(error) return res.status(500).json(error)
        if(data.length) return res.status(409).json({error:"User Already Exist Please Select Deferent User Name And Email!"})
        else{
            // res.send("You Can Create User")
            const q = "INSERT INTO users(user_name,user_email,user_phone,user_password) VALUES (?);"
            const value = [req.body.user_name,req.body.user_email,req.body.user_phone,req.body.user_password]
            db.query(q,[value],(error,data)=>{
                if(error) return res.status(500).json(error)
                return res.status(200).json({message:"User Created Successfuly..."})
            })
        }
    })
})

router.post('/login',(req,res)=>{
    const q = "SELECT * FROM users WHERE user_name = ?";
    db.query(q,[req.body.user_name],(error,data)=>{
        if(error) return res.status(500).json(error)
        if(data.length===0) return res.status(200).json({error:"User Is Not Registered..."})
        
        const mybody = req.body.user_password;
        const dbbody = data[0].user_password;
        if(mybody===dbbody){ 
            const {user_password,...other} = data[0];
            // res.status(200).json(other)
            // let result = (data[0].user_password==undefined)
            // let result = (other.user_password==undefined)
            // Generate a JWT using the user ID as the payload
            const token = jwt.sign({ data: data }, process.env.JSONWEBTOKEN, { expiresIn: '1h' });
            // Return the JWT to the client
            // data.a({hello:"NIce"})
            return res.json({ data:{...other,token: token} });
        }
        return res.status(400).json({error:"Please Type Correct Password..."})
        // mybody===dbbody? (res.send(other)):(res.send("Please Type Correct Password..."))
    })
})


router.get('/auth',(req,res)=>{
    res.send("Hello This is router")
})



module.exports = router