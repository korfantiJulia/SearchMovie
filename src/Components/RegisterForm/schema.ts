import * as yup from "yup";
import type { RegisterFormTypes } from "./types";

export const registerFormSchema: yup.ObjectSchema<RegisterFormTypes> =
  yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Minimum two characters"),

    email: yup
      .string()
      .required("E-mail is required")
      .email("Invalid e-mail format"),

    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^\+?[0-9]{12}$/,
        "Phone number must start with + and contain 12 digits",
      ),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "Minimum 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number"),

    confirmPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "Password should match"),

    terms: yup
      .boolean()
      .oneOf([true], "You must accept our terms")
      .required("You must accept our terms"),
  });
