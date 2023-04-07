import React, { useState } from 'react'
import axios from "axios"
import "../App.css"
import { Link } from 'react-router-dom'
import CreateEmpolyee from '../Component/CreateEmpolyee'
// import _ from "lodash";
// import UpdateEmpolyee from '../Component/UpdateEmpolyee';


export default function Empolyee() {
    // =============== Delete User ====================
    const handleDelete = async(userId)=>{
        // e.preventDefault()
        // console.log(userId)
        try{
            await axios.delete(`http://localhost:5000/empolyee/${userId}`)
            alert("User Deleted Successfuly....")
        }catch(error){
            return error
        }
    }
    // ================ Show User ====================
    const [ data,setData ] = useState([])
    const [ totalSalary,setTotalSalary ] = useState(0)
    // useEffect(()=>{            
        const fetchData = async()=>{
            try{
                const response = await axios.get("http://localhost:5000/empolyee")
                setData(response.data);
                //   ============push all empolyee salary to an array 
                const show = response.data;
                const totalSalary = []
              for(let a=0;a<show.length;  a++){
                totalSalary.push(parseInt(show[a].empolyee_salary)) ;
                }
            // ========== Sum All Array Element
            const calculateSum = (arr) => {
                return arr.reduce((total, current) => {
                    return total + current;
                }, 0);
            }

            setTotalSalary(calculateSum(totalSalary))
            }catch(error){
                return error
            }
        }
        fetchData()
    // },[handleDelete,CreateEmpolyee,UpdateEmpolyee])


  // create a new `Date` object from the date-time string
        const convertDate = (date)=>{
            const show = date;
            const mainDate = new Date(show);
            const year = mainDate.getFullYear();
            const month = mainDate.getMonth() + 1;
            const day = mainDate.getDate();
            var dateShow = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            return dateShow;
        }

        // const month = [ "January","February","March","April","May","June","July","Augest","September","October","November","Desember"]
        // var count = 0;

  return (
    <div className='bg-light'>
        <div className="container py-5">
                <div className='d-flex justify-content-between my-3'>
                        <h1 className='ps-4 mt-2 my-text-primary'>HRMIS</h1>
                        <div className='d-flex gap-2'>
                        {/* <ul className='navbar-nav btn ps-2'>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Month Report</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                {month.map((items)=>(
                                    <Link class="dropdown-item" to={`/empolyee/${++count}`}>{items + " " + count}</Link>
                                ))}
                            </div>
                        </li>
                        </ul> */}
                        <button className='btn my-btn-primary' data-bs-toggle="modal" data-bs-target="#modalId">Create New Empolyee</button>
                        </div>

                </div>
                <div class="table-responsive">
                    <table  class="table table-striped my-bg-primary">
                        <thead className='table-head'>
                            <tr>
                                <th className=''>#ID</th>
                                <th className=''>Name</th>
                                <th>Father Name</th>
                                <th>Designation</th>
                                <th>Job Description</th>
                                <th>Position</th>
                                <th>Salary</th>
                                <th>Join Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {data.map((items)=>(
                            <tr key={items.empolyee_id} class="text-muted">
                                <td>{items.empolyee_id}</td>
                                <td>{items.empolyee_name}</td>
                                <td>{items.empolyee_f_name}</td>
                                <td>{items.empolyee_designation}</td>
                                <td>{items.empolyee_job_description}</td>
                                <td>{items.empolyee_position}</td>
                                <td >{items.empolyee_salary}</td>
                                <td>{convertDate(items.date_of_join)}</td>
                                <td>
                                <Link to={`/update/empolyee/${items.empolyee_id}`} state={items}><button className='btn my-btn-outline-primary' data-bs-toggle="modal" data-bs-target="#updateModalId">Edite</button></Link>
                                    <button className='btn my-btn-outline-primary' onClick={()=>handleDelete(items.empolyee_id)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                            <tr class="text-muted">
                                <td colSpan={6} className='fw-bold h4'>Total Salary</td>
                                <td className='fw-bold h4'>{totalSalary}-Af</td>
                            </tr>
                        </tbody>
                    </table>                      
            </div>        
        </div>
        <CreateEmpolyee />    
    </div>
  )
}




