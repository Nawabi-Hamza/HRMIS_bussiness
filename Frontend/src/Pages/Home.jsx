



import React from 'react'

export default function Home() {
    
  return (
    <div className='container-fluid' style={{backgroundColor:"lightblue"}}>
        <div className="row p-3" style={{height:"90vh"}}>
            <div className="col-md-6 ps-4">
                <h1 className='display-1 py-3'>Welcome To HRMIS</h1>
                <p className='py-3'>Prepaired By : Hamza Nawabi</p>

            </div>
            <div className="col-md-5 ps-4">
            <img src="./pngegg.png" style={{width:'100%',objectFit:"cover"}} alt="" />

            </div>
        </div>
    </div>
  )
}
