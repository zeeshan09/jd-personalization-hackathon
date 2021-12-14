import { createStore } from "vuex";

import modules from "./modules";

export const store = createStore({
  modules,
});

export function useStore() {
  return store;
}
