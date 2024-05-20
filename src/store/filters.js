export default {
    state: {
        filters: { name: '', year: 2024 }
    },
    getters: {
        getFilters(state) {
            return state.filters
        }
    },
    actions: {
        changeFilters({ commit }, newFilters) {
            commit('filtersUpdate', newFilters)
        }
    },
    mutations: {
        filtersUpdate(state, newFilters) {
            state.filters = newFilters
        }
    }

}