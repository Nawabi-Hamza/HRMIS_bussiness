import { BrowserRouter as Routers , Routes , Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Home from './Pages/Home';
import Navbar from "./Component/Navbar";
import Empolyee from "./Pages/Empolyee";
import NewUpdateEm from "./Component/UpdateEmpolyee";



function App() {

  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<Navbar/> } >
          <Route path="/" element={<Home/> } />
          <Route path='/empolyee' element={<Empolyee />} />
          <Route path='/empolyee/:id' element={<Empolyee />} />
          <Route path='/update/empolyee/' element={<NewUpdateEm />} />
          <Route path='/update/empolyee/:id' element={<NewUpdateEm />} />
          </Route>
        </Routes>
      </Routers>
    </div>
  );
}


export default App;
