import React from "react";
import { useParams } from "react-router-dom";
import { useCertificado } from "../../hooks/useCertificado";
import styles from "../../styles/AuthForm.module.css";

export default function CrearCerti() {
    const params = useParams();
    const {CreateExam} = useCertificado();
async function onSendEmail(e) {
    e.preventDefault();
    const {data, msg} = await CreateExam(params.id);
    console.log(data);
    console.log(msg);
};

    return (
        <div className={styles.auth}>
            <div></div>
            <div className={styles["auth-form"]}>
            <form className={styles.form} onSubmit={onSendEmail}>
                <h1>Crear Certificado</h1>
                <input type="date"/>
                <input type="text" placeholder="Metodo"/>
                <select>
                    <option value="">Resultado</option>
                    <option value="Positivo">Positivo</option>
                    <option value="Negativo">Negativo</option>
                </select>
                <input type="text" placeholder="Servicios"/>
                <input type="text" placeholder="Sample"/>
                <button type="submit"> Enviar Certificado</button>
                
            </form>
            </div>
        </div>
    )
}

