<template>
  <div id="menu">
    <div class="container" style="height: 100%; display: flex; align-items: center; overflow: hidde">
      <div class="content">
        <span><i class="fas fa-search"></i></span>
        <input type="text" class="searchbox mx-3" name="" v-model="searchTerm" placeholder="What's needed?"/>
        <span class="d-md-flex d-none">
          <a class="d-flex align-items-center ml-3" target="_blank" href="https://github.com/lunaroyster/relief-camp-data"><i class="fab fa-github"></i></a>
          <a class="d-flex align-items-center ml-3" target="_blank" href="https://twitter.com/itsarnavb"><i class="fab fa-twitter"></i></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {};
  },
  computed: {
    searchTerm: {
      get () {
        return this.$store.state.searchTerm;
      },
      set (value) {
        this.$store.commit('updateSearchTerm', value);
      }
    }
  },
};

</script>

<style scoped lang="scss">
#menu {
  height: 8em;
  background: black;
  color: white;
  box-shadow: #000 0 0 10px 0px;
  .content {
    width: 100%;
    font-size: 1.5em;
    font-weight: 100;
    display: flex;
    a {
      text-decoration: none;
      color: unset;
    }
    .searchbox {
      width: inherit;
      flex-grow: 1;
      font-weight: 100;
      color: white;
      background: none;
      border: none;
      outline: none;
    }
  }
}
</style>
