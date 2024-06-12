import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';


const routes = (
  <Router>
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
    </Routes>
  </Router>
)

const App = () => {

  return (
    <div>
      {routes}
    </div>
  )
}

export default App