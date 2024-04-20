import React from "react";
import img1 from "../MissionPHP/mission11.png";
import img2 from "../MissionPHP/mission12.png";
import img3 from "../MissionPHP/mission13.png";
import img4 from "../MissionPHP/mission14.png";
import img5 from "../MissionPHP/mission15.png";
import img6 from "../MissionPHP/mission16.png";
import img7 from "../MissionPHP/mission17.png";
import img8 from "../MissionPHP/mission18.png";
const Mission2 = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos Projet Deuxième Année
        </h1>
        <p className="text-3xl ">
          Page d'accueil/Fonctino pour ajouter un vehicule{" "}
        </p>
        <img className="w-[50%]" src={img1} alt="" />
        <p className="text-3xl ">Message de confirmation</p>
        <img className="w-[50%]" src={img2} alt="" />
        <p className="text-3xl ">Liste vehicules</p>
        <img className="w-[50%]" src={img3} alt="" />
        <p className="text-3xl ">Fonction pour vendre une voiture</p>
        <img className="w-[50%]" src={img4} alt="" />
        <p className="text-3xl ">Fonction de recherche d'un vehicule </p>
        <img className="w-[50%]" src={img5} alt="" />
        <p className="text-3xl ">Resultats recherche</p>
        <img className="w-[50%]" src={img6} alt="" />
        <p className="text-3xl ">Informations sur le vehicule vendu</p>
        <img className="w-[50%]" src={img7} alt="" />
        <p className="text-3xl ">
          Chiffre d'affaire de l'entreprise (augmente apres chaque vente)
        </p>
        <img className="w-[50%]" src={img8} alt="" />
      </div>
    </div>
  );
};

export default Mission2;
