import Vue from "vue";
import Vuex from "vuex";
import filter from "@/store/Modules/Filter/index.store"
import sort from "@/store/Modules/Sort/index.store"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    filter,
    sort,
  },
});
