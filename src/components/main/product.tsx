import { addToShopList } from "../../store/slices/shopListReducer";
import { setupModal } from "../../store/slices/modalReducer";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/solid";
import { t } from "i18next";

function Product({
  index,
  path,
  name,
  time,
  cost,
}: {
  index: number;
  path: string;
  name: string;
  type: string;
  time: string;
  cost: string;
}) {
  const authorized = useSelector(
    (state: { account: { authorized: boolean } }) => state.account.authorized
  );
  const dispatch = useDispatch();

  return (
    <div className="flex relative justify-between w-[500px] h-[260px] bg-white dark:bg-black rounded-3xl">
      <img
        className="animate-spinSlow rounded-3xl h-[150px] w-[150px] mt-[30px] ml-[30px]"
        src={path}
        alt="pizza"
      />
      <div className="flex flex-col w-[280px] justify-center">
        <span className="text-[36px] text-black dark:text-white  font-bold">{t(name)}</span>
        <span className="text-[20px] text-[#4b4330] font-semibold">{`${time} ${t("time")}`}</span>
        <span className="text-[32px] text-[#01C550] font-bold">{cost}</span>
        <button
          onClick={() => {
            authorized
              ? dispatch(addToShopList({ index, path, name, cost }))
              : dispatch(setupModal("profile"));
          }}
          className="hover:bg-[#e7f0f5] hover:dark:bg-[#180f0a] ease-linear transition-colors hover:duration-200 absolute ml-[150px] mt-[150px] bg-white dark:bg-black w-max p-4 shadow-2xl dark:shadow-[0_25px_50px_-15px_rgba(255,255,255,0.25)] rounded-3xl"
        >
          <PlusIcon className="w-[35px] dark:fill-white" />
        </button>
      </div>
    </div>
  );
}

export default Product;
