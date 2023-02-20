import React from 'react'
import classe from "./index.module.css"
import Des from "../../assets/des.png"
import Login from '../Login/login';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <div className={classe.home}>
    <img src={Des}></img>
    <div className={classe.but}>
 <button type="button" class="btn btn-outline-primary"> <Link to="/Login"> Get Started</Link></button>
    </div>
    </div>
       </>
      )}
