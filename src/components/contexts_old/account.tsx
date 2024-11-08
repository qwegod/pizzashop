import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";

const AccountContext = createContext<{
  authorized: boolean;
  login: () => void;
  logout: () => void;
}>({ authorized: false, login: () => {}, logout: () => {} });

export const useAccount = () => {
  return useContext(AccountContext);
};

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cookie, setCookie, removeCookie] = useCookies(["account"]);
  const [authorized, setAuthorized] = useState(cookie.account);

  const login = () => {
    setCookie("account", 3232);
    setAuthorized(true);
  };

  const logout = () => {
    removeCookie("account", { path: "/" });
    setAuthorized(false);
  };

  return (
    <AccountContext.Provider value={{ authorized, login, logout }}>
      {children}
    </AccountContext.Provider>
  );
};
