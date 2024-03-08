// Internships.js

const Internships = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mon expérience de stage</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src="" alt="Stage" className="w-full h-auto rounded-md" />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <p className="text-lg mb-4">
            Insérez votre texte de résumé sur votre expérience de stage ici.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <p className="text-lg mb-4">
            Plus de détails sur ce que vous avez appris, les projets sur
            lesquels vous avez travaillé, les compétences acquises, etc...
          </p>
          {/* Vous pouvez ajouter plus de texte, de sections ou de composants ici */}
        </div>
      </div>
    </div>
  );
};

export default Internships;
