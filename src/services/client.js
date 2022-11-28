import { ClinicAPI } from "../api/ClinicAPI";

export const GetPatientsDB = async () => {
    const { data } = await ClinicAPI.get("/patient");
    return data;
  };
export const GetPatientDB = async (id) => {
    const { data } = await ClinicAPI.get(`/patient/${id}`);
    return data;
  }; 
  export const UpdatePatientDB = async (dataPatient) => {
    const { data } = await ClinicAPI.put(`/patient/${dataPatient.id}`, dataPatient);
    return data;
  };
  export const deletePatientDB = async (id) => {
    const { data } = await ClinicAPI.delete(`/patient/${id}`);
    console.log (data);
    return data;
  };