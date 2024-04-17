import React from "react";
import img from "../files/TableauSynthese.pdf";

const PdfViewer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <iframe
        src={img}
        className="w-full h-full border-none" // Adjust iframe styles here
      />
    </div>
  );
};

export default PdfViewer;
