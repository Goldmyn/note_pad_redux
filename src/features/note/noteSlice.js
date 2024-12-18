import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",

  initialState: {
    /* we use json.parse to convert the state to a local storage array of object, and if the state data is null we use the empty array to hold the initial state */
    userNotes: JSON.parse(localStorage.getItem("note")) || [],
  },

  reducers: {
    addNewNote: (state, action) => {
      const date = new Date();

      state.userNotes = [
        {
          note_id: Math.floor(Math.random() * 99999),
          note_content: action.payload,
          note_created_at: date.toDateString(),
        },
        ...state.userNotes,
      ];
      {/* To store data in the local storage of the browser use use the setItem method of the localStorage*/}
      localStorage.setItem("note", JSON.stringify(state.userNotes));
    },
    editNoteContent: (state, action) => {
      state.userNotes = state.userNotes.map((item) => {
        if (item.note_id === action.payload.note_to_editId) {
          item.note_content = action.payload.note_to_update;
        }
        return item;
      });
      localStorage.setItem("note", JSON.stringify(state.userNotes));
    },
    deleteUserNote: (state, action) => {
      state.userNotes = state.userNotes.filter(
        (item) => item.note_id !== action.payload
      );
      localStorage.setItem("note", JSON.stringify(state.userNotes));
    },
  },
});

// Export actions
export const { addNewNote, editNoteContent, deleteUserNote } =
  noteSlice.actions;

// Export reducer
export default noteSlice.reducer;
