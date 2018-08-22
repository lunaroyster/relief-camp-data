import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: null,
    searchType: 'resources',
    termUpdateTime: null
  },
  mutations: {
    updateSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
      state.termUpdateTime = Date.now();
    },
    updateSearchType(state, searchType) {
      state.searchType = searchType;
    },
    resetTermUpdateTime(state) {
      state.termUpdateTime = null;
    },
  }
});
