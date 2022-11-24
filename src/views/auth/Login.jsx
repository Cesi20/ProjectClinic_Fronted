import React, { useState } from "react";

import styles from "../../styles/AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const dataLoginInitial = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState(dataLoginInitial);
  const { login } = useAuth();

  const onLogin = async (e) => {
    e.preventDefault();
    const { user } = await login(dataLogin);

    if (!user) return;

    if (user && user.role === "Doctor") {
      navigate("/principalDoc");
    } else {
      navigate("/principalPaci");
    }
  };

  return (
    <div className={styles.auth}>
      <div></div>
      <div className={styles["auth-form"]}>
        <form className={styles.form} onSubmit={onLogin}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Usuario"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, password: e.target.value })
            }
          />

          {/* <Link to="/principalDoc">
          </Link> */}
          <button type="submit"> Ingresar </button>

          <Link to="/registro">
            <button>Registrarse</button>
            </Link>
          <center>
            <Link to="/ForgetPassword">
              <p>¿Olvidaste tu contraseña?</p>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}
