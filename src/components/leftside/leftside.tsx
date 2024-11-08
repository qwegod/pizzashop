import { setupModal } from "../../store/slices/modalReducer";
import { useDispatch } from "react-redux";

function LeftSide() {
  const dispatch = useDispatch();
  return (
    <div className="min-w-[105px] dark:bg-black h-screen">
      <nav className="flex flex-col mx-auto w-max h-max *:mb-20 mt-20 items-center *:max-w-max">
        <img
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/logo.png"
          alt="logo"
        />
        <img
          onClick={() => {
            dispatch(setupModal("profile"));
          }}
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/profile.png"
          alt="profile"
        />
        <img
          onClick={() => {
            dispatch(setupModal("wallet"));
          }}
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/wallet.png"
          alt="wallet"
        />
        <img
          onClick={() => {
            dispatch(setupModal("settings"));
          }}
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/settings.png"
          alt="settings"
        />
        <img
          onClick={() => {
            dispatch(setupModal("contact"));
          }}
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/mail.png"
          alt="mail"
        />
        <img
          onClick={() => {
            dispatch(setupModal("data"));
          }}
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/data.png"
          alt="data"
        />
        <img
          onClick={() => {
            dispatch(setupModal("chat"));
          }}
          className="cursor-pointer hover:transform hover:scale-110 hover:duration-200 transition-transform ease-linear"
          src="/assets/chat.png"
          alt="chat"
        />
      </nav>
    </div>
  );
}

export default LeftSide;
