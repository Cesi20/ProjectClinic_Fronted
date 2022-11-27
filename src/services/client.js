import { ClinicAPI } from "../api/ClinicAPI";

export const GetPatientsDB = async () => {
    const { data } = await ClinicAPI.get("/patient");
    return data;
  };
export const GetPatientDB = async (id) => {
    const { data } = await ClinicAPI.get(`/patient/${id}`);
    return data;
  }; 