import React from "react";
import Pendu from "../images/jeu.png";
import CartApp from "../images/cart.png";
import Films from "../images/mov.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      id="projects"
      className="md:h-[100vh] bg-neutral-900 p-20 flex flex-col gap-10 mb-20"
    >
      <h1 className=" text-emerald-300  text-4xl font-bold text-center">
        Certains de mes projets
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center ">
        {/* PROJET 1 */}
        <Link
          to={"/page-projet-cart"}
          className="bg-slate-200 border projet1 border-white  w-96 bg-base-100 "
        >
          <figure>
            <img className="w-[100%]" src={CartApp} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1
              href="/page-projet-cart"
              className="card-title text-xl font-bold"
            >
              React Shoppin App
            </h1>
            <p>Application shopping avec un panier utilisant ReactJs</p>
          </div>
        </Link>
        {/* PROJET 2 */}
        <Link
          to={"/page-projet-films"}
          className="bg-slate-200 border projet2 border-white card w-96 bg-base-100 "
        >
          <figure>
            <img src={Films} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1 className="card-title text-xl font-bold">Application Films</h1>
            <p>Application films utilisant ReactJs et le API de TheMovieDB</p>
          </div>
        </Link>
        {/* PROJET 3 */}
        <Link
          to={"/page-projet-resto"}
          className="bg-slate-200 border projet3 border-white card w-96 bg-base-100 "
        >
          <figure>
            <img src={Pendu} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h1 className="card-title text-xl font-bold">Gestion Restaurant</h1>
            <p>
              Application de gestion des stocks pour un restaurant en Java et
              JavaFX
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
