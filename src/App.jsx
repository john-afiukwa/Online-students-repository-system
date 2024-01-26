import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project"
import SignUp from "./pages/signup/Signup"
import SignIn from "./pages/signin/SignIn"
import ContactUs from "./pages/contactus/ContactUs"

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="Project" element={<Project />}></Route>
        <Route path="SignIn" element={<SignIn />}></Route>
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
