<template>
  <div>
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import dataService from '@/services/data';

console.log(dataService)

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
