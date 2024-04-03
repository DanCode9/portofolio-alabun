import React from "react";
import FluxRSS from "./FluxRSS";
import newsData from "../fluxRss/Flux.json";

const Veille = () => {
  return (
    <div className="bg-neutral-900 p-5 sm:p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-emerald-300 mb-6">
        Veille Informationnelle : React.js
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-800 p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-emerald-300 mb-4">
            Qu'est-ce que React.js ?
          </h2>
          <p className="text-base md:text-lg text-slate-200">
            React.js est une bibliothèque JavaScript open-source utilisée pour
            créer des interfaces utilisateur interactives et dynamiques.
          </p>
        </div>

        <div className="bg-neutral-800 p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-emerald-300 mb-4">
            Pourquoi React.js ?
          </h2>
          <p className="text-base md:text-lg text-slate-200">
            React.js offre des performances élevées, une réutilisabilité des
            composants, et une communauté active de développeurs.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-emerald-300 mb-4">
          Caractéristiques clés de React.js
        </h2>
        <ul className="list-disc list-inside text-base md:text-lg text-slate-200">
          <li>Virtual DOM pour des mises à jour efficaces.</li>
          <li>Composants réutilisables.</li>
          <li>Unidirectionnel de données (one-way data binding).</li>
          <li>Écosystème riche avec de nombreuses bibliothèques tierces.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-emerald-300 mb-4">
          Exemple de code
        </h2>
        <pre className="bg-zinc-900 text-slate-200 p-4 rounded-md text-xs md:text-lg">
          {`
import React from 'react';

function MonComposant() {
  return (
    <div>
      <h1>Mon Composant React</h1>
      <p>Bienvenue dans le monde de React.js</p>
    </div>
  );
}

export default MonComposant;
          `}
        </pre>
      </div>

      <div className="Actualites">
        <h2 className="text-3xl font-bold mb-4 text-emerald-300 ">
          Dernières actualités sur ReactJS
        </h2>
        <FluxRSS news={newsData} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-emerald-300 mb-4">
          Conclusion
        </h2>
        <p className="text-base md:text-lg text-slate-200">
          React.js est un framework JavaScript puissant pour la création
          d'interfaces utilisateur modernes. Il est largement utilisé dans
          l'industrie et offre de nombreuses fonctionnalités pour développer des
          applications web de haute qualité.
        </p>
      </div>
    </div>
  );
};

export default Veille;
