import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
export default function Navbar() {
 
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
                        <li class="nav-item">
                            <Link class="nav-link active" to="/empolyee" aria-current="page">Empolyee <span class="visually-hidden"></span></Link>
                        </li>
                        
                    </ul>
                    <form class="d-flex my-2 my-lg-0">
                        Logout
                    </form>
                </div>
          </div>
        </nav>
        <Outlet/>
    </div>
  )
}