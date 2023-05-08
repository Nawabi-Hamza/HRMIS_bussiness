import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext, MainApi } from '../context/AuthContext'
import axios from 'axios'

import { PDFDownloadLink,Document,Page,View,Text,StyleSheet } from "@react-pdf/renderer"

var show ;
//  convert database date from ISO time zone to simple data
const convertDate = (date)=>{
    const show = date;
    const mainDate = new Date(show);
    const year = mainDate.getFullYear();
    const month = mainDate.getMonth() + 1;
    const day = mainDate.getDate();
    var dateShow = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return dateShow;
}
// show single user inforamtion
export default function ShowSingleEmpolyee() {
    const state = useLocation().state
    const [ data,setData ] = useState()
    const [ loading,setLoading ] = useState(true)
    show = data
    const { currentUser } = useContext(AuthContext)
    const config = {
        headers:{ Authorization: `Bearer ${currentUser.token}`}
    }
    useEffect(()=>{
        const fetchdata = async()=>{
            try{    
                const res = await axios.get(`${MainApi}/token/empolyee/${state.empolyee_id}`,config)
                // console.log(res.data)
                if(res.data[0]===undefined){
                    const res2 = await axios.get(`${MainApi}/token/empolyee/newuser/${state.empolyee_id}`,config)
                    setData(res2.data)
                    setLoading(false)
                    // console.log(data)  
                }else{
                    setData(res.data)
                    setLoading(false)
                }
            }catch(error){
                console.log(error)
            }
        }
        fetchdata()
    },[])
 

  return (
    <>
   
            <div className='container'>
            {loading?   
                <center>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary display-1" style={{fontSize:"34px"}} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                </center>:
                <div>
                    {data && data.map((items)=>(
                        <div className='table my-single-table' key={items.empolyee_id}>
                            <center >
                                <h1 className='my-4' >More Information <span className='my-text-primary'>{items.empolyee_name}</span></h1>
                            </center>
                            <table className='table my-bg-table-primary'>
                               <tr>
                                <th>Username:</th>
                                <th>{items.empolyee_name} &nbsp; &nbsp; &nbsp; &nbsp;
                                                             
                                    {/* <th id='showButton'></th>
                                    {setTimeout(()=>{
                                        document.getElementById("showButton").innerHTML=
                                    },4000)} */}
                                </th>
                               </tr>
                                <tr>
                                    <td>Father Name:</td>
                                    <td>{items.empolyee_f_name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{items.empolyee_email}</td>
                                </tr>
                                <tr>
                                    <td>Education:</td>
                                    <td>{items.empolyee_education}</td>
                                </tr>
                                <tr>
                                    <td>Position:</td>
                                    <td>{items.empolyee_position}</td>
                                </tr>
                                <tr>
                                    <td>Job Description:</td>
                                    <td>{items.empolyee_job_description}</td>
                                </tr>
                                <tr>
                                    <td>Salary:</td>
                                    <td>{items.empolyee_salary}</td>
                                </tr>
                                <tr>
                                    <td>Join Date:</td>
                                    <td>{convertDate(items.date_of_join)}</td>
                                </tr>
                                    {items.attendance_id?
                                <tr>
                                    <td>Presend:</td>
                                    <td>{items.attendance_day}</td>
                                </tr>
                                    :null}
                                    {items.attendance_id?
                                <tr>
                                    <td>Leave:</td>
                                    <td>{items.attendance_leave}
                                    <button className='btn ms-3 btn-dark'>
                                    <PDFDownloadLink document={<Download/>} className="link-info " fileName={`${items.empolyee_name}.pdf`}>Download PDF</PDFDownloadLink>
                                    </button> 
                                    </td>
                                </tr>
                                    :
                                    <tr>
                                    <td className='bg-light'>
                                    <button className='btn ms-3 btn-dark'>
                                    <PDFDownloadLink document={<Download/>} className="link-info " fileName={`${items.empolyee_name}.pdf`}>Download PDF</PDFDownloadLink>
                                    </button> 
                                    </td>
                                </tr> }
                            </table>              
                       
                           {/* {items && Download()} */}
                        </div>
                    ))}

            </div>}
            <div className='my-5'></div>
     </div>
    </>
  )
}
const styles = StyleSheet.create({
    page: { backgroundColor: '#1095c1' },
    section: { color: 'white', textAlign: 'around', margin: 20,border:"1px solid white", },
    column: { border:"1px solid white",margin:20,color:"#1095c1",padding:10 ,  backgroundColor: 'white' }
    
  });

// Download PDF inforamtion of user
function Download(){
    const items = show
    // console.log(items)
    return(<>
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section} >
                <Text style={styles.column} >
                    Username:
                    {items[0].empolyee_name}
                </Text>
                <Text style={styles.column}>
                    Father/Name:
                    {items[0].empolyee_f_name}
                </Text>
                <Text style={styles.column}>
                    Email:
                    {items[0].empolyee_email}
                </Text>
                <Text style={styles.column}>
                    Education:
                    {items[0].empolyee_education}
                </Text>
                <Text style={styles.column}>
                    Position:
                    {items[0].empolyee_position}
                </Text>
                <Text style={styles.column}>
                    Job_Description:
                    {items[0].empolyee_job_description}
                </Text>
                <Text style={styles.column}>
                    Salary:
                    {items[0].empolyee_salary}
                </Text>
                <Text style={styles.column}>
                    Join_Date:
                    {convertDate(items[0].date_of_join)}
                </Text>
                <Text style={styles.column}>
                    Presend:
                    {items[0].attendance_day}
                </Text>
                <Text style={styles.column}>
                    Leave:
                    {items[0].attendance_leave}
                </Text>
            </View>
        </Page>
    </Document>
    </>)
}