import "../../styles/principalpaci.css";
import { Link } from "react-router-dom";

export default function PrincipalPaci() {
  return (
    <div className="portadapa">
      <div className="fondo_blanco">
        <center>
          <h1> BIENVENIDO A </h1>
        </center>
        <img
          src="https://media.discordapp.net/attachments/879730536908734504/1044474116981403668/image-removebg-preview.png"
          alt=""
        />
        <center>
          <Link to="/verDoc">
            <button>Ver Doctores</button>
          </Link>
          <div className="space"></div>
          
          {/*
            <Link to="/chat">
            <button>Chat</button>
            </Link>
*/}
        </center>
      </div>
    </div>
  );
}
