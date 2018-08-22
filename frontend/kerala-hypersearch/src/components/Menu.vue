<template>
  <div id="menu">
    <div class="searchbar">
      <div class="container">
        <div class="content">
          <span><i class="fas fa-search" v-on:click="forceSearch"></i></span>
          <input type="text" class="searchbox mx-3" name="" v-model="searchTerm" :placeholder="searchPlaceholder"/>
          <i class="fas fa-sliders-h d-flex align-items-center ml-3 pointer" v-on:click="toggleConfigBar()"></i>
          <span class="d-md-flex d-none">
            <a class="d-flex align-items-center ml-3" target="_blank" href="https://github.com/lunaroyster/relief-camp-data"><i class="fab fa-github"></i></a>
            <a class="d-flex align-items-center ml-3" target="_blank" href="https://twitter.com/itsarnavb"><i class="fab fa-twitter"></i></a>
          </span>
        </div>
      </div>
    </div>
    <div class="configbar" v-bind:class="{visible: showConfigBar}">
      <div class="container" style="color: white">
        <span class="text-muted">I'm looking for</span>
        <select id="searchType" v-model="searchType" class="p-2">
          <option value="resources">Resources</option>
          <option value="reliefCamps">Relief camps</option>
          <option value="volunteers">Volunteers</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      showConfigBar: false,
    };
  },
  computed: {
    searchTerm: {
      get () {
        return this.$store.state.searchTerm;
      },
      set (value) {
        this.$store.commit('updateSearchTerm', value);
      }
    },
    searchType: {
      get () {
        return this.$store.state.searchType;
      },
      set (value) {
        this.$store.commit('updateSearchType', value);
      }
    },
    searchPlaceholder() {
      let placeholders = {
        "resources": "What's needed?",
        "reliefCamps": "What can you provide?",
        "volunteers": "Use names or phone numbers"
      };
      return placeholders[this.searchType];
    }
  },
  methods: {
    forceSearch() {
      this.$root.$emit('forceSearch');  
    },
    toggleConfigBar(state) {
      if(state) return this.showConfigBar = state;
      this.showConfigBar = !this.showConfigBar;
    }
  },
};

</script>

<style scoped lang="scss">
#menu {
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    button.btn {
      background: none;
      color: white;
      font-weight: 100;
      &.selected {
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-color: #888;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
  .searchbar {
    height: 6em;
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
        &:focus #menu {
          display: none;
        }
      }
    }
  }
  .configbar {
    height: 0;
    background-color: black;
    font-weight: 100;
    box-shadow: #000 0px 5px 20px 0px;
    transition: 0.2s all;
    &.visible {
      height: 3em;
    }
    #searchType {
      appearance: none;
      border: none;
      background: none;
      color: white;
      option {
        background: black;
        color: white;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
