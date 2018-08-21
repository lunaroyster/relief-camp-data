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
  async mounted() {
    let volunteers = await dataService.getVolunteers();
    let fuse = new Fuse(volunteers, {});
    
  }
};

</script>

<style scoped>

</style>
