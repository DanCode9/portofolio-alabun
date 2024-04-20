import React from "react";
import img1 from "../images-projets/rata-1.png";
import img2 from "../images-projets/rata-2.png";
import img3 from "../images-projets/rata-3.png";
import img4 from "../images-projets/rata-4.png";
const Mission1 = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos Projet Première année
        </h1>
        <p className="text-3xl ">Page d'accueil </p>
        <img className="w-[50%]" src={img1} alt="" />
        <p className="text-3xl ">Fonction pour ajouter un produit</p>
        <img className="w-[50%]" src={img3} alt="" />
        <p className="text-3xl ">Fonction pour ajouter une commande</p>
        <img className="w-[50%]" src={img2} alt="" />
        <p className="text-3xl ">
          Développement de l'interface visuelle utilisant SceneBuilder
        </p>
        <img className="w-[50%]" src={img4} alt="" />
      </div>
    </div>
  );
};

export default Mission1;
