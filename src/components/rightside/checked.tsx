import { useEffect } from "react";
import {
  removeProduct,
  increaseCount,
  decreaseCount,
} from "../../store/slices/shopListReducer";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { t } from "i18next";

function Checked({
  index,
  path,
  name,
  cost,
  count,
}: {
  index: number;
  path: string;
  name: string;
  cost: string;
  count: number;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === 0) {
      dispatch(removeProduct(index));
    }
  }, [count, dispatch, index]);

  return (
    <div className="relative p-4 flex w-[400px] h-[120px] bg-[#b7babe] dark-[#484541] bg-opacity-30 rounded-3xl">
      <img className="h-full" src={path} alt="" />
      <div className="ml-5 flex flex-col self-center">
        <span className="dark:text-white mb-3 text-[20px] font-bold">{t(name)}</span>
        <span className="text-[#01C550] text-[18px] font-bold">${cost}</span>
      </div>
      <div className="absolute ml-[250px] mt-[60px] flex w-[120px] h-[30px] justify-between items-center">
        <button
          onClick={() => {
            dispatch(decreaseCount(index));
          }}
          className="hover:bg-[#f5cece] hover:dark:bg-[#f5cece] flex items-center justify-center ease-linear transition-colors hover:duration-200 dark:bg-black dark:shadow-[0_25px_50px_-15px_rgba(255,255,255,0.25)] shadow-2xl rounded-xl h-[30px] w-[30px]"
        >
          <MinusIcon className="w-[15px] dark:fill-white" />
        </button>
        <span className="text-[20px] dark:text-white font-bold">{"0" + count}</span>
        <button
          onClick={() => dispatch(increaseCount(index))}
          className="hover:bg-[#dcf5ce] hover:dark:bg-[#dcf5ce] flex items-center justify-center ease-linear transition-colors hover:duration-200 dark:bg-black dark:shadow-[0_25px_50px_-15px_rgba(255,255,255,0.25)] bg-white shadow-2xl rounded-xl h-[30px] w-[30px]"
        >
           <PlusIcon className="w-[15px] dark:fill-white" />
        </button>
      </div>
    </div>
  );
}

export default Checked;
