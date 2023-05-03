


import React,{ useContext, useState } from 'react'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext, MainApi } from '../context/AuthContext';

export default function NewUpdateEm() {
    const data = useLocation().state;
    const navigate = useNavigate()
    // console.log(data)
    const { currentUser } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
        };
   
    const [inputs,setInputs] = useState({
        name:`${data.empolyee_name}`,
        f_name:`${data.empolyee_f_name}`,
        email:`${data.empolyee_email}`,
        job_description:`${data.empolyee_job_description}`,
        position:`${data.empolyee_position}`,
        salary:`${data.empolyee_salary}`,
        education:`${data.empolyee_education}`,
        password:`${data.empolyee_password}`
      })
    //   console.table(inputs)
      const handlChange = (e)=>{
        setInputs((prev)=>({...prev,[e.target.name] : e.target.value}))
      }
      const handeUpdateEmpolyee = async(e)=>{
        e.preventDefault();
        if(inputs.name===""||inputs.f_name===""||inputs.designation===""||inputs.job_description===""||inputs.position===""||inputs.salary===""){
            alert("Please Fill All Fields")
        }else{
            try{
                // console.table({message:"Start api"})
                await axios.patch(`${MainApi}/token/empolyee/${data.empolyee_id}`,inputs,config)
                // console.table({message:"end api"})
                navigate("/empolyee")
                alert("Empolyee Updated")
                
            }catch(error){
                return error;
            }
        }
      }
  return (
      <div >
        <div className="container p-md-3 p-lg-5">
            <form action=""> 
                    <div className="p-md-3 p-lg-5">
                    <h1  id="modalTitleId">--{data.empolyee_name}--</h1>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' value={inputs.name} onChange={handlChange} className='form-control' />
                        <label htmlFor="f_name">Father Name:</label>
                        <input type="text" name='f_name' value={inputs.f_name} onChange={handlChange} className='form-control' />
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email' value={inputs.email} onChange={handlChange} className='form-control' />
                        <label htmlFor="job_description">Job Description:</label>
                        <input type="text" name='job_description' value={inputs.job_description} onChange={handlChange} className='form-control' />
                        <label htmlFor="position">Position:</label>
                        <input type="text" name='position' value={inputs.position} onChange={handlChange} className='form-control' />    
                        <label htmlFor="salary">Salary:</label>
                        <input type="text" name='salary' value={inputs.salary} onChange={handlChange} className='form-control' />
                        <label htmlFor="education">Educataion:</label>
                        <input type="text" name='education' value={inputs.education} onChange={handlChange} className='form-control' />
                        <label htmlFor="password">Password:</label>
                        <input type="text" name='password' value={inputs.password} onChange={handlChange} className='form-control' />
                        <button className='form-control my-3 my-btn-primary' onClick={handeUpdateEmpolyee}>Update User {data.empolyee_name}</button>
                    </div>
            </form>       
        </div>  
    </div>
  )
}
