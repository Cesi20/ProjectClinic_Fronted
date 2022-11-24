import "../../styles/estiloDoc.css";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { dataUser } from "../../store/storeUser";

export default function PrincipalDoc() {
  const [user, ] = useAtom(dataUser);
  return (
    <div className="portada">
      <div className="fondo_blanco">
        <img
          src="https://media.discordapp.net/attachments/879730536908734504/1044474116981403668/image-removebg-preview.png"
          alt=""
        />

        <h1>BIENVENIDA DOCTORA</h1>
        <h1> 
        {user?.email}
           </h1>
           <br></br>
        
          <Link to="/verPaciente">
            <button>Ver Pacientes</button>
          </Link>
        
        <div className="space"></div>
      </div>
    </div>
  );
}
