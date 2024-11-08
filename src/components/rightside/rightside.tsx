import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";
import { setupModal } from "../../store/slices/modalReducer";
import { ShopItem } from "../../store/slices/shopListReducer";
import Checked from "./checked";
import { t } from "i18next";

function RightSide() {
  const shopList = useSelector(
    (store: { shopList: { shopList: ShopItem[] } }) => store.shopList.shopList
  );
  const totalCost = useSelector(
    (store: { shopList: { totalCost: number } }) => store.shopList.totalCost
  );
  const authorized = useSelector(
    (state: { account: { authorized: boolean } }) => state.account.authorized
  );

  const username = useSelector(
    (state: { account: { name: string } }) => state.account.name
  );

  const card = useSelector(
    (state: { account: { card: { number: string, name: string, date: string } } }) => state.account.card
  );

  const avatarPath = useSelector(
    (state: { account: { avatarPath: string } }) => state.account.avatarPath
  );

  const dispatch = useDispatch();

  if (!authorized) {
    return null;
  }
  return (
    <div className="flex flex-col min-w-[500px] dark:bg-black h-screen">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img className="" alt="avatar" src={avatarPath} />
            <span className="ml-5 text-[28px] font-bold dark:text-white">{username}</span>
          </div>
          <img
            className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear h-max self-center"
            alt="notification"
            src="/assets/notification.png"
          />
        </div>
        <Card number={card.number} name={card.name} date={card.date} />
        {shopList.length > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-[38px] font-bold dark:text-white">{t("ordermenu")}</span>
            <span
              onClick={() => dispatch(setupModal("ordermenu"))}
              className="hover:text-[#fdb768] ease-linear cursor-pointer transition-colors hover:duration-500 text-[24px] text-[#FF9921] font-bold"
            >
              {t("seeall")}
            </span>
          </div>
        )}

        <div className="my-10 max-h-[420px] flex justify-center items-center flex-col gap-y-5 relative">
          {shopList.map((el, index) => {
            if (index > 2) return null;
            return (
              <Checked
                key={index}
                index={el.index}
                path={el.path}
                name={el.name}
                cost={el.cost}
                count={el.count}
              />
            );
          })}
          {shopList.length >= 3 && (
            <div
              onClick={() => dispatch(setupModal("ordermenu"))}
              className="cursor-pointer hover:scale-105 duration-200 w-[400px] rounded-2xl bg-[#b7babe] bg-opacity-30 border-[1px] border-opacity-35 dark:text-white border-black text-center font-medium text-[22px]"
            >
              {t("seeall")}
            </div>
          )}
        </div>
        {shopList.length > 0 && (
          <div className="flex flex-col justify-center w-full items-center">
            <div className="flex justify-between  items-center w-full p-4">
              <span className="dark:text-white text-[22px] font-bold">{t("totalprice")}</span>
              <span className="text-[#01C550] text-[34px] font-bold">
                ${totalCost}.00
              </span>
            </div>
            <button className="hover:bg-[#fdb768] ease-linear transition-colors hover:duration-500 animate-bounce rounded-2xl px-4 py-2 w-max bg-[#FF9921] text-white text-[24px] font-bold">
              {t("checkout")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSide;
