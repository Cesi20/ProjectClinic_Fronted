import { ClinicAPI } from "../api/ClinicAPI";

export const authLoginDB = async (dataLogin) => {
  const { data } = await ClinicAPI.post("/auth/login", dataLogin);
  return data;
};

export const authRegistroDB = async (dataRegistro) => {
  const { data } = await ClinicAPI.post("/auth/registerPatient", dataRegistro);
  return data;
};

export const authRevalidateTokenDB = async (token) => { 
  const { data } = await ClinicAPI.get("/auth/revalidate", {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return data;
}

