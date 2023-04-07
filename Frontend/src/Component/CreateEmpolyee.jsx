import React, { useState } from 'react'
import axios from "axios"




// ==================== Create Empolyeee =====================


export default function CreateEmpolyee() {
    const [inputs,setInputs] = useState({
        name:"",
        f_name:"",
        designation:"",
        job_description:"",
        position:"",
        salary:""
      })
    //   setInputs({name:"Shafi"})
      const handlChange = (e)=>{
        setInputs((prev)=>({...prev,[e.target.name] : e.target.value}))
      }
      const handeCreateEmpolyee = async(e)=>{
        e.preventDefault();
        if(inputs.name===""||inputs.f_name===""||inputs.designation===""||inputs.job_description===""||inputs.position===""||inputs.salary===""){
            alert("Please Fill All Fields")
        }else{
            try{
                await axios.post("http://localhost:5000/empolyee",inputs)
                // document.getElementById("modalId1").style="display:none;";
                alert("Empolyee Created")
                
            }catch(error){
                return error;
            }
        }
      }
  return (
    <div >
        <div class="modal fade"  id="modalId" tabindex="-1"  data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" data-bs-dismiss="model" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitleId">New Empolyee</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <form action="">
                    <div class="modal-body">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' onChange={handlChange} className='form-control' />
                        <label htmlFor="f_name">Father Name:</label>
                        <input type="text" name='f_name' onChange={handlChange} className='form-control' />
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" name='designation' onChange={handlChange} className='form-control' />
                        <label htmlFor="job_description">Job Description:</label>
                        <input type="text" name='job_description' onChange={handlChange} className='form-control' />
                        <label htmlFor="position">Position:</label>
                        <input type="text" name='position' onChange={handlChange} className='form-control' />    
                        <label htmlFor="salary">Salary:</label>
                        <input type="text" name='salary' onChange={handlChange} className='form-control' />

                    </div>
                    <div class="modal-footer">
                        <button type="button" id='modelClose' class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn my-btn-primary" onClick={handeCreateEmpolyee} data-bs-dismiss="modal">Save</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        
        
    
    </div>
  )
}
