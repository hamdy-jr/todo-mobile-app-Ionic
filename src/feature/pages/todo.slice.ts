import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  id: number;
  task: string;
  isComplete: boolean;
  priority: "high" | "normal" | "zlow" | undefined;
};
const initialState: initialStateType[] = [
  { id: 0, task: "Do Something", isComplete: false, priority: "high" },
  { id: 1, task: "Do Exam", isComplete: false, priority: "normal" },
  { id: 2, task: "Do Homework", isComplete: false, priority: "zlow" },
];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    sortDataByPriority: (state) => {
      const compare = (a: any, b: any) => {
        if (a.priority < b.priority) {
          return -1;
        }
        if (a.priority > b.priority) {
          return 1;
        }
        return 0;
      };
      return state.sort(compare);
    },
    // updateIsComplete: (state, action) => {
    //   const { id, isComplete } = action.payload;
    //   state[id] = { ...state[id], isComplete: isComplete };
    // },
  },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
