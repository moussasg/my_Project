import React from "react";
import classes from "./index.module.css"
import { useParams } from "react-router-dom"; // pour récupérré id de url
import { Mesproduits } from "../../constant/toutemarque" // notre cst
function Card() {//Card li tafichi les produist meditelha props : notre cst f app.jsx
  const { id } = useParams(); // useparams pour récupéré paramétre de url , id jebto m cst
  const FindId = Mesproduits.find((el) => el.id.toString() === id);
  // FindId yjib id de cst 
  return (
    <div> {/*produits jbto m cst c les produits de marque a afiché */}
        {FindId.produits.map((el, i) => (
          <div key={i}> 
          <table className={classes.table}>
          <tr>
           <td><h1>{el.nom}</h1></td>
           </tr>
           <tr>
            <td><img src={el.imgp}/> </td>
           </tr>
           <div className={classes.carprix}>
           <tr>
            <td> <h1>{el.caractér} </h1></td>
           </tr>
           <tr>
            <td> <h1> Prix :  
              {el.prix}  </h1></td>
           </tr>
          </div>
            </table>
          </div>
        ))}
    </div>
  );
}

export default Card;