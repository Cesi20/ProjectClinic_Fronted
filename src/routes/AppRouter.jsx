// import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../views/auth/Login';
import Registro from '../views/auth/Registro';
import PrincipalDoc from '../views/auth/PrincipalDoc';
// import CrearCerti from '../views/auth/CrearCerti';
// import VerPaciente from '../views/auth/VerPaciente';
import PrincipalPaci from '../views/auth/PrincipalPaci';
// import VerCerti from '../views/auth/VerCerti';
// import VerDoc from '../views/auth/VerDoc';

import React from 'react';
export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to = '/login'/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principalDoc" element={<PrincipalDoc />} />
        {/* <Route path="/crearCerti" element={<CrearCerti />} /> */}
        {/* <Route path="/verPaciente" element={<VerPaciente />} /> */}
        <Route path="/principalPaci" element={<PrincipalPaci />} />
        {/* <Route path="/verCerti" element={<VerCerti />} /> */}
        {/* <Route path="/verDoc" element={<VerDoc />} /> */}

      </Routes>
    </BrowserRouter>
  );
};
