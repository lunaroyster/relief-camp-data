<template>
  <div>
    <Menu/>
    <ResourceSearch v-if="searchType == 'resources'"/>
    <ReliefCampSearch v-if="searchType == 'reliefCamps'"/>
    <!--<ResourceSearch v-if="searchType == 'resources'"/>-->
  </div>
</template>

<script>
import Menu from '@/components/Menu';

import ResourceSearch from '@/components/ResourceSearch';
import ReliefCampSearch from '@/components/ReliefCampSearch';

export default {
  name: 'Home',
  components: {
    Menu,
    ResourceSearch,
    ReliefCampSearch,
  },
  data() {
    return {
      
    };
  },
  async mounted() {
    setInterval(()=> {
      if(!this.termUpdateTime || Date.now() - this.termUpdateTime < 1000) return;
      window.gtag('event', 'search', {value: this.$store.state.searchTerm.length});
      this.$store.commit('resetTermUpdateTime');
    }, 1000);
  },
  computed: {
    searchType: function() {
      return this.$store.state.searchType;
    },
    termUpdateTime: function() {
      return this.$store.state.termUpdateTime;
    },
  },
};

</script>

<style scoped lang="scss">

</style>
