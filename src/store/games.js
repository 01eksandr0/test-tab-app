import response from "../data/video_game.json"

export default {
    state: { data: null, page: 1 },
    getters: {
        getRows(state) {
            return state.data?.rows
        },
        getPage() {
            return state.page
        }
    },
    actions: {
        fetchGames({ commit }, { page = 1, filters = { name: '', year: 2024 } }) {
            try {
                const data = response;
                let rows = [...data.rows].filter(i => i.name.toLowerCase().includes(filters.name.toLowerCase()) && i.year <= filters.year);

                const startIndex = (page - 1) * 10;
                const endIndex = page * 10;
                rows = rows.slice(startIndex, endIndex);
                commit("writeGames", { columns: data.columns, rows });
            } catch (error) {
                console.error(error);
            }
        }
    },
    mutations: {
        writeGames(state, data) {
            state.data = data
        }
    }
}