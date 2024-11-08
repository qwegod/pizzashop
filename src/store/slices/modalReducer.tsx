import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

const initialState = {
  modal: false,
  modalName: "",
  defaultModal: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setModalName: (state, action) => {
      state.modalName = action.payload;
    },
    setDefModal: (state, action) => {
      state.defaultModal = action.payload;
    },
    setupModal: (state, action) => {
      state.modalName = action.payload;
      state.defaultModal = false;
      state.modal = true;
    },
    removeModalInstantly: (state) => {
      state.modalName = "";
      state.defaultModal = true;
      state.modal = false;
    },
  },
});

export const removeModal =
  () => async (dispatch: ThunkDispatch<void, {}, AnyAction>) => {
    dispatch(setModal(false));
    setTimeout(() => {
      dispatch(setDefModal(true));
      dispatch(setModalName(""));
    }, 500);
  };

export const {
  setModal,
  setModalName,
  setDefModal,
  setupModal,
  removeModalInstantly,
} = modalSlice.actions;

export default modalSlice.reducer;
