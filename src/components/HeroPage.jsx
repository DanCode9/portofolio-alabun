import React from "react";
import Typed from "react-typed";
import Avatar from "../images/ava.png";
import Avatar2 from "../images/ava2.png";

const HeroPage = () => {
  return (
    <div id="about" className="md:h-[100vh] text-slate-200 p-5 sm:p-[10%]">
      <div className="gap-5 flex flex-col sm:flex-row">
        <div className="p-3 flex flex-col gap-5 ">
          <img
            className=" md:hidden w-full h-auto rounded-full mt-5"
            src={Avatar2}
            alt="Avatar"
          />
          <p className="text-emerald-300 text-5xl md:text-2xl text-center md:text-left">
            Bonjour et bienvenue sur mon portfolio{" "}
          </p>
          <p className="md:text-5xl text-3xl text-center md:text-left text-neutral-300">
            Je suis un étudiant passionné par le développement web et de
            logiciels en permanence désireux d'en savoir plus sur la
            programmation.
          </p>
          <p className="text-3xl text-center md:text-left">
            Connaissance des technologies telles que: <span> </span>{" "}
            <Typed
              className="text-emerald-300 font-bold"
              loop
              typeSpeed={10}
              backSpeed={140}
              strings={[
                "PHP",
                "JavaScript",
                "C#",
                "ReactJS",
                "HTML",
                "CSS",
                "SQL",
                "Java",
                "TailWind",
              ]}
            />
          </p>
          <a
            href="/assets/CV.pdf"
            download="CV.pdf"
            className="border-2 border-emerald-600 p-3 w-fit rounded-2xl hover:border-emerald-500 hover:bg-emerald-900"
          >
            Télécharger mon CV
          </a>
        </div>
        <img
          className="w-full hidden md:block sm:w-[300px] h-auto rounded-xl mt-5 sm:mt-0"
          src={Avatar}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default HeroPage;
