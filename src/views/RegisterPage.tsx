import { Link } from "react-router";
import { RegisterForm } from "../Components/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <Link to="/" className="mb-6 inline-block text-blue-600 underline">
        ← Back
      </Link>
      <RegisterForm />
    </>
  );
};
