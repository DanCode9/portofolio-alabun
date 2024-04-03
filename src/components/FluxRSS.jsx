import React from "react";

const FluxRSS = ({ news }) => {
  return (
    <div className="max-h-96 overflow-y-auto bg-neutral-800 p-5 ">
      <div className="space-y-6">
        {news.map((item, index) => (
          <div key={index} className="flex items-start ">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-24 rounded-md mr-4 image-cover"
            />
            <div>
              <h3 className="text-lg text-slate-100 font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.paragraph}</p>
              <a
                href={item.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Lire plus
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FluxRSS;
