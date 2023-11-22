import { Student } from './student.interface';
import { StudentModel } from './student.model';

const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.find({ id: studentId });
  return result;
};

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  getStudentsFromDB,
  getSingleStudentFromDB,
  createStudentIntoDB,
};
