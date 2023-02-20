import Opp from "../assets/opp.jpg"
import App from "../assets/apple.png"
import Rea from "../assets/rea.png"
import Xi from "../assets/xi.png"
import Sam from "../assets/sam.png"
import huita from "../assets/8a.png"
import neufa from "../assets/9a.jpg"
export const Mesproduits = [
    {
      id: 1,
      image: Xi,
      buttonText: "Nos Produits Xiaomi",
      produits:[
        {
          imgp: huita,
          nom: "8a" ,
          caractér: "Ram : 2gb "
        },
        {
          imgp:neufa,
          nom:"9a" ,
          caractér: "Ram : 2gb" ,
        }
      ]
    },
    {
      id: 2,
      image: App,
      buttonText: "Nos Produits Apple",
      produits:[
        {

          imgp: huita ,
        },
        {
          imgp: huita
        }
      ]
    },
    {
      id: 3,
      image: Sam,
      buttonText: "Nos Produits Samsung",
      produits:[
        {
          imgp: huita
        },
        {
          imgp:huita
        }
      ]
    },
    {
      id: 4,
      image: Rea,
      buttonText: "Nos Produits Realme",
      produits:[
        {
          imgp: huita
        },
        {
          imgp: huita
        }
      ]
    },
    {
      id: 5,
      image: Opp,
      buttonText: "Nos Produits Oppo",
      produits: [
        {
          imgp: huita
        },
        {
          imgp: huita
        }
      ]
    }
  ];
export default Mesproduits

