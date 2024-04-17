import React from "react";
import imgResto1 from "../images-projets/rata-1.png";
import imgResto2 from "../images-projets/rata-2.png";
import imgResto3 from "../images-projets/rata-3.png";
import imgResto4 from "../images-projets/rata-4.png";
const Resto = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos Application Gestion Restaurant
        </h1>
        <p className="text-3xl ">Page accueil Application </p>
        <img className="w-[50%]" src={imgResto1} alt="" />
        <p className="text-3xl ">
          Function pour ajouter une commande dans le tableau
        </p>
        <img className="w-[50%]" src={imgResto2} alt="" />
        <p className="text-3xl ">
          Function pour ajouter un produit dans le tableau
        </p>
        <img className="w-[50%]" src={imgResto3} alt="" />
        <p className="text-3xl ">
          Modification de l'interface visuelle de l'application à l'aide du
          générateur de scènes
        </p>
        <img className="w-[50%]" src={imgResto4} alt="" />
      </div>
    </div>
  );
};

export default Resto;
