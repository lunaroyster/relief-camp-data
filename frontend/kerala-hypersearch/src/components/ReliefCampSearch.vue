<template>
  <div class="container">
    <ReliefCampCard v-for="result in results.slice(0,25)" :reliefCamp="result.item"/>
    <div class="loading-text text-muted my-5" v-if="!reliefCamps">Fetching relief camps</div>
  </div>
</template>

<script>
import ReliefCampCard from '@/components/ReliefCampCard';
import dataService from '@/services/data';

import Fuse from 'fuse.js';
let fuse;

export default {
  name: 'ReliefCampSearch',
  data() {
    return {
      results: null,
      reliefCamps: null,
    };
  },
  components: {
    ReliefCampCard,
  },
  computed: {
    searchTerm: function() {
      return this.$store.state.searchTerm;
    },
  },
  methods: {
    doSearch(term) {
      this.results = fuse.search(term);
    }
  },
  async mounted() {
    this.reliefCamps = await dataService.getReliefCamps();
    let fuseConfig = {
      shouldSort: true,
      includeScore: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["needs"]
    };
    fuse = new Fuse(this.reliefCamps, fuseConfig);
    this.$root.$on('forceSearch', ()=> {
      this.doSearch(this.searchTerm);
    });
  },
  watch: {
    searchTerm(term, exTerm) {
      this.doSearch(term);
    }
  }
};
</script>

<style scoped lang="scss">
.loading-text {
  text-align: center;
  font-weight: 100;
  font-size: 1.5em;
}
</style>
