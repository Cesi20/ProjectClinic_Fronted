import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePatients } from "../../hooks/usePatients";
import "../../styles/VerPaci.css";

export default function VerPaciente() {

    const [dataPatients, setDataPatients] = useState([]);
    const { getPatients, deletePatient } = usePatients()

    const navigate = useNavigate();
    useEffect(() => {
        onGetPatients();
    }, [])

    const onGetPatients = async () => {
        const { patients } = await getPatients();
        if (patients) {
            setDataPatients(patients);
        }
    };

    const deletePa = async (id) => {
        const { ok } = await deletePatient(id);
        console.log(ok);
        window.location.reload();

    };

    console.log(dataPatients);
    if (!dataPatients) return null;

    return (
        <center>
            <div className="container1">
                <div className="container">
                    <img
                        src="https://media.discordapp.net/attachments/879730536908734504/1044474116981403668/image-removebg-preview.png"
                        alt=""
                    />
                    <table className="tabla">

                        {/* COLUMNAS DE LA TABLA */}
                        <thead>
                            <tr>
                                {/* Primera columna  */}<th>Correo</th>
                                {/* Tercera columna  */}<th>Nombres Completos</th>
                                {/* Cuarta columna  */}<th>Tipo de documento</th>
                                {/* Quinta columna  */}<th>Numero de documento</th>
                                {/* Sexta columna  */}<th>Genero</th>
                                {/* Septima columna  */}<th>Edad</th>
                                {/* Octava columna  */}<th>Fecha de Nacimiento</th>
                                {/* Novena columna  */}<th>Telefono</th>
                                {/* Decima columna  */}<th>Direccion</th>
                                {/* Onceava columna  */}<th>Funciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPatients.map((patient) => (
                                <tr key={patient.id}>
                                    {/* FILA 01 CORREO*/}<td> {patient.user.email}</td>
                                    {/* FILA 01 NOMBRES COMPLETOS*/}<td> {patient.fullname}</td>
                                    {/* FILA 01 TIPO DE DOCUMENTO*/}<td>{patient.documentType}</td>
                                    {/* FILA 01 NUMERO DE DOCUMENTO*/}<td>{patient.documentNumber}</td>
                                    {/* FILA 01 GENERO*/}<td>{patient.sex}</td>
                                    {/* FILA 01 EDAD*/}<td> {patient.age}</td>
                                    {/* FILA 01 FECHA DE NACIMIENTO*/}<td>{patient.birthDate}</td>
                                    {/* FILA 01 TELEFONO*/}<td> {patient.phone}</td>
                                    {/* FILA 01 DIRECCION*/}<td> {patient.location}</td>
                                    {/* FILA 01 FUNCIONES*/}<td> <button onClick={() => { navigate(`/editarPaciente/${patient._id}`) }}

                                    > editar </button> <button onClick={() => deletePa(patient._id)}>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
    );
}


