import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    filters: filtersReducer,
  },
});
