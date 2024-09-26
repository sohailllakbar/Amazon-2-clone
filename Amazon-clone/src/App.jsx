import "./App.css";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Loginpage from "./Components/Loginpage";
import Signuppage from "./Components/Signuppage";
import { Routes, Route } from "react-router-dom";
import PaymentProceed from "./Components/payment-proceed-chechout-page"

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/loginpage" element ={<Loginpage/>}/>
        <Route path="/singin"  element = {<Signuppage/>}/>
        <Route path="/paymentproceed" element ={<PaymentProceed/>}/>
      </Routes>
    </>
  );
}

export default App;
