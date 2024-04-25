import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./phonebook/phonebookReducer";

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
