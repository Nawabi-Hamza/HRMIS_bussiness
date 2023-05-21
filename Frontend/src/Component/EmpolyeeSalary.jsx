import { Text,Document,Page,View } from '@react-pdf/renderer';
import React, { useState, useEffect,useContext } from "react"
import axios from 'axios';
import { MainApi,AuthContext } from '../context/AuthContext';
export let PaySalary = 0
let config

export default function DownloadEmpolyeeSalary({state,token}){
    // const { currentUser } = useContext(AuthContext)
    // const config = {
    //     // headers: { Authorization: `Bearer ${currentUser.token}` }
    //     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJIYW16YSIsInVzZXJfZW1haWwiOiJoYW16YS5uYXdhYmkxMTlAZ21haWwuY29tIiwidXNlcl9waG9uZSI6IjA5ODc2NTQzMjEiLCJ1c2VyX3Bhc3N3b3JkIjoiaGFtemEiLCJ1c2VyX3R5cGUiOiJBZG1pbiJ9XSwiaWF0IjoxNjg0MTI2NjM1LCJleHAiOjE2ODQyMTMwMzV9.dgPLxNxs5BAp8aOXRbk5Y_3u15sHuFxCjSjTwW22Krg` }
    //     };
        // console.log(token)
    const [ data,setData ] = useState([])
    // const [ total ,setTotal ] = useState(0)
    let totalNumber = []
    let total = 0
    const [ salary,setSalary ] = useState(0)
    const date = new Date().toISOString()
    const NowDate = date.split("-")[0]+"-"+date.split("-")[1]+"%"
    const [ dateShow,setDateShow ] = useState(NowDate)
    useEffect(()=>{
        if(state){
            const date = state
            const NowDate = date.split("-")[0] + "-" + date.split("-")[1] + "%"
            setDateShow(NowDate)
        }
    },[state])
    // console.log(NowDate)
    useEffect(()=>{
        const fetchEmpolyee = async()=>{
            try{
                const res = await axios.post(`${MainApi}/token/empolyee/globle/empolyee`,{
                    "date":dateShow
                },token)
                setData(res.data)
                res.data.forEach((item)=>{
                    // console.log(item.empolyee_salary)
                    // setTotal(total + total(item.empolyee_salary))
                    totalNumber.push(Math.round(Number(item.empolyee_salary)/26)*Number(item.attendance_day))
                })
                // console.log(total)
                const calculateSum = (arr) => {
                    return arr.reduce((total, current) => {
                        return total + current;
                    }, 0);
                }
                // calculateSum(totalNumber)
                setSalary(calculateSum(totalNumber))
    
            }catch(error){
                console.log(error)
            }
        }
 
        fetchEmpolyee();
        // total();
    },[state,dateShow])
    PaySalary = salary
    // console.log(" this is the total: "+salary)
    // console.log(data)
    return(<>
    <Document>
        <Page size="A4" >
        <Text>This Month PayRoll: {dateShow}</Text><br />
         {data && data.map((items)=>(
            <View key={items.empolyee_name} >
                {/* <Text>{items.attendance_date.split("-")[0] + "-" + items.attendance_date.split("-")[1]}</Text> */}
                <Text >
                    Username:
                    {items.empolyee_name}
                </Text>
                <Text>
                    Father/Name:
                    {items.empolyee_f_name}
                </Text>
                <Text>
                    Email:
                    {items.empolyee_email}
                </Text>
                <Text>
                    Presend:
                    {items.attendance_day}
                </Text>
                <Text>
                    Salary:
                    {items.empolyee_salary}-AF
                </Text>
                <Text>
                    Can Recieve:
                    {Math.round(Number(items.empolyee_salary)/26)*Number(items.attendance_day)}-AF
                </Text>
                <Text>
                </Text>
            </View>
                    ))} 
                <Text>Total Salary : {salary}-Af</Text>
        </Page>
    </Document>
    {/* <button className='btn ms-3 btn-dark'> 
    <PDFDownloadLink document={<Download />} className="link-info " fileName={`TotalSalary.pdf`}>Download PDF</PDFDownloadLink>
</button>  */}

    </>)
}