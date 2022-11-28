import { deletePatientDB, GetPatientDB, GetPatientsDB, UpdatePatientDB } from "../services/client";

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

    const updatePatient = async (dataPatient) => {
        try {
            const data = await UpdatePatientDB(dataPatient);
            console.log(data);
            return { ok: true, data: data.data };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }

    const deletePatient = async (id) => {
        try {
            const data = await deletePatientDB(id);
            console.log(data);
            return { ok: true, data: data };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }


    return { getPatients, getPatient, updatePatient, deletePatient };
};
