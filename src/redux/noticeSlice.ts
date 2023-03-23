/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface INotice {
  isOpenFullNote: boolean;
  noteId: string;
}

const initialState = {
  isOpenFullNote: false,
  noteId: '',
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setIsOpenFullNotice(state, { payload }: PayloadAction<boolean>) {
      state.isOpenFullNote = payload;
    },
    setNoteId(state, { payload }: PayloadAction<string>) {
      state.noteId = payload;
    },
  },
});

export const { setIsOpenFullNotice, setNoteId } = noticeSlice.actions;
export default noticeSlice.reducer;
