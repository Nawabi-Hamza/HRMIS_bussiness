
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
    const id = req.params.id
    const q = "UPDATE `attendance` SET `attendance_day`= ?,`attendance_leave`=? , `attendance_date` = CURRENT_DATE() WHERE attendance_user = ?";
    const data = [ req.body.day,req.body.leave]
    db.query(q,[...data,id],(error,data)=>{
        if(error) throw error;
        res.status(200).json(data)
    })
})
















module.exports = router;