import { ClinicAPI } from "../api/ClinicAPI";

export const CreateExamDB = async (id, dataExam) => {
  console.log(`Bearer ${localStorage.getItem("token")}`)
  const { data } = await ClinicAPI.post(`/exam/registerExam/${id}`, dataExam, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
  );
  return data;
}; 