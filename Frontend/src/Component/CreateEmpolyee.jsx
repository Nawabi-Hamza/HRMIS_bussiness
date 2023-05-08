import React, { useContext, useState } from 'react'
import axios from "axios"
import { AuthContext, MainApi } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'




// ==================== Create Empolyeee =====================


export default function CreateEmpolyee() {
    const { currentUser } = useContext(AuthContext)
    // ==========For Useing JSON_WEB_TOKE It Is Importent================
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
        };
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        name:"",
        f_name:"",
        email:"",
        job_description:"",
        position:"",
        salary:"",
        education:"",
        password:""
      })
    //   console.log(inputs)
    //   setInputs({name:"Shafi"})
      const handlChange = (e)=>{
        setInputs((prev)=>({...prev,[e.target.name] : e.target.value}))
      }
      const handeCreateEmpolyee = async(e)=>{
        e.preventDefault();
        if(inputs.name===""||inputs.f_name===""||inputs.email===""||inputs.job_description===""||inputs.position===""||inputs.salary===""){
            alert("Please Fill All Fields")
        }else{
            try{
                await axios.post(`${MainApi}/token/empolyee`,inputs,config)
                // again + 1
                // setAgain(again + 1)
                navigate("/")
                // document.getElementById("modalId1").style="display:none;";
                alert("Empolyee Created")
                
            }catch(error){
                return error;
            }
        }
      }
  return (     
    <div >
        <div className="modal fade"  id="modalId" tabindex="-1"  data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" data-bs-dismiss="model" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitleId">New Empolyee</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <form action="">
                    <div className="modal-body">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' onChange={handlChange} className='form-control' />
                        <label htmlFor="f_name">Father Name:</label>
                        <input type="text" name='f_name' onChange={handlChange} className='form-control' />
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email' onChange={handlChange} className='form-control' />
                        <label htmlFor="job_description">Job Description:</label>
                        <input type="text" name='job_description' onChange={handlChange} className='form-control' />
                        <label htmlFor="position">Position:</label>
                        <input type="text" name='position' onChange={handlChange} className='form-control' />    
                        <label htmlFor="salary">Salary:</label>
                        <input type="text" name='salary' onChange={handlChange} className='form-control' />
                        <label htmlFor="password">Password:</label>
                        <input type="text" name='password' onChange={handlChange} className='form-control' />
                        <label htmlFor="education">Education:</label>
                        <textarea type="text" name='education' onChange={handlChange} className='form-control' placeholder='Certificates' ></textarea>
                    </div>
                    <div className="d-flex justify-content-center pb-2 gap-2">
                        <button type="button" id='modelClose' className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn my-btn-primary" onClick={handeCreateEmpolyee} data-bs-dismiss="modal">Save</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        
        
    
    </div>
  )
}
