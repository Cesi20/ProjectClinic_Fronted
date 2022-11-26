import { ClinicAPI } from "../api/ClinicAPI";

export const GetPatientsDB = async () => {
    const { data } = await ClinicAPI.get("/patient");
    return data;
  };