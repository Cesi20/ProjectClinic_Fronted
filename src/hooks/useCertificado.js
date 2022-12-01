import { CreateExamDB } from "../services/certificado";

export const useCertificado = () => {
    const CreateExam = async (id, dataExam) => {
        try {
            const data = await CreateExamDB(id, dataExam);
            const token = localStorage.getItem("token");
            return { ok: true, Exam: data.data, msg: data.msg };
        } catch (error) {
            return { ok: false, msg: error.response.data.msg };
        }

    }
    return { CreateExam };
}