import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { login, logout, setName, setEmail, setAvatarPath, setCard } from "../store/slices/accountReducer";
import { clearShopList } from "../store/slices/shopListReducer";
import { useLocalStorage } from "usehooks-ts";

const useAccountCookies = () => {
  const [, setCookie, removeCookie] = useCookies();
  const [userName, setUserName] = useLocalStorage('name', '')
  const [userEmail, setUserEmail] = useLocalStorage('email', '')
  const dispatch = useDispatch();

  const loginWithCookies = (data: { name: string, email: string }) => {
    setCookie("account", 3232, { path: "/" });
    setUserName(data.name);
    setUserEmail(data.email)
   
    dispatch(login());
  };

  const logoutWithCookies = () => {
    removeCookie("account", { path: "/" });
    dispatch(setName(""))
    dispatch(setEmail(""))
    dispatch(setAvatarPath(""))
    dispatch(setCard({ number: "", name: "", date: "" }))
    dispatch(logout());
    dispatch(clearShopList())
  };

  const updateAccountData = () => {
    dispatch(setName(userName))
    dispatch(setEmail(userEmail))
    dispatch(setAvatarPath("/assets/avatar.png"))
    dispatch(setCard({ number: "5214 4587 9658 1452", name: userName, date: "12/24" }))
  }

  return {
    loginWithCookies,
    logoutWithCookies,
    updateAccountData
  };
};

export default useAccountCookies;
