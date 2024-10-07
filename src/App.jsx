import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/RentioHome/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import Meal from './pages/RentioMeal/Meal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage/>} />
        <Route path='/sign-in' element={ <Signin/>} />
        <Route path='/sign-up' element={ <SignUp/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/profile' element={ <Profile/>} />         
        <Route path='/meals' element={ <Meal/>} />         
        <Route path='/homes' element={ <Home/>} />         
      </Routes>
    </BrowserRouter>
  )
}
