import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: null,
    searchType: 'resources',
  },
  mutations: {
    updateSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
    updateSearchType(state, searchType) {
      state.searchType = searchType;
    }
  }
});
