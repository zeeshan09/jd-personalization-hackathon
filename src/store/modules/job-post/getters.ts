import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  loadingJobPostings(state: State): boolean;
  jobPostings(state: State): any[];
  jobPostingsTotalCount(state: State): number;
  jobPostingsError(state: State): any;
};

export const getters: GetterTree<State, State> & Getters = {
  loadingJobPostings(state) {
    return state.loadingJobPostings;
  },
  jobPostings(state) {
    return state.jobPostings;
  },
  jobPostingsTotalCount(state) {
    return state.jobPostingsTotalCount;
  },
  jobPostingsError(state) {
    return state.jobPostingsError;
  },
};
