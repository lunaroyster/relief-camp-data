<template>
  <div>
    <Menu/>
    <ResourceSearch/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';

import ResourceSearch from '@/components/ResourceSearch';

export default {
  name: 'Home',
  components: {
    Menu,
    ResourceSearch,
  },
  data() {
    return {
      
    };
  },
};

</script>

<style scoped lang="scss">

</style>
