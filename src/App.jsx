import React  from 'react'
import './App.css'
import Contact from "./pages/contact/contact"
import Home from './pages/home/home'
import { Link,  Route, Routes } from "react-router-dom"
import Products from "./pages/store/nproducts" // li yafichi les marques
import Card from "./components/card/index" // yafichi les produits de marque
import { Mesproduits } from "./constant/toutemarque" // notre cst
function App() {
  return (  
    <>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Contact">Contact</Link>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        {/*Card li tafichi les produist meditelha props la cst */}
        <Route path='/Mesproduits/:id' element={<Card props={Mesproduits}/>}/>
      </Routes>
      </nav>
    </>
  )
}
export default App
