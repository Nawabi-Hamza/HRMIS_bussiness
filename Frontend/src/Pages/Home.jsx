


import "../App.css"
import React from 'react'

export default function Home() {
    
  return (
    <div className='container-fluid' style={{backgroundColor:"lightblue"}}>
        <div className="row p-3" style={{height:"100%"}}>
            <div className="col-md-6  ps-4">
                <h1 className='display-1 py-3'>Welcome To HRMIS</h1>
                <p className='py-3 d-flex'>Designed By : </p>
                 <i><h2 className='ps-5'>Hamza Nawabi</h2></i>
                 <br /><br />
                 <h4>OUR TEAM</h4>
                 <table id="groupTableWork" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>F/Name</th>
                      <th>ID</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>Hamza Nawabi</td>
                      <td>Farhad</td>
                      <td>22-RD200-196</td>
                    </tr>
                    <tr>
                      <td>Mohamad Yasin</td>
                      <td></td>
                      <td>22-RD200-61</td>
                    </tr>
                    <tr>
                      <td>Atef</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Habib</td>
                      <td>Younos</td>
                      <td>22RD-200-108</td>
                    </tr>
                    <tr>
                      <td>Tamim</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                 </table>
            </div>
            <div className="col-md-5 ps-4">
            <img src="./pngegg.png" style={{width:'100%',objectFit:"cover"}} alt="" />
            </div>
        </div>
    </div>
  )
}
