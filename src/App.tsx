
import Home from "./pages/Home"
import Details from "./components/Details"
import {Route, Routes} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/details/:id" element={<Details></Details>}/>
    </Routes>
    </AuthProvider>
    </>

  )
}

export default App
