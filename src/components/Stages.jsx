import CartApp from "../images/cart.png";
import Est from "../img-stages/est.jpg";
import Tele from "../img-stages/teletravail.png";
import PdfViewer from "./PdfViewer";

const Stages = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-emerald-400">
        Mes expériences de stages
      </h1>
      <div className="mes-stages flex flex-col gap-10">
        {/* STAGE 1 */}
        <div className="flex flex-col md:flex-row stage-1 border-2 ">
          <img
            src={Est}
            alt="Stage"
            className="w-[40%] h-auto rounded-md object-cover"
          />
          <div className="md:w-1/2 md:pl-4 info-stage-1  ">
            <p className="text-2xl mb-4 text-slate-200 ">
              Stage effectué chez: <span></span>
              <a
                href="https://www.est-ensemble.fr/"
                target="blank_"
                className="hover:underline hover:text-red-300"
              >
                Est Ensemble
              </a>
              <br /> Dates: 15/05/2023 - 15/06/2023
            </p>
            <p className="text-xl mb-4 text-slate-200 flex flex-col gap-3 ">
              <p>Poste de stage: Technicien DSI </p>
              <ol className="">
                <p className="underline text-2xl">Tâches</p>
                <li>1. Installation postes chez les partenires</li>
                <li>2. Masterisation PC</li>
                <li>
                  3. Traitement Ticket d'incident via le logiciel de
                  l'entreprise
                </li>
              </ol>
              <p className="underline text-2xl">Compétences acquises: </p>
              <ol>
                <li>1. Amélioration de la communication avec les clients</li>
                <li>
                  2. Apprendre comment utiliser un logicle de gestion
                  d'incidents
                </li>
                <li>
                  3. Savoir faire une masterisation d'une poste aupre une image
                  WIN10 qui se trouve sur le serveur de l'entreprise
                </li>
              </ol>
              <a
                href="/stage1"
                className="border-2 border-emerald-600 p-3 w-fit rounded-2xl hover:border-emerald-500 hover:bg-emerald-900"
              >
                PHOTOS
              </a>
            </p>
          </div>
        </div>
        {/* STAGE 2 */}
        <div className="flex flex-col md:flex-row stage-1  border-2">
          <img
            src={Tele}
            alt="Stage"
            className="w-[40%] h-auto rounded-md object-cover	"
          />
          <div className="md:w-1/2 md:pl-4 info-stage-1 ">
            <p className="text-2xl mb-4 text-slate-200 ">
              Stage effectué en télétravail dans le cadre du lycée <br /> Dates:
              22/02/2024 - 16/03/2024
            </p>
            <p className="text-xl mb-4 text-slate-200 flex flex-col gap-3 ">
              <p>Poste de stage: Chef de projet </p>
              <ol className="">
                <p className="underline text-2xl">Tâches</p>
                <li>1. Diriger l'équipe et repartir les taches </li>
                <li>2. Realisation d'une interface de l'application</li>
                <li>3. Développer la logique de l'application</li>
              </ol>
              <p className="underline text-2xl">Compétences acquises: </p>
              <ol>
                <li>1. Compétences en gestion d'équipe</li>
                <li>2. Savoir repartir des tâches et optimiser le temps</li>
                <li>3. Amélioration en compétences informatiques</li>
              </ol>
              <a
                href="/stage2"
                className="border-2 border-emerald-600 p-3 w-fit rounded-2xl hover:border-emerald-500 hover:bg-emerald-900"
              >
                PHOTOS
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen mt-[40px]">
        <PdfViewer />
      </div>
    </div>
  );
};

export default Stages;
