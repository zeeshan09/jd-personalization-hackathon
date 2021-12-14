import { MutationTree } from "vuex";
import { State } from "./state";
import { types } from "./mutation-types";

export type Mutations = {
  [types.LOAD_JOB_POSTS](state: State): void;
  [types.LOAD_JOB_POSTS_SUCCESS](state: State, jobPosts: any): void;
  [types.LOAD_JOB_POSTS_FAILURE](state: State, jobPostsError: any): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [types.LOAD_JOB_POSTS](state: State) {
    state.loadingJobPostings = true;
  },
  [types.LOAD_JOB_POSTS_SUCCESS](state: State, jobPosts: any) {
    state.loadingJobPostings = false;
    state.jobPostings = jobPosts;
    state.jobPostingsTotalCount = jobPosts.length;
  },
  [types.LOAD_JOB_POSTS_FAILURE](state: State, jobPostsError: any) {
    state.loadingJobPostings = false;
    state.jobPostingsError = jobPostsError;
  },
};
