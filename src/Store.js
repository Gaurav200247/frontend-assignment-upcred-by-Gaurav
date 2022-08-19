import { configureStore } from "@reduxjs/toolkit";
import { ModalReducer } from "./Reducers/ModalReducers";

const store = configureStore({
  reducer: {
    Modal: ModalReducer,
  },
});

export default store;
