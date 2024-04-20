import React from "react";
import img1 from "../img-stages/IMG_6855.png";
import img2 from "../img-stages/IMG_6869.png";
import img3 from "../img-stages/IMG_6873.png";
import img4 from "../img-stages/IMG_6877.png";
import img5 from "../img-stages/IMG_7131.png";
import img6 from "../img-stages/est1.jpg";
import img7 from "../img-stages/est2.jpg";

const Stage1 = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos stage Est Ensemble
        </h1>
        <p className="text-3xl ">
          Masterisation postes informatiques et gestion de stock
        </p>
        <img className="w-[50%]" src={img1} alt="" />
        <p className="text-3xl ">Chambre de stockage</p>
        <img className="w-[50%]" src={img2} alt="" />
        <p className="text-3xl ">
          Étiquetage des boîtes utilisant l'appareil dymo
        </p>
        <img className="w-[50%]" src={img3} alt="" />
        <p className="text-3xl ">Boîtes étiquetées</p>
        <img className="w-[50%]" src={img4} alt="" />
        <p className="text-3xl ">
          Système de gestion de tickets appelé service now
        </p>
        <img className="w-[50%]" src={img6} alt="" />
        <p className="text-3xl ">Fiche pour faire un prêt de matériel</p>
        <img className="w-[50%]" src={img7} alt="" />
      </div>
    </div>
  );
};

export default Stage1;
