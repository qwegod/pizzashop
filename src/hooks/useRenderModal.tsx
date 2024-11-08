import Profile from "../components/modals/profile";
import Login from "../components/modals/login";
import OrderMenu from "../components/modals/orderMenu";
import Wallet from "../components/modals/wallet";
import Settings from "../components/modals/settings";
import Data from "../components/modals/data";
import Contact from "../components/modals/contact";
import Chat from "../components/modals/chat";

const useRenderModal = (modalName: string, authorized: boolean) => {
  switch (modalName) {
    case "profile":
      if (!authorized) return <Login />;
      return <Profile />;
    case "login":
      return <Login />;
    case "ordermenu":
      return <OrderMenu />;
    case "wallet":
      if (!authorized) return <Login />;
      return <Wallet />;
    case "settings":
      return <Settings />;
    case "data":
      if (!authorized) return <Login />;
      return <Data />;
    case "contact":
      return <Contact />;
    case "chat":
      if (!authorized) return <Login />;
      return <Chat />;

    default:
      break;
  }
};

export default useRenderModal;
