import { BrowserRouter as Routers , Routes , Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Home from './Pages/Home';
import Navbar from "./Component/Navbar";
import Empolyee from "./Pages/Empolyee";
import NewUpdateEm from "./Component/UpdateEmpolyee";
import LoginPage from "./Component/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
  const { logout } = useContext(AuthContext)
  window.onload = ()=>{
    // console.log("Page LOaded")
    logout()
  }
  // setInterval(()=>{
  //   logout()
  // },86400)
// },10000)
  const { currentUser } = useContext(AuthContext)
  const LoginPlease = "Please At First Login Then You Can Access These Page If you do not have account contact this email hamza.nawabi119@gmail.com ..."
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<Navbar/> } >
          <Route path="/" element={<Home/> } />
          <Route path='/login' element={<LoginPage />} />
          {/* <Route path='/empolyee' element={<Empolyee />} /> */}
          {currentUser?
          <Route path="">
          <Route path='/empolyee' element={<Empolyee />} />
          <Route path='/empolyee/:id' element={<Empolyee />} />
          <Route path='/update/empolyee/' element={<NewUpdateEm />} />
          <Route path='/update/empolyee/:id' element={<NewUpdateEm />} />
          </Route>
          :
          null
            
          }
            <Route path='*' element={<LoginPage state={LoginPlease} />} />
          </Route>
        </Routes>
      </Routers>
    </div>
  );
}


export default App;
