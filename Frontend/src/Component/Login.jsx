import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext, MainApi } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(LoginPage) {
    const { login,loginEmpolyee } = useContext(AuthContext)
    const [ name,setName ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ error,setError ] = useState(false)
    const navigate = useNavigate()
    const [ type,setType ] = useState()
    // console.log(type)
    // console.log(LoginPage.state)
    // if(LoginPage.state){
        // setError(LoginPage.state)
    // }
    const inputs = {
        user_name:name,
        user_password:password
    }
    const handleLogin = async(e)=>{
        e.preventDefault()
        if(type==="admin"){
            try{
               const res= await axios.post(`${MainApi}/users/login`,inputs)
            //    console.log(res)
               setError(res.data.error)
               if(res.data.user_id){
                // console.log(res.data.user_id)
                login(inputs)
                navigate('/')
               }
            }catch(err){
                // console.log(err)
                setError(err.response.data.error)
            }
        }else if(type==="empolyee"){
            try{
                const res= await axios.post(`${MainApi}/users/empolyee/login`,inputs)
                console.log(res)
                
                 loginEmpolyee(inputs)
                 navigate('/')
                // }
             }catch(err){
                // console.log(err.response.data.error)
                 setError(err.response.data.error)
             }
        }
        else{
            alert("Please Select User Type ...")
        }
    }
  return (
    <div className='container p-md-5'>
        <center>
            <div className={`alert alert-danger ${error ? "d-block":"d-none"}`}>{error}</div>
            <div className='mb-5 text-danger'>
                {LoginPage.state}
            </div>
            
        <div className="form-floating mb-3">
            <input type="email" className="form-control" onChange={(e)=>setName(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Username</label>
        </div>
            <div className="form-floating">
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <select className='form-control my-3 p-3' onChange={(e)=>setType(e.target.value)}>
                <option value="none">Who Are You?</option>
                <option value="empolyee">Empolyee</option>
                <option value="admin">Admin</option>
            </select>
        <button className='btn my-btn-primary my-3 form-control' onClick={handleLogin}>Login</button>
        </center>
    </div>
  )
}
