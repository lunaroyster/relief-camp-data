<template>
  <div class="container">
    <ResourceCard v-for="result in results.slice(0,25)" :resource="result.item"/>
    <div class="loading-text text-muted my-5" v-if="!resources">Fetching resources</div>
  </div>
</template>

<script>
import ResourceCard from '@/components/ResourceCard';
import dataService from '@/services/data';

import Fuse from 'fuse.js';
let fuse;

export default {
  name: 'ResourceSearch',
  data() {
    return {
      results: null,
      resources: null,
    };
  },
  components: {
    ResourceCard,
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
    this.resources = await dataService.getResources();
    let fuseConfig = {
      shouldSort: true,
      includeScore: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["resourcesAvailableWithThem"]
    };
    fuse = new Fuse(this.resources, fuseConfig);
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
