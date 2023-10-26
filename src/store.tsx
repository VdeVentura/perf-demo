import { PayloadAction, configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { JobFragment } from "@components/organisms/JobCard";
import { mockJobs } from "./jobs.mock";

export type JobsState = {
  all: JobFragment[];
  favorites: JobFragment["id"][];
};

const initialState: JobsState = {
  all: mockJobs,
  favorites: [],
};

export const jobsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const job = state.all.find((job) => job.id === action.payload);
      if (job) {
        job.isFavorite = !job?.isFavorite;
      }
    },
    // toggleFavorite: (state, action: PayloadAction<string>) => {
    //   const favoriteIndex = state.favorites.indexOf(action.payload);
    //   if (favoriteIndex > -1) {
    //     state.favorites.splice(favoriteIndex, 1);
    //   } else {
    //     state.favorites.push(action.payload);
    //   }
    // },
  },
});

export const { toggleFavorite } = jobsSlice.actions;

export const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
