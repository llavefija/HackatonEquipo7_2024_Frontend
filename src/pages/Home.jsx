import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/1.jpg";
import { Button } from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("map");
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-100">
      <div className="w-full h-[33vh] overflow-hidden">
        <img
          className="w-full h-full object-cover object-[50%_40%]"
          alt="Barcelona desde arriba"
          src={image1}
        />
      </div>
      <div className="h-2/3 bg-slate-100">
        <h1 className="text-3xl text-center font-semibold m-10 text-gray-800">
          Bienvenido a CrowdMap
        </h1>
        <div className="w-2/3 text-center mx-auto text-gray-600">
          <p>
            ¡Imagina un viaje donde cada destino es tuyo! Con CrowdMap, olvídate
            de las multitudes y descubre una manera más tranquila de explorar
            Barcelona. Nuestra aplicación te ayuda a planificar tus aventuras
            evitando los grandes conglomerciones de gente, permitiéndote
            disfrutar de los lugares con más espacio, más calma y más
            autenticidad. Encuentra rutas tranquilas, sitios escondidos y
            experiencias que te conectan con la esencia de cada lugar, sin
            agobios ni colas interminables.
          </p>
          <p>Viaja a tu ritmo, descubre más y hazlo sin prisas.</p>
          <Button
            content={"Comienza tu viaje"}
            handleClick={handleButtonClick}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
