import { GetDoctorsDB } from "../services/client";

export const useDoctor = () => {
    const getDoctors = async () => {
        try {
            const data = await GetDoctorsDB();
            return { ok: true, doctors: data.doctors };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }
    return { getDoctors };
}
