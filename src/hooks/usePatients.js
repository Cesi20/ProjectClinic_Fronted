import { GetPatientDB, GetPatientsDB } from "../services/client";

export const usePatients = () => {
    const getPatients = async () => {
        try {
            const data = await GetPatientsDB();
            return { ok: true, patients: data.patients };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }

    const getPatient = async (id) => {
        try {
            const data = await GetPatientDB(id);
            console.log(data.patient);
            return { ok: true, patient: data.patient };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }

    return { getPatients, getPatient };
};
