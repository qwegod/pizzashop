import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountReducer";
import modalReducer from "./slices/modalReducer";
import shopListReducer from "./slices/shopListReducer";

export default configureStore({
  reducer: {
    account: accountReducer,
    modal: modalReducer,
    shopList: shopListReducer,
  },
});
