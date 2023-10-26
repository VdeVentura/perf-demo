import { useSelector } from "react-redux";
import { RootState } from "../../store";

// export const useJobs = () => {
//   const state = useSelector((state: RootState) => state);

//   return {
//     jobs: state.jobs.all,
//     favorites: state.jobs.favorites,
//   };
// };

// export const useJobs = () => {
//   const jobsState = useSelector((state: RootState) => state.jobs);

//   return {
//     jobs: jobsState.all,
//     favorites: jobsState.favorites,
//   };
// };

export const useJobs = () => {
  const jobs = useSelector((state: RootState) => state.jobs.all);

  return { jobs };
};
