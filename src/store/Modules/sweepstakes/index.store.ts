import state from "./state.store"
import getters from "./getters.store"
import mutations from "./mutations.store"
import actions from "./actions.store"

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}