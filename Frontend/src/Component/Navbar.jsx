import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "../App.css"
import { AuthContext } from '../context/AuthContext'
export default function Navbar() {
    const navigate = useNavigate()
    const { currentUser,logout } = useContext(AuthContext)
    // console.log(currentUser)
    const handleLogout = async(e)=>{
        e.preventDefault()
        try{
            logout()
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <nav class="navbar navbar-expand-sm position-sticky my-bg-primary top-0 " style={{zIndex:"10"}}>
              <div class="container">
                <Link class="navbar-brand" to="/">
                    <img style={{height:"40px"}} src="https://th.bing.com/th/id/R.5c65b3ba4fceea63637c97c7e169d74f?rik=N9a2bjBOhtoOdA&riu=http%3a%2f%2falkemites.com%2falkemites%2fmis%2frsz_hrmis-logo.png&ehk=jDOmkvjXIk2%2fL0sOdpokL%2b%2fu46DEcAmCQSTtBKxBBQE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </Link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                        </li>
                        {currentUser?
                        <li class="nav-item">
                            <Link class="nav-link active" to="/empolyee" aria-current="page">Empolyee <span class="visually-hidden"></span></Link>
                        </li>
                        :
                        null}
                        
                    </ul>
                    {currentUser?
                    <form class="d-flex my-2 my-lg-0" onClick={handleLogout}>
                        Logout
                    </form>
                    :
                    <form class="d-flex my-2 my-lg-0">
                        <Link to="/login" className='nav-link'>Login</Link>
                    </form>
                    }
                </div>
          </div>
        </nav>
        <Outlet/>
    </div>
  )
}
