import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/styles/Footer.css";
import "./Assets/styles/Register.css";
import "./Assets/styles/Style.css";
import "./Assets/styles/Style2.css";
import "./Assets/styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CustomerReg from "./Components/Registration/CustomerReg";
import DocReg from "./Components/Registration/DocReg";
import Trainerreg from "./Components/Registration/Trainerreg";
import GymReg from "./Components/Registration/GymReg";
import CustomerLog from "./Components/Login/CustomerLog";
import DoctorLog from "./Components/Login/DocLog";
import TrainerLog from "./Components/Login/TrainerLog";
import GymLog from "./Components/Login/GymLog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main";
import Registration from "./Components/Registration";
import About from "./Components/About";
import Login from "./Components/Login";
import AdminLog from "./Components/Admin/Admin";
import Adminpage from "./Components//Admin/Adminpage";
import ViewDoctor from "./Components/Admin/ViewDoctor";
import ViewCustomer from "./Components/Admin/ViewCustomer";
import ViewGym from "./Components/Admin/ViewGym";
import CusProfile from "./Components/Profile/CusProfile";
import DocProfile from "./Components/Profile/DocProfile";
import GymProfile from "./Components/Profile/GymProfile";
import TrainerProfle from "./Components/Profile/TrainerProfle";


function App() {
  const [auth, setauth] = useState(0);
  useEffect(() => {
    if(localStorage.getItem("adminlog")!=null){
      setauth(5)
    } else if (localStorage.getItem("CustomerLogId") != null) {
      setauth(1);
    } else if (localStorage.getItem("Doctorlogid") != null) {
      setauth(2);
    } else if (localStorage.getItem("Trainerlogid") != null) {
      setauth(3);
    } else if (localStorage.getItem("Gymlogid") != null) {
      setauth(4);
    } else {
      setauth(0);
    }
  });

  return (
    <BrowserRouter basename="projects/health_empire">
      {/* <button onClick={()=>{setauth(0)}}> nolog</button>
      <button onClick={()=>{setauth(1)}}> Customer</button>
      <button onClick={()=>{setauth(2)}}> Doctor</button>
      <button onClick={()=>{setauth(3)}}> Trainer</button>
      <button onClick={()=>{setauth(4)}}> Gym</button> */}
      <div className="App">
        <Navbar auth={auth} />

        <Routes>
          <Route exact path="/" element={<Main auth={auth} />} />
          <Route path="/Admin" element={<AdminLog />} />
          <Route path="/Admin/Adminpage" element={<Adminpage />} />
          <Route path="/Admin/ViewDoctor" element={<ViewDoctor />} />
          <Route path="/Admin/ViewCustomer" element={<ViewCustomer />} />
          <Route path="/Admin/ViewGym" element={<ViewGym />} />
          


          <Route path="/Home" element={<Main auth={auth} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register/cusreg" element={<CustomerReg />} />
          <Route path="/Register/docreg" element={<DocReg />} />
          <Route path="/Register/trainerreg" element={<Trainerreg />} />
          <Route path="/Register/gymreg" element={<GymReg />} />
          <Route path="/Login/cuslog" element={<CustomerLog />} />
          <Route path="/Login/doclog" element={<DoctorLog />} />
          <Route path="/Login/trainerlog" element={<TrainerLog />} />
          <Route path="/Login/gymlog" element={<GymLog />} />
          

          
         

      
          


          <Route path="/cusprofile" element={<CusProfile/>}/>
          <Route path="/docprofile" element={<DocProfile/>}/>
          <Route path="/gymprofile" element={<GymProfile/>}/>
          <Route path="/trainerprofile" element={<TrainerProfle/>}/>

          

          <Route path="/*" element={<img width={'100%'} height={700} src="https://miro.medium.com/v2/resize:fit:750/0*QOZm9X5er1Y0r5-t"/>}/>

        </Routes>

        <Footer auth={auth} />
      </div>
    </BrowserRouter>
  );
}

export default App;
