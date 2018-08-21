<template>
  <div id="menu">
    <div class="container" style="height: 100%; display: flex; align-items: center; overflow: hidde">
      <div class="content">
        <span>
          <i class="fas fa-search"></i>
          <!--<i class="material-icons">search</i>-->
        </span>
        <input type="text" class="searchbox mx-3" name=""/>
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
    .searchbox {
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
