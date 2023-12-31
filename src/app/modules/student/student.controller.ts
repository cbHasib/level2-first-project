import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.zod.validation';

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const createStudent = async (req: Request, res: Response) => {
  try {    

    // validate using zod
    const zodPerseData = studentValidationSchema.parse(req.body.student);

    // const { student: studentData } = req.body;
    
    const result = await StudentServices.createStudentIntoDB(zodPerseData);

    res.status(400).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};


const deleteStudent = async (req: Request, res: Response) => {
  try {    

    const { studentId } = req.params;
    
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(400).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const StudentController = {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
};
