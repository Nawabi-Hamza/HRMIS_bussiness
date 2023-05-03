const express = require("express")
const db = require("../db");
const router = express.Router()
const jwt = require("jsonwebtoken");
const { checkToken } = require("./jsonwebtoken");
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

// ==============Login Empolyee======================
// router.post('/empolyee/login',(req,res)=>{
//     const q = "SELECT * FROM `empolyee` WHERE `empolyee_name` = ? AND `empolyee_password` =?"
//     const value = [ req.body.user_name,req.body.user_password]
//     db.query(q,value,(error,data)=>{
//         if(error) return res.status(400).json(error)
//         else if(!data) return res.status(404).json({error:"Empolyee Dosen't Exist !"})
//         else{

//             const {empolyee_password,empolyee_job_description,empolyee_position,empolyee_salary,empolyee_education,date_of_join,...other} = data[0]
//             // return res.status(200).json(other)
//             const token = jwt.sign({ data: data }, process.env.JSONWEBTOKENEMPOLYEE, { expiresIn: '1d' });
//             // Return the JWT to the client
//             // data.a({hello:"NIce"})
//             return res.json({...other,token: token});
//         }
//     })
// })

router.post('/empolyee/login',(req,res)=>{
    const q = "SELECT * FROM `empolyee` WHERE `empolyee_name` = ?"
    const value = [ req.body.user_name ]
    db.query(q,value,(error,data)=>{
        if(error) return res.send(error)
        if(!data.length) return res.status(404).json({error:"Empolyee Dosen't Exist !"})
        // else if(!data) return res.status(404).json({error:"Empolyee Dosen't Exist !"})
        else{
            if(data[0].empolyee_password===req.body.user_password){
                const {empolyee_password,empolyee_job_description,empolyee_position,empolyee_salary,empolyee_education,date_of_join,...other} = data[0]
                // return res.status(200).json(other)
                const token = jwt.sign({ data: data }, process.env.JSONWEBTOKENEMPOLYEE, { expiresIn: '1d' });
                return res.json({...other,token: token});
            }
            else{
                res.status(400).json({error:"Please Enter Correct Password !"})
            }
        }
    })
})
// ===========Login User Admin ===========
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
            const token = jwt.sign({ data: data }, process.env.JSONWEBTOKEN, { expiresIn: '1d' });
            // Return the JWT to the client
            // data.a({hello:"NIce"})
            return res.json({...other,token: token});
        }
        return res.status(400).json({error:"Please Type Correct Password..."})
        // mybody===dbbody? (res.send(other)):(res.send("Please Type Correct Password..."))
    })
})


router.get('/auth',checkToken,(req,res)=>{
    const q = "SELECT * FROM `users`"
    db.query(q,(error,data)=>{
        if(error) return res.send(error)
        return res.send(data)
    })
})



module.exports = router