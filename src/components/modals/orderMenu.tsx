import { useDispatch, useSelector } from "react-redux";
import { ShopItem } from "../../store/slices/shopListReducer";
import Checked from "../rightside/checked";
import { removeModalInstantly } from "../../store/slices/modalReducer";
import { t } from "i18next";

function OrderMenu() {
  const shopList = useSelector(
    (store: { shopList: { shopList: ShopItem[] } }) => store.shopList.shopList
  );
  const totalCost = useSelector(
    (store: { shopList: { totalCost: number } }) => store.shopList.totalCost
  );
  const dispatch = useDispatch()

  if (shopList.length === 0) {
    dispatch(removeModalInstantly());
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-4 flex flex-col w-[600px] h-max bg-white dark:bg-black rounded-3xl"
    >
      <div className="flex flex-col items-center gap-y-2 justify-between">
        <span className="text-[36px] font-bold dark:text-white">{t("ordermenu")}</span>
        {shopList.map((el: ShopItem, index: number) => (
          <Checked
            key={index}
            index={el.index}
            path={el.path}
            name={el.name}
            cost={el.cost}
            count={el.count}
          />
        ))}
        <div className="flex flex-col justify-center w-full items-center">
          <div className="flex justify-between  items-center w-full p-4">
            <span className="text-[22px] font-bold dark:text-white">{t("totalprice")}</span>
            <span className="text-[#01C550] text-[34px] font-bold">
              ${totalCost}.00
            </span>
          </div>
          <button className="hover:bg-[#fdb768] ease-linear transition-colors hover:duration-500 animate-bounce rounded-2xl px-4 py-2 w-max bg-[#FF9921] text-white text-[24px] font-bold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderMenu;
