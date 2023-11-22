import Joi from "joi";

const userNameValidationSchema = Joi.object({
    firstName: Joi.string().trim().required().max(20).regex(/^[A-Z][a-z]*$/),
    middleName: Joi.string().trim(),
    lastName: Joi.string().trim().required().max(20).regex(/^[A-Z][a-z]*$/),
  });
  
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().trim().required(),
    fatherPhone: Joi.string().trim().required(),
    fatherOccupation: Joi.string().trim().required(),
    motherName: Joi.string().trim().required(),
    motherPhone: Joi.string().trim().required(),
    motherOccupation: Joi.string().trim().required(),
  });
  
  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().trim().required(),
    relation: Joi.string().trim().required(),
    phone: Joi.string().required(),
    address: Joi.string().trim().required(),
  });
  
  const studentValidationSchema = Joi.object({
    id: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().trim().email().required(),
    phone: Joi.string().trim().required(),
    emergencyPhone: Joi.string().trim().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'),
    presentAddress: Joi.string().trim().required(),
    permanentAddress: Joi.string().trim().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profilePicture: Joi.string(),
    status: Joi.string().valid('active', 'inactive', 'banned').default('active'),
    isDeleted: Joi.boolean().default(false),
  });

  export default studentValidationSchema;