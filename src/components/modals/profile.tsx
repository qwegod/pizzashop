import { removeModalInstantly } from "../../store/slices/modalReducer";
import useAccountCookies from "../../hooks/useAccountCookies";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";

function Profile() {
  const { logoutWithCookies } = useAccountCookies();
  const dispatch = useDispatch();
  const username = useSelector(
    (state: { account: { name: string } }) => state.account.name
  );

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="p-4 flex flex-col w-[600px] h-max bg-white dark:bg-black rounded-3xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="" alt="avatar" src="/assets/avatar.png" />
          <span className="ml-5 text-[28px] font-bold dark:text-white">{username}</span>
        </div>
        <button
          onClick={() => {
            logoutWithCookies();
            dispatch(removeModalInstantly());
          }}
          className="shadow-2xl hover:bg-red-500 duration-300 text-white bg-red-400 w-max bg-opacity-80 p-3 rounded-2xl text-[24px] font-medium"
        >
          {t("logout")}
        </button>
      </div>
    </div>
  );
}

export default Profile;
