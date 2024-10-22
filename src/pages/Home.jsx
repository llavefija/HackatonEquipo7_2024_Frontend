import image1 from "../assets/images/1.jpg";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full h-[33vh] overflow-hidden">
        <img
          className="w-full h-full object-cover object-[50%_40%]"
          alt="Barcelona desde arriba"
          src={image1}
        />
      </div>
      <div className="h-2/3">
        <h1 className="text-3xl text-center font-semibold m-10 text-gray-800">
          Bienvenido a CrowdMap
        </h1>
        <div className="w-2/3 text-center mx-auto text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            tenetur, magnam assumenda, et laboriosam adipisci iusto omnis ipsum,
            repellendus facilis nisi quam atque odit at voluptatibus itaque
            dolorum. Enim, eum.
          </p>
          <Button content={"Comienza tu viaje"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
