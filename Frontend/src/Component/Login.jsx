import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext, MainApi } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(LoginPage) {
    const { login } = useContext(AuthContext)
    const [ name,setName ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ error,setError ] = useState(false)
    const navigate = useNavigate()
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
        try{
           const res= await axios.post(`${MainApi}/users/login`,inputs)
        //    console.log(res)
           setError(res.data.error)
           if(res.data.data.user_id){
            // console.log(res.data.user_id)
            login(inputs)
            navigate('/')
           }
        }catch(err){
            setError(err.response.data.error)
        }
    }
  return (
    <div className='container p-md-5'>
        <center>
            <div className={`alert alert-danger ${error ? "d-block":"d-none"}`}>{error}</div>
            <div className='mb-5 text-danger'>
                {LoginPage.state}
            </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" onChange={(e)=>setName(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Username</label>
        </div>
            <div class="form-floating">
            <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <button className='btn my-btn-primary my-3 form-control' onClick={handleLogin}>Login</button>
        </center>
    </div>
  )
}
