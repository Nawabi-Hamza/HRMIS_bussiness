const mysql = require("mysql")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hrmis_bussiness"
})


db.connect((error)=>{
    if(error) throw console.log(error);
    console.log("-Database Connected Successfuly-")
})


module.exports = db;