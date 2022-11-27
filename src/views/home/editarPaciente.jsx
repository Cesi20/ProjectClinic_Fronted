import React from "react";
import styles from "../../styles/AuthForm.module.css";

export default function EditarPaciente() {
    return (
        <div className={styles.auth}>
            <div></div>
            <div className={styles["auth-form"]}>
                <form className={styles.form}>
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="nombres completos" />
                    <select>
                        <option value="">Tipo de documento</option>
                        <option value="DNI">DNI</option>
                        <option value="Pasaporte">pasaporte</option>
                    </select>
                    <input type="text" placeholder="n° documento" />
                    <select>
                        <option value="">Genero</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    <input type="text" placeholder="edad" />
                    <input type="text" placeholder="telefono" />
                    <input type="date" />
                    <input type="text" placeholder="Celular" />
                    <input type="text" placeholder="Direccion" />

                    <button type="submit">Guardar</button>
                </form>

            </div>
        </div>
    );
}