import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Dashboard from './pages/Dashboard/Dashboard'
import Project from './pages/Projects/Projects'
import Signin from  './pages/Signin/Singin'
import Signup from  './pages/SIgnup/Signup'
import Header from "./Components/Header/Header";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
    