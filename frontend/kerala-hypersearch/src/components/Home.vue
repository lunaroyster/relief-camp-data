<template>
  <div>
    <Menu/>
    <div class="container">
      <ResourceCard v-for="result in results.slice(0,25)" :resource="result.item"/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import ResourceCard from '@/components/ResourceCard';

import dataService from '@/services/data';
import Fuse from 'fuse.js';

let fuse;

export default {
  name: 'Home',
  components: {
    Menu,
    ResourceCard,
  },
  data() {
    return {
      results: [],
      updateTime: null,
    };
  },
  computed: {
    searchTerm: function() {
      return this.$store.state.searchTerm;
    },
  },
  async mounted() {
    setInterval(()=> {
      if(!this.updateTime || Date.now() - this.updateTime < 1000) return;
      window.gtag('event', 'search', {value: this.searchTerm.length});
      this.updateTime = null;
    }, 1000);
    let resources = await dataService.getResources();
    let fuseConfig = {
      shouldSort: true,
      includeScore: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "resourcesAvailableWithThem"
      ]
    }
    fuse = new Fuse(resources, fuseConfig);
  },
  watch: {
    searchTerm(term, exTerm) {
      this.results = fuse.search(term);
      this.updateTime = Date.now();
    }
  }
};

</script>

<style scoped>

</style>
