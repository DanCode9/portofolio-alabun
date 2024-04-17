import React from "react";
import imgCart1 from "../images-projets/cart-1.png";
import imgCart2 from "../images-projets/cart-2.png";
import imgCart3 from "../images-projets/cart-3.png";
const MovieDB = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos Application Gestion Restaurant
        </h1>
        <p className="text-3xl ">Page accueil Application </p>
        <img className="w-[50%]" src={imgCart2} alt="" />
        <p className="text-3xl ">Function ajout article dans le panier</p>
        <img className="w-[50%]" src={imgCart1} alt="" />
        <p className="text-3xl ">Function panier</p>
        <img className="w-[50%]" src={imgCart3} alt="" />
      </div>
    </div>
  );
};

export default MovieDB;
