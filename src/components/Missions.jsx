import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/jeu.png";
import img2 from "../MissionPHP/mission11.png";
import img3 from "../images-projets/recherche.png";
import img4 from "../images-projets/java2.png";
const Missions = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-emerald-500 text-center mt-10">
        Missions en cours de formation
      </h1>
      <div className="missions-ecole px-5 flex gap-10 justify-center items-center h-screen">
        {/* MISSION 1 */}
        <Link
          to={"/page-mission2"}
          className="bg-slate-200 border projet1 border-white  h-fit  w-96 bg-base-100 "
        >
          <figure>
            <img className="w-[100%]" src={img2} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1
              href="/page-projet-cart"
              className="card-title text-xl font-bold"
            >
              Application Gestion Parc Auto
            </h1>
            <p>Application de gestion réalisée en PHP</p>
          </div>
        </Link>
        {/* MISSION 3 */}
        <Link
          to="#"
          className="bg-slate-200 border projet1 border-white h-fit  w-96 bg-base-100 "
        >
          <figure>
            <img className="w-[100%]" src={img3} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1
              href="/page-projet-cart"
              className="card-title text-xl font-bold"
            >
              Application Recherche D'emploi
            </h1>
            <p>Application de gestion réalisée en PHP</p>
          </div>
        </Link>
        {/* MISSION 2 */}
        <Link
          to={"/page-mission1"}
          className="bg-slate-200 border projet1 border-white h-fit  w-96 bg-base-100 "
        >
          <figure>
            <img className="w-[100%]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1
              href="/page-projet-cart"
              className="card-title text-xl font-bold"
            >
              Application Gestion Stock Restaurant
            </h1>
            <p>Application de gestion réalisée en Java et Scene Builder</p>
          </div>
        </Link>
        {/* MISSION 4 */}
        <Link
          to="#"
          className="bg-slate-200 border projet1 border-white h-fit  w-96 bg-base-100 "
        >
          <figure>
            <img className="w-[100%]" src={img4} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1
              href="/page-projet-cart"
              className="card-title text-xl font-bold"
            >
              Application Multiexercices
            </h1>
            <p>Application comprenant plusieurs exercices Java</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Missions;
