import { removeModalInstantly } from "../../store/slices/modalReducer";
import useAccountCookies from "../../hooks/useAccountCookies";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { t } from "i18next";

interface IFormInput {
  name: string;
  email: string;
  password: number;
}

function Login() {
  const { loginWithCookies } = useAccountCookies();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginWithCookies(data);
    dispatch(removeModalInstantly());
  };
  const { register, handleSubmit } = useForm<IFormInput>();
  const [passwordType, setPasswordType] = useState("password")

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-4 z-60 flex flex-col w-[400px] h-[400px] bg-white dark:bg-black rounded-3xl"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4 items-center"
        >
          <span className="font-bold text-[36px] dark:text-white">{t("login")}</span>
          <input
            {...register("name")}
            className="placeholder:text-[#61656F] placeholder:dark:text-[#9e9a90] bg-[#B4BCCF] dark:text-[#9e9a90] dark:bg-[#4b4330] bg-opacity-40 w-[300px] h-[60px] p-4 shadow-2xl rounded-2xl text-[24px] font-medium"
            required
            id="name"
            placeholder="name"
          />
          <input
            {...register("email")}
            type="email"
            className="placeholder:text-[#61656F] placeholder:dark:text-[#9e9a90] bg-[#B4BCCF] dark:text-[#9e9a90] dark:bg-[#4b4330] bg-opacity-40 w-[300px] h-[60px] p-4 shadow-2xl rounded-2xl text-[24px] font-medium"
            required
            id="email"
            placeholder="email"
          />
          <div className="relative flex items-center">
          <input
            {...register("password")}
            type={passwordType}
            className="placeholder:text-[#61656F] placeholder:dark:text-[#9e9a90] bg-[#B4BCCF] dark:text-[#9e9a90] dark:bg-[#4b4330] bg-opacity-40 w-[300px] h-[60px] p-4 shadow-2xl rounded-2xl text-[24px] font-medium"
            required
            id="password"
            placeholder="password"
          />
          <EyeIcon onClick={() => passwordType === "password" ? setPasswordType("text") : setPasswordType("password")} className="hover:fill-[#f1efca] cursor-pointer fill-white absolute h-[30px] right-5"/>
          </div>
          <input
            type="submit"
            value={t("login")}
            className="mt-5 shadow-2xl hover:bg-green-500 duration-300 bg-green-400 text-white bg-opacity-80 py-3 w-full rounded-2xl text-[24px] font-medium"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
