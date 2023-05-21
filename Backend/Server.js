const express = require("express");
const db = require("./db")
const cors = require("cors")
const app = express()
require("dotenv").config()
const port = process.env.PORT
app.use(express.json())
app.use(cors())
// THIS IS CLUSTER FOR DO NOT DOWN SERVER
const cluster = require("cluster");
const { checkToken, checkTokenEmpolyee } = require("./Routes/jsonwebtoken");
if(cluster.isMaster){
    for(var i=0; i < 2 ; i++ ){
        cluster.fork()
    }
    cluster.on("exit",(worker)=>{
        console.log("SERVER -"+worker.id+"- TIME DIED..")
        cluster.fork()
    })
}else{



// ============CODE EXECUTION============
app.get('/',(req,res)=>{
    res.send(`Welcome To HRMIS Backend Project`)
})



// User Rotues
// const userRoute = require("./Routes/user")
// app.use("/users",userRoute)

const empolyeeRouter = require("./Routes/Empolyee")
const attendanceEmpolyee = require("./Routes/EmpolyeeToken")
const usersRouter = require("./Routes/Users")


// app.use('/empolyee',empolyeeRouter)
app.use('/token/empolyee',checkToken,empolyeeRouter)
// app.use('/token/empolyee',empolyeeRouter)
app.use('/empolyee',checkTokenEmpolyee,attendanceEmpolyee)
app.use("/users",usersRouter)
 



app.listen(port,(error)=>{
    if(error) throw console.log(error)
    console.log(`-Server Connected ${port} Successfuly-`)
})
 
// THIS IS FROM CLUSTER
}