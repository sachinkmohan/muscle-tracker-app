import React, { useState } from "react";
import { ReactComponent as FileSvg } from "../assets/front_muscles.svg";

const MuscleDiagram = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);

  const handleMuscleClick = (muscleName: string) => {
    setSelectedMuscle(muscleName);
    console.log(`${muscleName} clicked!`);
  };
};
function SVGComponent() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={FileSvg}
          alt="SVG File"
          className="h-96 place-content-center"
        />
      </div>
      <FileSvg
        onClick={(e: any) => {
          if (e.target.id === "abs") {
            handleMuscleClick("Abs");
          } else if (e.target.id === "chest") {
            handleMuscleClick("Chest");
          }
        }}
      />
      {selectedMuscle && <p>{selectedMuscle} selected</p>}
    </div>
  );
}

export default SVGComponent;
