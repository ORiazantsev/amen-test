import Vue from "vue";
import Vuex from "vuex";
import sweepstakes from "@/store/Modules/sweepstakes/index.store"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sweepstakes,
  },
});
