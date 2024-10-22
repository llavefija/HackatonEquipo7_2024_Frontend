import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const CurrentPlace = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/map");
  };
  return (
    <div className="flex flex-col xl:flex-row bg-slate-100 shadow-xl h-full ">
      <div className="flex h-full mt-10 w-full xl:w-1/2  justify-center items-center ">
        <img
          className="w-4/5 rounded-3xl"
          src="https://cdn-imgix.headout.com/microbrands-content-image/image/0cfef2762d8811e1937510140ed70027-Sagrada%20Familia.jpg"
          alt="Album"
        />
      </div>
      {/* Ajustamos el contenedor de la derecha */}
      <div className="flex flex-col justify-center items-center text-center w-full xl:w-1/2 h-full">
        <h2 className="text-3xl text-gray-800 font-bold m-10">Lorem Ipsum</h2>
        <p className="text-gray-600 w-2/3 mx-auto">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original.
        </p>
        <h3 className="text-gray-800 font-bold text-2xl my-10">Schedules</h3>
        <div className="flex flex-wrap justify-evenly gap-4 w-2/3 mx-auto ">
          <span className="badge badge-success w-32">Badge</span>
          <span className="badge badge-success w-32">Badge</span>
          <span className="badge badge-success w-32">Badge</span>
          <span className="badge badge-success w-32">Badge</span>
          <span className="badge badge-success w-32">Badge</span>
          <span className="badge badge-success w-32">Badge</span>
        </div>
        <div className="m-10">
          <Button
            content={"Volver al mapa"}
            handleClick={handleButtonClick}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlace;
