const mysql = require("mysql")
require("dotenv").config()
const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    connectionLimit:1

})
 

db.connect((error)=>{
    if(error) throw console.log(error);
    console.log("-Database Connected Successfuly-")
})


module.exports = db;