import React from "react";
import imgMovie1 from "../images-projets/movie-1.png";
import imgMovie2 from "../images-projets/movie-2.png";
import imgMovie3 from "../images-projets/movie-3.png";
import imgMovie4 from "../images-projets/movie-4.png";
import imgMovie5 from "../images-projets/movie-5.png";
const MovieDB = () => {
  return (
    <div className="text-slate-200">
      <div className="photos  items-center flex flex-col gap-5 h-fit p-10">
        <h1 className="font-bold text-emerald-500 text-4xl mb-10">
          Photos Application Gestion Restaurant
        </h1>
        <p className="text-3xl ">Page accueil Application </p>
        <img className="w-[50%]" src={imgMovie1} alt="" />
        <p className="text-3xl ">Function recherche un film</p>
        <img className="w-[50%]" src={imgMovie2} alt="" />
        <p className="text-3xl ">Detailles sur un film</p>
        <img className="w-[50%]" src={imgMovie3} alt="" />
        <p className="text-3xl ">
          Example du code (partie récupération d'informations à partir de la clé
          API)
        </p>
        <img className="w-[50%]" src={imgMovie4} alt="" />
        <p className="text-3xl ">Obtenir une cle API</p>
        <img className="w-[50%]" src={imgMovie5} alt="" />
      </div>
    </div>
  );
};

export default MovieDB;
