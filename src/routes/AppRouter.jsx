// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Login from '../views/auth/Login';
import Registro from '../views/auth/Registro';
import PrincipalDoc from '../views/home/PrincipalDoc';
import PrincipalPaci from '../views/home/PrincipalPaci';
import VerPaciente from '../views/home/VerPaciente';
import EditarPaciente from '../views/home/editarPaciente';
import VerDoc from '../views/home/VerDoc';
import Chat from '../views/home/Chat';

export const AppRouter = () => {
  const { revalidateToken } = useAuth();

  // useEffect(() => {
    // revalidateToken();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editarPaciente/:id" element={<EditarPaciente />} />
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principalDoc" element={<PrincipalDoc />} />
        {/* <Route path="/crearCerti" element={<CrearCerti />} /> */}
        <Route path="/verPaciente" element={<VerPaciente />} />
        <Route path="/principalPaci" element={<PrincipalPaci />} />
        {/* <Route path="/verCerti" element={<VerCerti />} /> */}
        <Route path="/verDoc" element={<VerDoc />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>
    </BrowserRouter>
  );
};
