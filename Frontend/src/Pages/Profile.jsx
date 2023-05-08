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
    // console.log(data)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await axios.get(`${MainApi}/empolyee/${currentUser.empolyee_id}`,config)
                setData(res.data)
                // if(res.data[0]===undefined){
                   
                // }
                // console.log(res.data[0])
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[count])
    // console.log(data)
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
    const newDate = new Date()
    // const currentDate = new Date().getDate()
    var currentDate = newDate.getFullYear()+"-"+(newDate.getMonth() + 1 )+"-"+ newDate.getDate()
    // const [ myDa,setMyDe] = useState()
    // console.log(currentDate)
    // console.log(myDa)
    // console.log(convertDate(data[0].attendance_date))
    // ==================leave and present==========
    const handlePresend = async(present,leave)=>{
        try{
            await axios.patch(`${MainApi}/empolyee/${currentUser.empolyee_id}`,{day:parseInt(present)+1,leave:leave},config)
            setCount(count + 1)
        }catch(error){
            console.log(error)
        }
    }
    const handleLeave = async(leave,day)=>{
        // console.log()
        try{
            await axios.patch(`${MainApi}/empolyee/${currentUser.empolyee_id}`,{day:day,leave:parseInt(leave)+1},config)
            setCount(count + 1)
        }catch(error){
            console.log(error)
        }
    }
    // const [ dataState,setDataState ] = useState()
    // console.log("Current Date: " +currentDate)
        // console.log(data[0].attendance_date)
  return (
    <div>
        {data && data.map((items)=>(
        <center className='my-4' key={items.attendance_id}>
        <h1>Welcome {currentUser.empolyee_name}</h1>
        <button className='m-2 btn' >{items.attendance_day}</button>
        {/* {items.attendance_day} */}
        {/* {console.log("Date From Data Base: "+convertDate(items.attendance_date))} */}
        {currentDate===convertDate(items.attendance_date)?
        // console.log(convertDate(items.attendance_date))
        <span className='p-2'>Present</span>
        :
        // console.log(convertDate(items.attendance_date))
            // <button></button>
        <button className='my-btn-outline-primary p-4 me-2 mt-4' onClick={()=>handlePresend(items.attendance_day,items.attendance_leave)}> Day Presend</button>
        }
        <button className='m-2 btn'>{items.attendance_leave}</button>
        {currentDate===convertDate(items.attendance_date)?
        <span className='p-2'>Leave</span>
        :
        <button className='my-btn-outline-primary p-4 ms-2 mt-4'onClick={()=>handleLeave(items.attendance_leave,items.attendance_day)}> Day Leave</button>
        }
        {/* Change Password */}

        </center>
        ))}
        {data ? 
            !data[0]?
            <center className='my-5'>
            <button className='btn my-btn-outline-primary' onClick={handleCreateAttendace}>Create Your Attendance</button>
            </center>:null
            :null}
            <center>
            <button className='btn my-btn-outline-primary' onClick={()=>alert("Now You Cann't change your password ...")}>Change Password</button>
            </center>

    </div>
  )
}
