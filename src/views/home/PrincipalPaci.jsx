import  "../../styles/principalpaci.css";
import { Link } from "react-router-dom"

export default function PrincipalPaci() {

    return (
        <div className="portadapa">
            <center>
            <h1> BIENVENIDO A </h1>
            </center>
            <img src="https://media.discordapp.net/attachments/879730536908734504/1044474116981403668/image-removebg-preview.png" alt=""/>
            <center>
            <button>
                 <Link to="/verDoc">Ver Doctores</Link>
             </button>
             <div className="space"></div>
             <button>
                 <Link to="/verCerti">Ver certificado Medico</Link>
             </button>
             </center>
        </div>
    );
    }