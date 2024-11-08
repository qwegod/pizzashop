import { useSelector } from "react-redux";
import Card from "../card/card";
import { t } from "i18next";

function Wallet() {
  const card = useSelector(
    (state: { account: { card: { number: string, name: string, date: string } } }) => state.account.card
  );
  return (
    <div onClick={(e) => e.stopPropagation()} className="p-4 flex flex-col w-[600px] h-max bg-white dark:bg-black rounded-3xl">
      <div className="flex flex-col items-center justify-between">
        <span className="text-[36px] font-bold dark:text-white">{t("your_wallet")}</span>
        <Card number={card.number} name={card.name} date={card.date} />
        <div className="flex justify-around w-full">
          <button className="shadow-2xl text-white hover:bg-red-500 duration-300 bg-red-400 w-max bg-opacity-80 p-3 rounded-2xl text-[24px] font-medium">
            {t("remove_card")}
          </button>
          <button className="shadow-2xl text-white hover:bg-green-500 duration-300 bg-green-400 w-max bg-opacity-80 p-3 rounded-2xl text-[24px] font-medium">
          {t("add_card")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
