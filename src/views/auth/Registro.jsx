import React, { useState } from "react";
import styles from "../../styles/AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const dataRegistroInicio = {
  email: "",
  password: "",
  fullname: "",
  documentType: "",
  documentNumber: "",
  sex: "",
  age: "",
  birthDate: "",
  phone: "",
  location: "",
};

export default function Registro() {
  const navigate = useNavigate();
  const [dataRegistro, setDataRegistro] = useState(dataRegistroInicio);
  const { registro} = useAuth();

  const onRegistro = async (e) => {
    e.preventDefault();
    for ( const data in dataRegistro) {
      if(dataRegistro[data].trim() === ""){

        alert("Todos los campos son obligatorios");
        return;
      }
    }


    const {msg, ok} = await registro(dataRegistro); 
    if(!ok){
      return alert(msg);
    }
    navigate("/login");
  }
  



  return (
    <div className={styles.auth}>
      <div></div>
      <div className={styles["auth-form"]}>
        <form className={styles.form} onSubmit={onRegistro}>
          <h1>Registro</h1>
          <input type="email" placeholder="Email" 
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, email: e.target.value })
          }
          />
          <input type="password" placeholder="Contraseña" 
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, password: e.target.value })
          }
          />
          <input type="text" placeholder="Nombre Completo" 
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, fullname: e.target.value })
          }
          />
          <select
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, documentType: e.target.value })
          }
          >
            <option value="">Tipo de documento</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="DNI">DNI</option>
          </select>
          <input type="text" placeholder="N° Documento"
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, documentNumber: e.target.value })
          }
          />
          <select
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, sex: e.target.value })
          }
          >
            <option value="">Genero</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          <input type="text" placeholder="Edad"
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, age: e.target.value })
          }
          />
          <input type="date" 
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, birthDate: e.target.value })
          }
          />
          <input type="text" placeholder="Celular"
          
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, phone: e.target.value })
          }
          />
          <input type="text" placeholder="Dirección" 
          onChange={(e) =>
            setDataRegistro({ ...dataRegistro, location: e.target.value })
          }
          />
          {/* <button>
            <Link to="/login">Registro</Link>
          </button> */}
          <button type="submit"> Registrar </button>
        </form>
      </div>
    </div>
  );
}
