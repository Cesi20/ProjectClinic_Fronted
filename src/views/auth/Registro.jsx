import React from "react";
import styles from "../../styles/AuthForm.module.css";
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <div className={styles.auth}>
      <div></div>
      <div className={styles["auth-form"]}>
        <form className={styles.form}>
          <h1>Registro</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="text" placeholder="Nombre Completo" />
          <select>
            <option value="">Tipo de documento</option>
            <option value="">Pasaporte</option>
            <option value="">DNI</option>
          </select>
          <input type="text" placeholder="N° Documento" />
          <select>
            <option value="">Genero</option>
            <option value="">Masculino</option>
            <option value="">Femenino</option>
          </select>
          <input type="text" placeholder="Edad" />
          <input type="date" />
          <input type="text" placeholder="Celular" />
          <input type="text" placeholder="Dirección" />
          {/* <button>
            <Link to="/login">Registro</Link>
          </button> */}
          <button type="submit"> Registrar </button>
        </form>
      </div>
    </div>
  );
}
