import React, { useState,useEffect, useContext } from 'react'
import axios from "axios"
import "../App.css"
import { Link } from 'react-router-dom'
import CreateEmpolyee from '../Component/CreateEmpolyee'
import { AuthContext, MainApi } from '../context/AuthContext'
// import ShowSingleEmpolyee from '../Component/ShowSingleEmpolyee';
// import _ from "lodash";
// import UpdateEmpolyee from '../Component/UpdateEmpolyee';
import { PDFDownloadLink,Download } from '@react-pdf/renderer';
import DownloadEmpolyeeSalary, { PaySalary } from '../Component/EmpolyeeSalary'
let BOOL = false;




export default function Empolyee() {
    const { currentUser } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
        };
    const [ again,setAgain ] = useState(0)
    // ================= this is for use token for access api page ============
    // =============== Delete User ====================
    const handleDelete = async(userId)=>{
        // e.preventDefault()
        // console.log(userId)
        try{
            await axios.delete(`${MainApi}/token/empolyee/${userId}`,config)
            setAgain(again + 1)
            alert("User Deleted Successfuly....")
        }catch(error){
            return console.log(error)
        }
    }
    // ================ Show User ====================
    const [ data,setData ] = useState([])
    const [ totalSalary,setTotalSalary ] = useState(0)
    const [ loading,setLoading ] = useState(true)
        // const bodyParameters = {
        // key: "value"
        // };
        
    useEffect(()=>{            
        const fetchData = async()=>{
            try{
                const response = await axios.get(`${MainApi}/token/empolyee`,config)
                setData(response.data);
                setLoading(false)
                // console.log(response)
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
    },[again])


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
        // console.log(data)
        const date = new Date().toISOString()
    const NowDate = date.split("-")[0]+"-"+date.split("-")[1]+"%"
        const [ dateToDownload,setDateToDownload ] = useState(NowDate)
  return (
    <div className='bg-light'>
        <div className="container py-5">
                <div className='d-flex justify-content-between my-3'>
                        <h1 className='ps-4 mt-2 my-text-primary'>HRMIS Empolyees List</h1>
                        <div className='d-flex gap-2'>
                        <button className='btn my-btn-primary' data-bs-toggle="modal" data-bs-target="#modalId">Create New Empolyee</button>
                     </div>

                </div>
                <div className="table-responsive">
                {loading?   
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary display-1" style={{fontSize:"34px"}} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                            : 
                    <table  className="table table-striped my-bg-table-primary">
                        <thead className='table-head'>
                            <tr>
                                <th className=''>#ID</th>
                                <th className=''>Name</th>
                                <th>Father Name</th>
                                {/* <th>Email</th> */}
                                <th>Job Description</th>
                                <th>Salary</th>
                                <th>Join Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                         
                        <tbody className='table-body'>
                            {data && data.map((items)=>(
                                <tr key={items.empolyee_id} className="text-muted">
                                <td >{items.empolyee_id}</td>
                                <td style={{fontFamily:"cursive",fontWeight:700}}>{items.empolyee_name}</td>
                                <td>{items.empolyee_f_name}</td>
                                {/* <td>{items.empolyee_email}</td> */}
                                <td>{items.empolyee_job_description}</td>
                                <td >{items.empolyee_salary}</td>
                                <td>{convertDate(items.date_of_join)}</td>
                                <td>
                                <Link to={`/update/empolyee/${items.empolyee_id}`} state={items}><button className='btn my-btn-outline-primary' data-bs-toggle="modal" data-bs-target="#updateModalId">Edite</button></Link>
                                    <button className='btn my-btn-outline-primary' onClick={()=>handleDelete(items.empolyee_id)}>Delete</button>
                                    <Link to={`/single/empolyee`} state={items}>
                                    <button className='btn my-btn-outline-primary'>More</button>
                                    </Link>
                                    
                                </td>
                            </tr>
                            ))}
                            {/* <tr>
                                <td>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>                      
                            }
            </div>
                <input type="date" className='form-control my-3 date' onChange={(e)=>setDateToDownload(e.target.value)}/>
               <span className='h2'>Total Salary Pay :</span> <button className='btn ms-3 btn-outline-dark mb-3'>
                <PDFDownloadLink document={<DownloadEmpolyeeSalary state={dateToDownload} token={config}/>} fileName="Salary.pdf">
                        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
                </button>
                       {/* <button>Hello</button> */}
                            {/* {<DownloadEmpolyeeSalary />} */}
                            {/* {DownloadEmpolyeeSalary(dateToDownload)} */}
                    <div className="d-flex justify-content-around border p-5 bg-white">
                        <td colSpan={6} className='fw-bold h4'>Total Salary</td>
                        <td className='fw-bold h4'>{totalSalary}-Af</td>

                        {/* <td colSpan={6} className='fw-bold h4'>Pay Salary</td>
                        <td className='fw-bold h4'>{PaySalary}-Af</td> */}
                    </div>
        </div>
        <CreateEmpolyee state={again}/>    
    </div>
  )
}




