import { Model } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherPhone: string;
  fatherOccupation: string;
  motherName: string;
  motherPhone: string;
  motherOccupation: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  relation: string;
  phone: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  phone: string;
  emergencyPhone: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profilePicture?: string;
  status: 'active' | 'inactive' | 'banned';
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};


// For creating static method
export interface StudentModel extends Model<TStudent> {
  isUserExist: (id: string) => Promise<TStudent | null>
}



// For instance method
// export type StudentMethods = {
//   isUserExist: (id: string) => Promise<TStudent | null>
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;