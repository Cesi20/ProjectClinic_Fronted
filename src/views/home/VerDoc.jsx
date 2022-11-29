import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../../hooks/useDoctor";
import "../../styles/VerPaci.css";

export default function VerPaciente() {

    const [dataDoctors, setDataDoctors] = useState([]);
    const { getDoctors } = useDoctor()

    const navigate = useNavigate();
    useEffect(() => {
        onGetDoctors();
    }, [])

    const onGetDoctors = async () => {
        const { doctors } = await getDoctors();
        if (doctors) {
            setDataDoctors(doctors);
        }
    };
    console.log(dataDoctors);
    return (
        <center>
            <div className="container1">
                <div className="container">
                    <img
                        src="https://media.discordapp.net/attachments/879730536908734504/1044474116981403668/image-removebg-preview.png"
                        alt=""
                    />
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Nombre completos </th>
                                <th>Celular</th>
                                <th>Especialidad</th>
                                <th>CMP</th>
                                <th>RNE</th>
                                </tr>
                                
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dr. Lady Gabriela Hernandez Huerta</td>
                                <td>987654321</td>
                                <td>Cardiologia</td>
                                <td>123456</td>
                                <td>123456</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
    );
}
