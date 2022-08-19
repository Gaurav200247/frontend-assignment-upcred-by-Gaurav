import { createReducer } from "@reduxjs/toolkit";

export const ModalReducer = createReducer(
  {},
  {
    OpenWatchModal: (state, action) => {
      state.WatchModal = true;
      state.index = action.payload;
    },
    CloseWatchModal: (state) => {
      state.WatchModal = false;
      state.index = null;
    },
  }
);
