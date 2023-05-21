import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, MainApi } from '../context/AuthContext'
import axios from 'axios'

export default function ProfilePage() {
    const { currentUser } = useContext(AuthContext)
    const config = {
         headers: { Authorization: `Bearer ${currentUser.token}`}
    }
    const [ count,setCount ] = useState(0)
    // console.log(currentUser.empolyee_id)
    const [ data,setData ] = useState([])
    const [ newAtten,setNewAtten ] = useState(false)

    const newDate = new Date()
    // const currentDate = new Date().getDate()
    var currentDate = newDate.getFullYear()+"-"+(newDate.getMonth() + 1 )+"-"+ newDate.getDate()
    // console.log(data)
    // const [ myDateToAttendance,setMyDateToAttendance ] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await axios.get(`${MainApi}/empolyee/${currentUser.empolyee_id}`,config)
                setData(res.data)
                // for(let key in data){
                //     if(Number(data[key].attendance_date.split("-")[1].slice("")[1])+1 == currentDate.split("-")[1]){
                //         for(let key in data){
                //             if(Number(data[key].attendance_date.split("-")[1].slice("")[1]) == currentDate.split("-")[1]){
                //                 console.log(newAtten)
                //             }else{
                //                 setNewAtten(true)
                //             }
                //         }
                        
                //     }
                // }
                // console.log(data.slice(-1)  )
                if(res.data){
                    if(Number(res.data.slice(-1)[0].attendance_date.split("-")[1].slice("")[1]) < currentDate.split("-")[1]){
                        setNewAtten(true)
                        console.log("hello")
                    }else{
                        setNewAtten(false)
                        console.log("bye")

                    }
                }
                // if(res.data[0]===undefined){
                //    for(let a = 0 ; a < res.data.length ; a++){
                // setMyDateToAttendance(data.slice(-1))
                //    }
                // }
                // console.log(myDateToAttendance[0].attendance_date.split("-")[1].slice("")[1])  
                // console.log(res.data[0])
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[count])
                // console.log(data.slice(-1)[0].attendance_date.split("-")[1].slice("")[1])

    
    // console.log(data[0].attendance_day+data[0].attendance_leave)
    // =======================create user attendance==============
    const handleCreateAttendace = async()=>{
        try{
            await axios.post(`${MainApi}/empolyee`,{user:currentUser.empolyee_id},config)
            alert("You Added In Attendance")
            setCount(count + 1)
        }catch(error){
            console.log(error)
        }
    }

    const convertDate = (date)=>{
        const show = date;
        const mainDate = new Date(show);
        const year = mainDate.getFullYear();
        const month = mainDate.getMonth() + 1;
        const day = mainDate.getDate();
        var dateShow = `${year}-${month.toString().padStart(2, '')}-${day.toString().padStart(2, '')}`;
        return dateShow;
    }
    
    // console.log(currentDate.split("-")[1])
    // const [ myDa,setMyDe] = useState()
    // console.log(currentDate)
    // console.log(myDa)
    // console.log(convertDate(data[0].attendance_date))
    // ==================leave and present==========
    // const AuthAttendance = data[0].attendance_day+data[0].attendance_leave<27
    const [ alertPresent,setAlertPresent ] = useState(false)
    const [ alertLeave,setAlertLeave ] = useState(false)
    const handlePresend = async(idAtten,present,leave)=>{
        // if(AuthAttendance){
            try{
                await axios.patch(`${MainApi}/empolyee/${idAtten}`,{day:parseInt(present)+1,leave:leave,user:currentUser.empolyee_id},config)
                setCount(count + 1)
                setAlertPresent(true)
                setTimeout(()=>{
                    setAlertPresent(false)
                },4000)
            }catch(error){
                console.log(error)
            }
        // }else{
        //     alert('Your Attendance Completed In This Month')
        // }
    }
    const handleLeave = async(idAtten,leave,day)=>{
        // console.log()
        // if(AuthAttendance){
            try{
                await axios.patch(`${MainApi}/empolyee/${idAtten}`,{day:day,leave:parseInt(leave)+1,user:currentUser.empolyee_id},config)
                setCount(count + 1)
                setAlertLeave(true)
                setTimeout(()=>{
                    setAlertLeave(false)
                },4000)
            }catch(error){
                console.log(error)
            }
        // }else{
        //     alert("Your Attendance Completed..")
        // }
    }
    // const [ dataState,setDataState ] = useState()
    // console.log("Current Date: " +currentDate)
        // console.log(data[0].attendance_date)
        const [ password,setPassword ] = useState("")
        const [ alertPassword,setAlertPassword ] = useState(false)
        const  handleChangePassword = async(e)=>{
            e.preventDefault()
            const inputs = {
                password:password,
                name:currentUser.empolyee_name
            }
            try{
                // alert(config.headers.Authorization)
                
                await axios.patch(`${MainApi}/empolyee/update/password/${currentUser.empolyee_id}`,inputs,config)
                // alert("Helllo")
                setAlertPassword(true)
                setTimeout(()=>{
                    setAlertPassword(false)
                },5000)
                
            }catch(error){
                console.log(error)
            }
        }
        // console.log(data.length)
        // console.log(!data[0].attendance_date.split("-")[1].slice(1) < currentDate.split("-")[1])
        // let users = [
        //     { name: 'John', age: 25, occupation: 'gardener' },
        //     { name: 'Lenny', age: 51, occupation: 'programmer' },
        //     { name: 'Andrew', age: 43, occupation: 'teacher' },
        //     { name: 'Peter', age: 81, occupation: 'teacher' },
        //     { name: 'Anna', age: 47, occupation: 'programmer' },
        //     { name: 'Albert', age: 76, occupation: 'programmer' },
        // ]
        // let filteredUsers = [];
        // console.log(data.length-1)
        // for (let i = data.length-1; i < data.length-1 ; i--) {
            // console.log(i)
            // if (data[i].attendance_date.split("-")[1].slice("")[1] < currentDate.split("-")[1]) {
            //         filteredUsers = [...filteredUsers, data[i]];                
            // }
        // }
        // console.log(filteredUsers);
        // connst []
  return (
    <div className='profileEmpolyee'>
        <div className='alerts mb-5'>
            {alertPresent?
                <div className='alert alert-info' >You Have Successfuly Presented ...</div>
            :null}
            {alertLeave?
            <div className='alert alert-warning' >You Take Leave ...</div>
            :null}
            

        </div>
        <center>
        <h1>Welcome To Attendance</h1>
        </center>
        {data && data.map((items)=>(
        <center className='my-4' style={{marginTop:"200px"}} key={items.attendance_id}>
        <button className='m-2 btn' >{items.attendance_day} Present</button>
        {/* {items.attendance_day} */}
        {/* {console.log("Date From Data Base: "+convertDate(items.attendance_date))} */}
        {currentDate===convertDate(items.attendance_date) ?
        // console.log(convertDate(items.attendance_date))
        null
        :items.attendance_day+items.attendance_leave<26 ?
         items.attendance_date.split("-")[1].slice(1) === currentDate.split("-")[1]?
            // ?
            <button className='my-btn-outline-primary p-4 me-2 mt-4' onClick={()=>handlePresend(items.attendance_id,items.attendance_day,items.attendance_leave)}> Presend</button>
            :null
        :null
        // console.log(convertDate(items.attendance_date))
            // <button></button>
        }
        <button className='m-2 btn'>{items.attendance_leave} Leave</button>
        {currentDate===convertDate(items.attendance_date)?
        null
        :
        items.attendance_day+items.attendance_leave<26 ?
            items.attendance_date.split("-")[1].slice(1) === currentDate.split("-")[1]?
            <button className='my-btn-outline-primary p-4 ms-2 mt-4'onClick={()=>handleLeave(items.attendance_id,items.attendance_leave,items.attendance_day)}> Absent</button>
            :<span style={{color:"red"}}>Your Date Is Finished {convertDate(items.attendance_date).split("-")[0]+"-"+convertDate(items.attendance_date).split("-")[1]}</span>

            :<span className='text-info'>Your Attendace Completed 26 Days</span>
        }
        {/* Change Password */}
        {/* {items} */}
        <br />
        
        {Number(items.attendance_date.split("-")[1].slice("")[1])+1===currentDate.split("-")[1]?
        setNewAtten(true):null}

        {/* {currentDate.split("-")[1]} */}
       
        </center>
        ))}
        {data ? 
            !data[0]?
            <center className='my-5'>
            <button className='btn my-btn-outline-primary' onClick={handleCreateAttendace}>Create Your Attendance</button>
            </center>:null
            :null
            }
            {/* {items.attendance_date.split("-")[1].slice(1) > currentDate.split("-")[1]?
            <button className='btn my-btn-outline-primary' onClick={handleCreateAttendace}>Create Your Attendance</button>
            :null
            } */}
            <center>
            {newAtten?
            <button className='btn my-btn-outline-primary' onClick={handleCreateAttendace}>Create Your Attendance</button>
            :null
            }
            </center>
            <center>
            <button className='btn my-btn-outline-primary'  data-bs-toggle="modal" data-bs-target="#modalId">Change Password</button>
            </center>
          
            {/* <button type="button" class="btn btn-primary btn-lg" > */}
              {/* Launch */}
            {/* </button> */}
            
            {/* <!-- Modal Body --> */}
            {/* <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard --> */}
            <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div className="model-header">

                            <button type="button" class="btn-close" style={{float:"right",marginTop:"12px",marginRight:"12px"}} data-bs-dismiss="modal" aria-label="Close"></button><br />
                        </div>
                        <div class="modal-body">
                        {alertPassword?
                            <div className='alert alert-primary' >You Successfuly Change Your Password ...</div>
                            :null
                            }
                            <label htmlFor="text" className='mb-2'>New Password:</label>
                            <input type="password" className='form-control'placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn my-btn-outline-primary" onClick={handleChangePassword} >Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
    </div>
  )
}
