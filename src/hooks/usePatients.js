import { GetPatientsDB } from "../services/client";

export const usePatients = () => {
    const getPatients = async () => {
        try {
            const data = await GetPatientsDB();
            return { ok: true, patients: data.patients };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }
    return { getPatients }
};
