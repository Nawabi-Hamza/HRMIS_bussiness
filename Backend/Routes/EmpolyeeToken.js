
const db = require("../db")
const express = require("express");
const router = express.Router();



router.post('/',(req,res)=>{
    const q = "INSERT INTO `attendance` (`attendance_day`, `attendance_leave`, `attendance_user`,`attendance_date`) VALUES ('1', '0', ? ,CURRENT_DATE() );";
    const data = [ req.body.user ]
    db.query(q,[data],(error,data)=>{
        if(error) throw error;
        res.status(200).json(data)
    })
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const q = "SELECT * FROM `attendance` WHERE `attendance_user` = ?";
    db.query(q,id,(error,data)=>{
        if(error) return res.status(404).json(error)
        return res.status(200).json(data)
    })

})

router.patch("/:id",(req,res)=>{
    // res.send("Heljkalsdkfjls")
    const id = [req.params.id]
    const q = "UPDATE `attendance` SET `attendance_day`= ?,`attendance_leave`=? , `attendance_date` = CURRENT_DATE() WHERE attendance_user = ? AND attendance_id = ?";
    const data = [req.body.day,req.body.leave,req.body.user]
    db.query(q,[...data,id],(error,data)=>{
        if(error) throw error;
        res.status(200).json(data)
    })
})

// SELECT * FROM `empolyee` INNER JOIN attendance ON attendance.attendance_user = empolyee.empolyee_id


router.patch("/update/password/:id",(req,res)=>{
    // const q1 = "SELECT * FROM `empolyee` WHERE empolyee_id = ? AND empolyee_name = ?"
    // const recieve = [req.body.password,req.body.name]
    const id = [req.params.id]
    // const password = []
    // db.query(q1,[id,name],(error,data)=>{
        // if(error) res.status(404).json(error)
        // if(data) {
            // const { empolyee_password , ...others } = data[0]
            // res.status(200).json(others)
                const q2 = "UPDATE `empolyee` SET `empolyee_password` = ?  WHERE `empolyee_name` = ? AND `empolyee_id` = ? ";
                db.query(q2,[req.body.password,req.body.name,id],(error,data)=>{
                    if(error) return res.status(404).json(error)
                    if(data) res.status(200).json({message:"Your Password Successfuly Updated..."})
                    if(!data) res.status(500).json({message:'Please Check Your Name And Id'})
                    // res.status(200).json(data)
                })
        // }
        // if(data){
        // }
    // })
    // const new_password = req.body.password
})















module.exports = router;