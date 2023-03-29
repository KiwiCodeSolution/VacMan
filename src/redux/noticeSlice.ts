/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INotice {
  isOpenFullNote: boolean;
  noteId: string;
  onArchive: boolean;
}

const initialState = {
  isOpenFullNote: false,
  noteId: "",
  onArchive: false,
};

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    setIsOpenFullNotice(state, { payload }: PayloadAction<boolean>) {
      state.isOpenFullNote = payload;
    },
    setNoteId(state, { payload }: PayloadAction<string>) {
      state.noteId = payload;
    },
    setOnArchive(state, { payload }: PayloadAction<boolean>) {
      state.onArchive = payload;
    },
  },
});

export const { setIsOpenFullNotice, setNoteId, setOnArchive } = noticeSlice.actions;
export default noticeSlice.reducer;
