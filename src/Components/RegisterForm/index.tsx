import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useForm } from "react-hook-form";
import type { RegisterFormTypes } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./schema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormTypes>({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const formSubmit = (data: RegisterFormTypes) => {
    console.log("Register data: ", data);
  };

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={`mt-6 px-6 ${theme === "Dark" ? "bg-zinc-900 text-zinc-100" : "bg-white text-zinc-800"}`}
    >
      <h2
        className={`mb-6 text-2xl font-bold ${theme === "Dark" ? "text-zinc-100" : "text-zinc-800"}`}
      >
        Registration
      </h2>

      <label className="mb-6 flex cursor-pointer flex-col gap-2">
        <span className="text-md text-start text-zinc-600">First name</span>
        <input
          type="text"
          className={`w-[500px] rounded-lg border border-black p-2 ${
            theme === "Dark"
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
              : "border-zinc-300 bg-white text-zinc-700"
          }`}
          placeholder="Enter your first name"
          {...register("firstName")}
        />
        <span className="text-start text-sm text-red-500">
          {errors.firstName?.message}
        </span>
      </label>

      <label className="mb-6 flex cursor-pointer flex-col gap-2">
        <span className="text-md text-start text-zinc-600">E-mail</span>
        <input
          type="email"
          className={`w-[500px] rounded-lg border border-black p-2 ${
            theme === "Dark"
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
              : "border-zinc-300 bg-white text-zinc-700"
          }`}
          placeholder="Enter your email"
          {...register("email")}
        />
        <span className="text-start text-sm text-red-500">
          {errors.email?.message}
        </span>
      </label>

      <label className="mb-6 flex cursor-pointer flex-col gap-2">
        <span className="text-md text-start text-zinc-600">Phone number</span>
        <input
          type="tel"
          className={`w-[500px] rounded-lg border border-black p-2 ${
            theme === "Dark"
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
              : "border-zinc-300 bg-white text-zinc-700"
          }`}
          placeholder="Enter your number"
          {...register("phone")}
        />
        <span className="text-start text-sm text-red-500">
          {errors.phone?.message}
        </span>
      </label>

      <label className="mb-6 flex cursor-pointer flex-col gap-2">
        <span className="text-md text-start text-zinc-600">Password</span>
        <input
          type="password"
          className={`w-[500px] rounded-lg border border-black p-2 ${
            theme === "Dark"
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
              : "border-zinc-300 bg-white text-zinc-700"
          }`}
          placeholder="Enter your password"
          {...register("password")}
        />
        <span className="text-start text-sm text-red-500">
          {errors.password?.message}
        </span>
      </label>

      <label className="mb-6 flex cursor-pointer flex-col gap-2">
        <span className="text-md text-start text-zinc-600">
          Confirm password
        </span>
        <input
          type="password"
          className={`w-[500px] rounded-lg border border-black p-2 ${
            theme === "Dark"
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
              : "border-zinc-300 bg-white text-zinc-700"
          }`}
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />
        <span className="text-start text-sm text-red-500">
          {errors.confirmPassword?.message}
        </span>
      </label>

      <label className="flex items-center justify-start">
        <input
          type="checkbox"
          className={`rounded-lg border border-black p-2 ${
            theme === "Dark"
              ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
              : "border-zinc-300 bg-white text-zinc-700"
          }`}
          {...register("terms")}
        />

        <span className="ml-2 text-sm text-zinc-600 italic">
          I'm agree terms and conditions
        </span>

        <span className="ml-6 text-start text-sm text-red-500">
          {errors.terms?.message}
        </span>
      </label>

      <button
        type="submit"
        className={`my-6 flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 transition ${theme === "Dark" ? "bg-indigo-500 text-white hover:bg-indigo-400" : "bg-zinc-800 text-white"}`}
      >
        Register me
      </button>
    </form>
  );
};
