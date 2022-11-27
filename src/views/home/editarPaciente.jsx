import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePatients } from "../../hooks/usePatients";
import styles from "../../styles/AuthForm.module.css";
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function EditarPaciente() {
    const params = useParams();
    const [dataPatient, setDataPatient] = useState();
    const { getPatient } = usePatients()

    useEffect(() => {
        onGetPatient(params.id);
    }, [])

    const onGetPatient = async (id) => {
        const { patient } = await getPatient(id);

        if (!patient) {
            return;
        }

        setDataPatient(patient);
    }

    // let fecha = new Date(dataPatient?.birthDate);
    // console.log(fecha.toLocaleTimeString());
    // console.log(fecha.toTimeString());
    // console.log(fecha.toUTCString());
    // let campofecha = fecha.toUTCString();

    // const formNow = format(parseISO(dataPatient?.birthDate), "'el' d 'de' MMMM yyyy", { locale: es });
    // console.log(`${formNow}`);

    return (
        <div className={styles.auth}>
            <div></div>
            <div className={styles["auth-form"]}>
                <form className={styles.form}>
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="nombres completos" defaultValue={dataPatient?.fullname} />
                    <select>
                        <option value="">Tipo de documento</option>
                        <option value="DNI" selected={dataPatient?.documentType === "DNI" ? true : false}>DNI</option>
                        <option value="Pasaporte" selected={dataPatient?.documentType === "Pasaporte" ? true : false}>pasaporte</option>
                    </select>
                    <input type="text" placeholder="n° documento" defaultValue={dataPatient?.documentNumber} />
                    <select>
                        <option value="">Genero</option>
                        <option value="Masculino" selected={dataPatient?.sex === "Masculino" ? true : false}>Masculino</option>
                        <option value="Femenino" selected={dataPatient?.sex === "Femenino" ? true : false}>Femenino</option>
                    </select>
                    <input type="text" placeholder="edad" defaultValue={dataPatient?.age} />
                    <input type="date" placeholder="date" defaultValue={dataPatient?.birthDate} />
                    <input type="text" placeholder="Celular" defaultValue={dataPatient?.phone} />
                    <input type="text" placeholder="Direccion" defaultValue={dataPatient?.location} />

                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    );
}