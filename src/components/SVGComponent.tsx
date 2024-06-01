import fileSvg from "../assets/front_muscles.svg";

function SVGComponent() {
  return (
    <div className="flex justify-center">
      <img src={fileSvg} alt="SVG File" className="h-96 place-content-center" />
    </div>
  );
}

export default SVGComponent;
