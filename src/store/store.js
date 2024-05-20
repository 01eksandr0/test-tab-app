import { createStore } from "vuex";
import games from "./games";
import filters from "./filters.js";

export default createStore({
    modules: { games, filters }
})