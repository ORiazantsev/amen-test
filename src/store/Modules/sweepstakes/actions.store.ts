const actions = {
    getStatusOfItem({ commit }, status = '') {
    commit("GET_STATUS_OF_ITEM", { status });
    }
}


export default actions;
