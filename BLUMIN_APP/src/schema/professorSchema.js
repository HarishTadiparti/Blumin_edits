import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const professorSchema = yup.object().shape({
    email: yup.string().email("Must be a valid email").required("Required"),
    firstName: yup.string().min(3, "First Name must be at least 3 characters").required("Required"),
    lastName: yup.string().min(3, "Last Name must be at least 3 characters").required("Required"),
    university: yup.string().required("Required"),
    phone: yup.number().positive().integer().required("Required"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters")
        .matches(passwordRules, { message: "Please create a strong password" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required")
})