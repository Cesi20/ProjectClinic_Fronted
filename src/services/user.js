import { ClinicAPI } from "../api/ClinicAPI";

export const authLoginDB = async (dataLogin) => {
  const { data } = await ClinicAPI.post("/auth/login", dataLogin);
  return data;
};


