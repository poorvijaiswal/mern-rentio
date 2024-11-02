import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/RentioHome/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import PrivateRoute from './pages/RentioHome/components/PrivateRoute';
import LandingPage from './pages/LandingPage';
import Meal from './pages/RentioMeal/Meal';
import Header from './pages/RentioHome/components/Header';
import ForgetPassw from './pages/ForgotPassw';
import ResetPassword from './pages/ResetPassword';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={ <LandingPage/>} />
        <Route path='/sign-in' element={ <SignIn/>} />
        <Route path='/sign-up' element={ <SignUp/>} />
        <Route path='/about' element={ <About/>} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/meals' element={ <Meal/>} />         
        <Route path='/homes' element={ <Home/>} />      
        <Route path="/forget-passw" element={<ForgetPassw />} />
        <Route path="/reset-passw" element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}
