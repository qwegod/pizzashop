import { SetStateAction, useState } from "react";
import { productsList } from "./products";
import { useDispatch, useSelector } from "react-redux";
import { setupModal } from "../../store/slices/modalReducer";
import ThemeSwitch from "./themeSwitch";
import LanguageSwitch from "./languageSwitch";
import { t } from "i18next";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("");
  const authorized = useSelector(
    (state: { account: { authorized: boolean } }) => state.account.authorized
  );

  const username = useSelector(
    (state: { account: { name: string } }) => state.account.name
  );

  const dispatch = useDispatch();

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="bg-[#eeeeee] dark:bg-[#111111] w-full h-screen p-8 ">
      <div className="flex justify-between items-center">
         {authorized && <div className="flex flex-col">
          <span className="text-[#B4BCCF] dark:text-[#4b4330] text-[24px] font-medium">
            {t("hello")} {username}
          </span>
          <span className="text-[#2F2F2F] dark:text-[#d0d0d0] text-[28px] font-bold">
            {t("welcome_back")}
          </span>
        </div>}
        <LanguageSwitch/>
        <ThemeSwitch />
        <label className="mr-10">
          <img
            className="absolute mt-4 ml-4"
            src="/assets/search.png"
            alt="search"
          />
          <input
            value={inputValue}
            onChange={handleChange}
            className="pl-16 placeholder:text-[#61656F] placeholder:dark:text-[#9e9a90] w-[360px] h-[60px] bg-[#B4BCCF] dark:bg-[#4b4330] bg-opacity-40 rounded-2xl text-[#61656F] dark:text-[#9e9a90] text-[24px] font-medium"
            type="text"
            placeholder={t("header_search_placeholder")}
          />
        </label>
        {!authorized && (
          <button
            onClick={() => {
              dispatch(setupModal("login"));
            }}
            className="hover:bg-[#ecaf68] duration-300 shadow-2xl bg-[#FF9921] p-3 h-max text-white text-[24px] font-bold rounded-2xl"
          >
            {t("login")}
          </button>
        )}
      </div>
      <div className="flex justify-between items-center bg-[#2F2F2F] dark:bg-[#d0d0d0] rounded-3xl h-[386px] w-full my-5">
        <div className="ml-10 gap-y-10 flex flex-col w-[600px]">
          <span className="leading-tight text-[45px] text-white dark:text-black font-bold">
          {t("banner_text_1")}
            <span className="animate-pulse text-[#FF9921] text-[45px] font-bold">
            {t("banner_text_2")}
            </span>
          </span>
          <span className="text-[16px] text-white dark:text-black">
          {t("banner_text_3")}
          </span>
          <button className="hover:bg-[#fdb768] ease-linear transition-colors hover:duration-500 w-max text-[24px] text-white font-bold bg-[#FF9921] px-6 py-2 rounded-xl">
          {t("banner_text_button")}
          </button>
        </div>
        <img
          className="rounded-3xl max-[1577px]:hidden"
          alt="pizzaPrev"
          src="/assets/pizzaPrev.png"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[30px] font-bold self-center text-black dark:text-white">
        {t("ourmenu")}
        </span>
        <div
          onClick={() => setType("pizza")}
          className="hover:bg-[#f3e8dc] hover:dark:bg-[#0c1723] ease-linear transition-colors hover:duration-500 flex items-center bg-white dark:bg-black rounded-3xl py-2 px-4 cursor-pointer"
        >
          <img
            className="bg-[#D9D9D9] dark:bg-[#262626] p-1 mr-3 rounded-full h-max"
            src="/assets/pizzaIco.png"
            alt=""
          />
          <span className="text-black dark:text-white text-[22px] font-bold">
          {t("pizza")}
          </span>
        </div>
        <div
          onClick={() => setType("burger")}
          className="hover:bg-[#f3e8dc] hover:dark:bg-[#0c1723] ease-linear transition-colors hover:duration-500 flex items-center bg-white dark:bg-black rounded-3xl py-2 px-4 cursor-pointer"
        >
          <img
            className="bg-[#D9D9D9] dark:bg-[#262626] p-1 mr-3 rounded-full h-max"
            src="/assets/sandwichIco.png"
            alt=""
          />
          <span className="text-black dark:text-white text-[22px] font-bold">{t("burger")}</span>
        </div>
        <div
          onClick={() => setType("fries")}
          className="hover:bg-[#f3e8dc] hover:dark:bg-[#0c1723]  ease-linear transition-colors hover:duration-500 flex items-center bg-white dark:bg-black rounded-3xl py-2 px-4 cursor-pointer"
        >
          <img
            className="bg-[#D9D9D9] dark:bg-[#262626] p-1 mr-3 rounded-full h-max"
            src="/assets/french_friedIco.png"
            alt=""
          />
          <span className="text-black dark:text-white text-[22px] font-bold">{t("fries")}</span>
        </div>
        <div
          onClick={() => setType("pack")}
          className="hover:bg-[#f3e8dc] hover:dark:bg-[#0c1723] ease-linear transition-colors hover:duration-500 flex items-center bg-white dark:bg-black rounded-3xl py-2 px-4 cursor-pointer"
        >
          <img
            className="bg-[#D9D9D9] dark:bg-[#262626] p-1 mr-3 rounded-full h-max"
            src="/assets/packIco.png"
            alt=""
          />
          <span className="text-black dark:text-white text-[22px] font-bold">{t("pack")}</span>
        </div>
        <span
          onClick={() => setType("")}
          className="hover:text-[#fdb768] ease-linear cursor-pointer transition-colors hover:duration-500 text-[#FF9921] text-[22px] font-bold self-center"
        >
          {t("seeall")}
        </span>
      </div>
      <div className="mt-10  h-[calc(100vh_-_700px)] flex justify-between overflow-scroll flex-wrap max-[1700px]:flex-col gap-y-5">
        {productsList.map((el, index) => {
          const isTypeMatch = type !== "" ? el.props.type === type : true;
          const isNameMatch =
            inputValue.length > 0
              ? el.props.name.toLowerCase().includes(inputValue.toLowerCase())
              : true;

          return isTypeMatch && isNameMatch ? (
            <div key={index}>{el}</div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Main;
