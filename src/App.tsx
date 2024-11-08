import { useDispatch, useSelector } from "react-redux";
import useRenderModal from "./hooks/useRenderModal";
import LeftSide from "./components/leftside/leftside";
import Main from "./components/main/main";
import RightSide from "./components/rightside/rightside";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { login } from "./store/slices/accountReducer";
import { removeModal } from "./store/slices/modalReducer";
import useAccountCookies from "./hooks/useAccountCookies";


function App() {
  const modal = useSelector(
    (state: { modal: { modal: boolean } }) => state.modal.modal
  );
  const modalName = useSelector(
    (state: { modal: { modalName: string } }) => state.modal.modalName
  );
  const defaultModal = useSelector(
    (state: { modal: { defaultModal: boolean } }) => state.modal.defaultModal
  );
  const authorized = useSelector(
    (state: { account: { authorized: boolean } }) => state.account.authorized
  );
  const dispatch = useDispatch<any>();
  const renderModal = useRenderModal;
  const [cookies] = useCookies();
  const {updateAccountData} = useAccountCookies()

  useEffect(() => {
    if (cookies.account) {
      updateAccountData()
      dispatch(login());
    }
  }, [cookies.account, dispatch, updateAccountData]);
  return (
    <div className="flex flex-row">
      <div
        onClick={() => dispatch(removeModal())}
        className={`${defaultModal && "hidden"} ${
          modal ? "animate-appear opacity-1" : "animate-disappear opacity-0"
        }  flex justify-center items-center z-50 bottom-0 w-screen bg-black bg-opacity-20 h-screen absolute`}
      >
        {renderModal(modalName, authorized)}
      </div>

      <LeftSide />
      <Main />
      <RightSide />
    </div>
  );
}

export default App;
