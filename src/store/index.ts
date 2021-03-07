import Vue from "vue";
import Vuex from "vuex";
import { Api } from "@/api/Api";
import { LocalSearchDao } from "@/types/LocalSearchDao";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    searchResult: [],
    showResults: false
  },
  mutations: {
    setResult(state, result) {
      state.searchResult = result;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setShowResults(state, show) {
      state.showResults = show;
    }
  },
  actions: {
    async doSearch({ commit, state }) {
      const api = new Api();
      const result = await api.fetch(`search?q=${state.searchQuery}`);
      commit("setResult", result);
      commit("setShowResults", true);
    }
  },
  getters: {
    getResult: state => state.searchResult as LocalSearchDao[],
    getSearchQuery: state => state.searchQuery as string,
    getShowResult: state => state.showResults as boolean
  }
});
