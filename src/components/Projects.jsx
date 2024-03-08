import React from "react";
import Pendu from "../images/jeu.png";
import CartApp from "../images/cart.png";
import Films from "../images/mov.jpg";

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
        <div className="bg-slate-200 border border-white card w-96 bg-base-100 ">
          <figure>
            <img className="w-[100%]" src={CartApp} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h2 className="card-title">React Shoppin App</h2>
            <p>Application shopping avec un panier utilisant ReactJs</p>
          </div>
        </div>
        <div className="bg-slate-200 border border-white card w-96 bg-base-100 ">
          <figure>
            <img src={Films} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h2 className="card-title">Application Films</h2>
            <p>Application films utilisant ReactJs et le API de TheMovieDB</p>
          </div>
        </div>
        <div className="bg-slate-200 border border-white card w-96 bg-base-100 ">
          <figure>
            <img src={Pendu} alt="Shoes" />
          </figure>
          <div className="card-body p-10">
            <h2 className="card-title">Gestion Restaurant</h2>
            <p>
              Application de gestion des stocks pour un restaurant en Java et
              JavaFX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
