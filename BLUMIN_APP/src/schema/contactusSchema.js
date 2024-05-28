import * as yup from "yup";

export const contactusSchema = yup.object().shape({
    email: yup.string().email().required("Required"),
    name: yup.string().min(3, "Name must be at least 3 characters").required("Required"),
    phone: yup.number().positive().integer().required("Required"),
    organization: yup.string().required("Required"),
    message: yup.string().min(3, "Message must be at least 3 characters").max(250, "Message must be at most 5 characters").required("Required")
})