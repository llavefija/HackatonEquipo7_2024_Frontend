import crowdmap from "../assets/images/Crowdmap_Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar bg-accent">
      <button onClick={handleClick}>
        <img src={crowdmap} className="w-[60px]" alt="Barcelona" />
        <h1 className="text-xl text-white">
          <strong>CrowdMap</strong>
        </h1>
      </button>
    </div>
  );
};

export default Navbar;
