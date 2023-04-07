const express = require("express");
const db = require("./db")
const cors = require("cors")
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
// THIS IS CLUSTER FOR DO NOT DOWN SERVER
// const cluster = require("cluster")
// if(cluster.isMaster){
//     for(var i=0; i < 2 ; i++ ){
//         cluster.fork()
//     }
//     cluster.on("exit",(worker)=>{
//         console.log("SERVER -"+worker.id+"- TIME DIED..")
//         cluster.fork()
//     })
// }else{



// ============CODE EXECUTION============
app.get('/',(req,res)=>{
    res.send(`Welcome To HRMIS Backend Project`)
})



// User Rotues
// const userRoute = require("./Routes/user")
// app.use("/users",userRoute)

const empolyeeRouter = require("./Routes/Empolyee")
app.use('/empolyee',empolyeeRouter)




app.listen(port,(error)=>{
    if(error) throw console.log(error)
    console.log(`-Server Connected Successfuly-`)
})

// THIS IS FROM CLUSTER
// }