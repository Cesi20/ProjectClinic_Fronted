import React from "react";
import "../../styles/VerPaci.css";

export default function VerPaciente() {
    return (
        <center>
            <div className="container1">
                <div className="container">
                    <img
                        src="https://media.discordapp.net/attachments/879730536908734504/1044474116981403668/image-removebg-preview.png"
                        alt=""
                    />

                    <table classname="tabla">

                        {/* COLUMNAS DE LA TABLA */}
                        <thead>
                            <tr>
                                {/* Primera columna  */}<th>Correo</th>
                                {/* Segunda columna  */}<th>Contraseña</th>
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
                            <tr>
                                {/* FILA 01 CORREO*/} <td>ctitoh@gmail.com</td>
                                {/* FILA 01 CONTRASEÑA*/} <td>123456</td>
                                {/* FILA 01 NOMBRES COMPLETOS*/}<td> Cesia Alexandra Tito Huerta</td>
                                {/* FILA 01 TIPO DE DOCUMENTO*/}<td>DNI</td>
                                {/* FILA 01 NUMERO DE DOCUMENTO*/}<td> 12345678</td>
                                {/* FILA 01 GENERO*/}<td>Femenino</td>
                                {/* FILA 01 EDAD*/}<td> 18</td>
                                {/* FILA 01 FECHA DE NACIMIENTO*/}<td> 20/05/2004</td>
                                {/* FILA 01 TELEFONO*/}<td> 987654321</td>
                                {/* FILA 01 DIRECCION*/}<td> Av. Los Alamos 123</td>
                                {/* FILA 01 FUNCIONES*/}<td> <button>Editar</button> <button>Eliminar</button> <button>Certificado</button> <button>SMS</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
    );
}


