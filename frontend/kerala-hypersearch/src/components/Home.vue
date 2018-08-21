<template>
  <div>
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import dataService from '@/services/data';
import Fuse from 'fuse.js';

console.log(dataService);
console.log(Fuse);

export default {
  name: 'Home',
  components: {
    Menu,
  },
  data() {
    return {};
  },
};

</script>

<style scoped>

</style>
