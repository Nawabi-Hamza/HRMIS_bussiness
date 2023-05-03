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
        <nav className="navbar navbar-expand-sm position-sticky my-bg-primary top-0 " style={{zIndex:"10"}}>
              <div className="container">
                <Link className="navbar-brand" to="/">
                    <img style={{height:"40px"}} src="https://th.bing.com/th/id/R.5c65b3ba4fceea63637c97c7e169d74f?rik=N9a2bjBOhtoOdA&riu=http%3a%2f%2falkemites.com%2falkemites%2fmis%2frsz_hrmis-logo.png&ehk=jDOmkvjXIk2%2fL0sOdpokL%2b%2fu46DEcAmCQSTtBKxBBQE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                        </li>
                        {currentUser?
                            currentUser.user_id?
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/empolyee" aria-current="page">Empolyee <span className="visually-hidden"></span></Link>
                                </li>
                                :null
                        :
                        null}
                        {currentUser?
                            currentUser.empolyee_id?
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/profile" aria-current="page">Profile <span className="visually-hidden"></span></Link>
                                </li>
                                :null
                        :
                        null}
                        
                    </ul>
                    {currentUser?
                    <form className="d-flex my-2 my-lg-0" onClick={handleLogout}>
                        Logout
                    </form>
                    :
                    <form className="d-flex my-2 my-lg-0">
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
