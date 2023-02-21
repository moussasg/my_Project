import React  from 'react'
import './App.css'
import Login from "./pages/Login/login"
import Home from './pages/home/home'
import { Link,  Route, Routes } from "react-router-dom"
import Products from "./pages/store/nproducts" // li yafichi les marques
import Card from "./components/card/index" // yafichi les produits de marque
import { Mesproduits } from "./constant/toutemarque" // notre cst
import logohydra from "../src/assets/hydra smartphones.jpg"
function App() {
  return (  
    <>
        <nav className='nav'>
          <div className='logpg'>
        <img src={logohydra}></img>
        </div>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Login">Login</Link>
      </nav>
      <Routes>
      <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>}/>{/* les marques*/}
        {/*Card li tafichi les produist meditelha props la cst */}
        <Route path='/Mesproduits/:id' element={<Card props={Mesproduits}/>}/>
      </Routes>
    </>
  )
}
export default App