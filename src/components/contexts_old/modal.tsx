import { createContext, ReactNode, useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import Profile from "../modals/profile";
import Login from "../modals/login";
import OrderMenu from "../modals/orderMenu";
import Wallet from "../modals/wallet";
import Settings from "../modals/settings";
import Data from "../modals/data";
import Contact from "../modals/contact";
import Chat from "../modals/chat";

const ModalContext = createContext<{
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalName: string;
  setModalName: Dispatch<SetStateAction<string>>;
  defaultModal: boolean;
  setDefModal: Dispatch<SetStateAction<boolean>>;
  renderModal: (authorized: boolean) => ReactNode;
  setupModal: (name: string) => void;
  removeModal: () => void;
  removeModalInstantly: () => void;
}>({
  modal: false,
  setModal: () => {},
  modalName: "",
  setModalName: () => {},
  defaultModal: true,
  setDefModal: () => {},
  renderModal: () => null,
  setupModal: () => {},
  removeModal: () => {},
  removeModalInstantly: () => {},
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [defaultModal, setDefModal] = useState(true);

  const setupModal = (name: string) => {
    setModalName(name);
    setDefModal(false);
    setModal(true);
  };

  const removeModal = () => {
    setModal(false);
    setTimeout(() => {
      setDefModal(true);
      setModalName("");
    }, 500);
  };

  const removeModalInstantly = () => {
    setModalName("");
    setDefModal(true);
    setModal(false);
  };

  const renderModal = (authorized: boolean) => {
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

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        modalName,
        setModalName,
        defaultModal,
        setDefModal,
        renderModal,
        setupModal,
        removeModal,
        removeModalInstantly,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
