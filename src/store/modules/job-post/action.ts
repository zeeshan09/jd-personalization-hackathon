import { ActionContext, ActionTree } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { types } from "./mutation-types";

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  getJobPostings(context: ActionAugments, requestObj: any): void;
};

export const actions: ActionTree<State, State> & Actions = {
  getJobPostings({ commit }: any, requestObj: any) {
    console.log("requestObj------", requestObj);
    commit(types.LOAD_JOB_POSTS);
    commit(types.LOAD_JOB_POSTS_SUCCESS, [
      {
        jobId: 25,
        jobTitle: "Product Manager",
      },
    ]);
  },
};
