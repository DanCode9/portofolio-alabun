import React from "react";
import img1 from "../img-stages/stage2img1.png";
import img2 from "../img-stages/stage2img2.png";
import img3 from "../img-stages/stage2img3.png";
import img4 from "../img-stages/stage2img4.png";
import img5 from "../img-stages/stage2img5.png";
const Stage1 = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos stage en Télétravail
        </h1>
        <p className="text-3xl ">
          Gestion de versions de l'application utilisant GitHub
        </p>
        <img className="w-[50%]" src={img1} alt="" />
        <p className="text-3xl ">Page d'accueil du projet</p>
        <img className="w-[50%]" src={img2} alt="" />
        <p className="text-3xl ">Système d'achat de billets</p>
        <img className="w-[50%]" src={img3} alt="" />
        <p className="text-3xl ">Système de réservation d'hôtel</p>
        <img className="w-[50%]" src={img5} alt="" />
        <p className="text-3xl ">
          Example du code (partie système de réservation d'hôtel)
        </p>
        <img className="w-[50%]" src={img4} alt="" />
      </div>
    </div>
  );
};

export default Stage1;
