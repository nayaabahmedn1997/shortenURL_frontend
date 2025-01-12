import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ActivateAccount from './pages/ActivateAccount'

const App = () => {
  return (
    <Routes>
        <Route path='/'  exact element={<Home />}  />
        <Route  path="/register" element={<Register />}  />
        <Route  path="/login" element={<Login />}  />
        <Route path="/forgotPassword" element={<ForgotPassword />}  />
        <Route path = "/resetPassword/:resetToken" element ={<ResetPassword />} />
        <Route path="/activate-account/:activationToken" element={<ActivateAccount />} />
    </Routes>
  )
}

export default App