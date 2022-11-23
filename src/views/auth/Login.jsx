import React, { useState } from "react"
import styles from "../../styles/auth.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useAtom } from 'jotai';
import { dataUser } from "../../store/storeUser";

export default function Login() {
  const [user, setUser] = useAtom(dataUser);
  const navigate = useNavigate()
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  })

  const onLogin = async (e) => {
    e.preventDefault()
    const data = await axios.post("http://localhost:3001/api/auth/login", dataLogin)

    if (data.data.user.role === "Doctor") {
      setUser(data.data.user) // set user
      localStorage.setItem("token", data.data.token)
      navigate("/principalDoc")
    } else {
      navigate("/principalPaci")
    }
  }

  return (
    <div className={styles.auth}>
      <div></div>
      <div className={styles["auth-form"]}>
        <form className={styles.form} onSubmit={onLogin}>
          <h1>Login</h1>
          <input type="text" placeholder="Usuario" onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })} />
          <input type="password" placeholder="Contraseña" onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })} />

          {/* <Link to="/principalDoc">
            
          </Link> */}
          <button type="submit"> ingresar </button>

          <button>
            {/* <Link to="/registro">Registrese</Link> */}
          </button>
          <center>

            <Link to="/ForgetPassword">
              <p>¿Olvidaste tu contraseña?</p>
            </Link>

          </center>
        </form>
      </div>
    </div>
  )
}