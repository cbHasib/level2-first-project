import { TStudent } from './student.interface';
import { Student } from './student.model';

const getStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await Student.find({ id: studentId });
  return result;
};

const createStudentIntoDB = async (student: TStudent) => {
  
  if(await Student.isUserExist(student.id)){
    throw new Error('User already exist');
  } // static method
  
  const result = await Student.create(student); // build in static method
  
  // const studentInstance = new Student(student);

  // if(await studentInstance.isUserExist(student.id)){
  //   throw new Error('User already exist');
  // }

  // const result = await studentInstance.save(); // instance method
  return result;
};


const deleteStudentFromDB = async (studentId: string) => {
  const result = await Student.updateOne({ id: studentId }, { isDeleted: true });
  return result;
}


export const StudentServices = {
  getStudentsFromDB,
  getSingleStudentFromDB,
  createStudentIntoDB,
  deleteStudentFromDB,
};
