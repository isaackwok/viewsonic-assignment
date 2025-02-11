import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Classroom } from "../../types/classroom";
import { api } from "../api";

const initialState: {
  info: Classroom | null;
} = {
  info: null,
};

export const classroomSlice = createSlice({
  name: "classroom",
  initialState,
  reducers: {
    setClassroomInfo: (state, action: PayloadAction<Classroom>) => {
      state.info = action.payload;
    },
    updateStudentScore: (
      state,
      action: PayloadAction<{ id: string; score: number }>
    ) => {
      const { id, score } = action.payload;
      const student = state.info?.students[id];
      if (student) {
        student.score = score;
      }
    },
    updateGroupScore: (
      state,
      action: PayloadAction<{ id: string; score: number }>
    ) => {
      const { id, score } = action.payload;
      const group = state.info?.groups[id];
      if (group) {
        group.score = score;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getClassroomInfo.matchFulfilled,
      (state, action) => {
        state.info = action.payload;
      }
    );
  },
});

export const { setClassroomInfo, updateStudentScore, updateGroupScore } =
  classroomSlice.actions;
export default classroomSlice.reducer;
