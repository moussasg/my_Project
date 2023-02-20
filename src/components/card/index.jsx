import React from "react";
import { useParams } from "react-router-dom";
import { Mesproduits } from "../../constant/toutemarque"
import classes from "./index.module.css"
function Card() {
  const { id } = useParams(); // useparams pour récupéré paramétre de url , id jebto m cst
  const product = Mesproduits.find((el) => el.id.toString() === id);
  // el yparcouri dakhel cst yjib id de cst 
  return (
    <div> {/*produits jbto m cst c les produits de marque a afiché */}
        {product.produits.map((el, i) => (
          <div key={i}> 
          <table className={classes.table}>
            <tr>
           <td><h1>{el.nom}</h1></td>
           </tr>
           <tr>
            <td><img src={el.imgp}/> </td>
           </tr>
           <tr>
            <td> <h1>{el.caractér} </h1></td>
           </tr>
            </table>
          </div>
        ))}
    </div>
  );
}

export default Card;