
const db = require("../db")
const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    // res.send("This is empolyee routes")
    const q = "SELECT * FROM `empolyee`";
    db.query(q,(error,data)=>{
        if(error) res.status(404).json(error);
        res.status(200).json(data)
    })
})

router.get("/:id",(req,res)=>{
    // res.send("This is empolyee routes")
    const id = req.params.id;
    const q = "SELECT * FROM `empolyee` WHERE empolyee_id = ?";
    db.query(q,[id],(error,data)=>{
        if(error) res.status(404).json(error);
        res.status(200).json(data)
    })
})

router.post('/',(req,res)=>{
    const q = "INSERT INTO `empolyee` (`empolyee_name`, `empolyee_f_name`, `empolyee_designation`, `empolyee_job_description`, `empolyee_position`,`empolyee_salary`, `date_of_join`) VALUES (?, CURRENT_DATE());";
    const data = [ req.body.name,req.body.f_name, req.body.designation, req.body.job_description, req.body.position,req.body.salary]
    db.query(q,[data],(error,data)=>{
        if(error) throw error;
        res.status(200).json(data)
    })
})
router.patch("/:id",(req,res)=>{
    const id = req.params.id
    const q = "UPDATE `empolyee` SET `empolyee_name` = ?, `empolyee_f_name` = ?, `empolyee_designation` = ?, `empolyee_job_description` = ?, `empolyee_position` = ? ,`empolyee_salary`=? WHERE `empolyee`.`empolyee_id` = ?;";
    const data = [ req.body.name,req.body.f_name, req.body.designation, req.body.job_description, req.body.position,req.body.salary ]
    db.query(q,[...data,id],(error,data)=>{
        if(error) throw error;
        res.status(200).json(data)
    })
})
router.delete('/:id',(req,res)=>{
    const q ="DELETE FROM `empolyee` WHERE `empolyee`.`empolyee_id` = ?";
    const id = req.params.id;
    db.query(q,[id],(error,data)=>{
        if(error) res.status(409).json(error);
        res.status(200).json({message:'Empolyee Deleted Successfuly...'})
    })
})
module.exports = router;