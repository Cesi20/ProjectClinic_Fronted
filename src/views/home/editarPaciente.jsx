import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePatients } from "../../hooks/usePatients";
import styles from "../../styles/AuthForm.module.css";
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function EditarPaciente() {
    const params = useParams();
    const navigate = useNavigate();
    const [dataPatient, setDataPatient] = useState();
    const [infoPatient, setInfoPatient] = useState({
        age: "",
        id: "",
        phone: "",
        location: ""
    });
    const { getPatient, updatePatient } = usePatients()

    useEffect(() => {
        onGetPatient(params.id);
    }, [])

    const onGetPatient = async (id) => {
        const { patient } = await getPatient(id);
        console.log(patient);
        if (!patient) {
            return;
        }

        setDataPatient(patient);
        setInfoPatient({
            age: patient.age,
            id: patient._id,
            phone: patient.phone,
            location: patient.location
        })
    }

    const onUpdate = async (e) => {
        e.preventDefault();
        const { data, ok } = await updatePatient(infoPatient);

        if (!data) {
            return;
        }
        if (ok) {
            return navigate("/verPaciente");
        }

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
                <form className={styles.form} onSubmit={onUpdate}>
                    <input type="email" placeholder="email" defaultValue={dataPatient?.user.email} disabled />
                    <input type="text" placeholder="nombres completos" defaultValue={dataPatient?.fullname} disabled />
                    <select disabled>
                        <option value="">Tipo de documento</option>
                        <option value="DNI" selected={dataPatient?.documentType === "DNI" ? true : false}>DNI</option>
                        <option value="Pasaporte" selected={dataPatient?.documentType === "Pasaporte" ? true : false}>pasaporte</option>
                    </select>
                    <input type="text" placeholder="n° documento" defaultValue={dataPatient?.documentNumber} disabled />
                    <select disabled>
                        <option value="">Genero</option>
                        <option value="Masculino" selected={dataPatient?.sex === "Masculino" ? true : false}>Masculino</option>
                        <option value="Femenino" selected={dataPatient?.sex === "Femenino" ? true : false}>Femenino</option>
                    </select>
                    <input type="text" placeholder="edad" defaultValue={infoPatient?.age} onChange={(e) => setInfoPatient({
                        ...infoPatient,
                        age: e.target.value
                    })} />
                    {/* <input type="date" placeholder="date" defaultValue={dataPatient?.birthDate} /> */}
                    <input type="text" placeholder="Celular" defaultValue={infoPatient?.phone} onChange={(e) => setInfoPatient({
                        ...infoPatient,
                        phone: e.target.value
                    })} />
                    <input type="text" placeholder="Direccion" defaultValue={infoPatient?.location} onChange={(e) => setInfoPatient({
                        ...infoPatient,
                        location: e.target.value
                    })} />

                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    );
}