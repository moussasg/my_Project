import React from "react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";
import { Mesproduits } from "../../constant/toutemarque" // ma cst;
function Nproducts() {
  return (
    <>
      {Mesproduits.map((el, i) => (
        <div className={classes.cardContainer} key={i}>
          <Link to={`/Mesproduits/${el.id}`}> {/*linké vers cst Mesproduits.id*/}
            <img src={el.image}/> {/*image de marque*/}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Nproducts;