


import React,{ useState } from 'react'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'

export default function NewUpdateEm() {
    const data = useLocation().state;
    const navigate = useNavigate()
    console.log(data)
   
    const [inputs,setInputs] = useState({
        name:`${data.empolyee_name}`,
        f_name:`${data.empolyee_f_name}`,
        designation:`${data.empolyee_designation}`,
        job_description:`${data.empolyee_job_description}`,
        position:`${data.empolyee_position}`,
        salary:`${data.empolyee_salary}`
      })
      const handlChange = (e)=>{
        setInputs((prev)=>({...prev,[e.target.name] : e.target.value}))
      }
      const handeUpdateEmpolyee = async(e)=>{
        e.preventDefault();
        if(inputs.name===""||inputs.f_name===""||inputs.designation===""||inputs.job_description===""||inputs.position===""||inputs.salary===""){
            alert("Please Fill All Fields")
        }else{
            try{
                await axios.patch(`http://localhost:5000/empolyee/${data.empolyee_id}`,inputs)
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
                    <div class="p-md-3 p-lg-5">
                    <h1  id="modalTitleId">--{data.empolyee_name}--</h1>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' value={inputs.name} onChange={handlChange} className='form-control' />
                        <label htmlFor="f_name">Father Name:</label>
                        <input type="text" name='f_name' value={inputs.f_name} onChange={handlChange} className='form-control' />
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" name='designation' value={inputs.designation} onChange={handlChange} className='form-control' />
                        <label htmlFor="job_description">Job Description:</label>
                        <input type="text" name='job_description' value={inputs.job_description} onChange={handlChange} className='form-control' />
                        <label htmlFor="position">Position:</label>
                        <input type="text" name='position' value={inputs.position} onChange={handlChange} className='form-control' />    
                        <label htmlFor="salary">Salary:</label>
                        <input type="text" name='salary' value={inputs.salary} onChange={handlChange} className='form-control' />
                        <button className='form-control my-3 my-btn-primary' onClick={handeUpdateEmpolyee}>Update User {data.empolyee_name}</button>
                    </div>
            </form>       
        </div>  
    </div>
  )
}
