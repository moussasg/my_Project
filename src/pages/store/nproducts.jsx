import React from "react";
import { Link } from "react-router-dom";
import { Mesproduits } from "../../constant/toutemarque";
import classes from "./index.module.css";
function Nproducts() {
  return (
    <>
      {Mesproduits.map((el, i) => (
        <div className={classes.cardContainer} key={i}>
          <Link to={`/Mesproduits/${el.id}`}>
            <img src={el.image} alt={el.buttonText} />
          </Link>
        </div>
      ))}
    </>
  );
}

export default Nproducts;