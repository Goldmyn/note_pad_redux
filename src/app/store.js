import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/note/noteSlice.js";

export default configureStore({
  reducer: {
    note: noteReducer,
  },
});
