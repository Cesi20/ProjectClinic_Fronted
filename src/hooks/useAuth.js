import { useAtom } from "jotai";
import { authLoginDB, authRegistroDB, authRevalidateTokenDB } from "../services/user";
import { dataUser } from "../store/storeUser";

export const useAuth = () => {

  const [user, setUser] = useAtom(dataUser);

  const login = async (dataLogin) => {
    try {
      const data = await authLoginDB(dataLogin);
      localStorage.setItem("token", data?.token ? data?.token : "");
      setUser(data.user);
      return { ok: true, user: data.user, token: data.token };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const registro = async (dataRegistro) => {
    try {
      const data = await authRegistroDB(dataRegistro);

     console.log(data);
      return { ok: true, msg: data.msg };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };


  const revalidateToken = async () => {
    try {
      const token = localStorage.getItem("token") || "";
      const data = await authRevalidateTokenDB(token);
      setUser(data?.user || null);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };


  return { user, registro, login, revalidateToken };
};
