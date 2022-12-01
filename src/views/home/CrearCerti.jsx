import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCertificado } from "../../hooks/useCertificado";
import styles from "../../styles/AuthForm.module.css";

const dataExamPrint = {
    date: "",
    method: "",
    result: "",
    service: "",
    sample: "",
};

export default function CrearCerti() {
    const [dataExam, setDataExam] = useState(dataExamPrint);
    const params = useParams();
    const navigate = useNavigate();
    const { CreateExam } = useCertificado();
    async function onSendEmail(e) {
        e.preventDefault();
        const { data, msg } = await CreateExam(params.id, dataExam);
        console.log(data);
        console.log(msg);

        if (dataExam) {
            return navigate("/verPaciente");
        }
    };
   

    console.log(dataExam);
    return (
        <div className={styles.auth}>
            <div></div>
            <div className={styles["auth-form"]}>
                <form className={styles.form} onSubmit={onSendEmail}>
                    <h1>Crear Certificado</h1>
                    <input type="date" onChange={(e) => setDataExam({ ...dataExam, date: e.target.value })} />
                    <input type="text" placeholder="Metodo" onChange={(e) => setDataExam({ ...dataExam, method: e.target.value })} />
                    <select onChange={(e) => setDataExam({ ...dataExam, result: e.target.value })}>
                        <option value="">Resultado</option>
                        <option value="Positivo">Positivo</option>
                        <option value="Negativo">Negativo</option>
                    </select>
                    <input type="text" placeholder="Servicios" onChange={(e) => setDataExam({ ...dataExam, service: e.target.value })} />
                    <input type="text" placeholder="Sample" onChange={(e) => setDataExam({ ...dataExam, sample: e.target.value })} />
                    <button type="submit"> Enviar Certificado</button>

                </form>
            </div>
        </div>
    )
}

