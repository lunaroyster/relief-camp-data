<template>
  <div class="reliefCamp">
    <div class="text-muted pb-2 d-flex">
      {{reliefCamp.needs}}
    </div>
    <div class="d-flex p-2">
      <i class="material-icons px-2">account_circle</i>
      {{reliefCamp.pointOfContact}}
      {{reliefCamp.contactNo}}
    </div>
    <div class="d-flex p-2" v-if="reliefCamp.campName || reliefCamp.location">
      <i class="material-icons px-2">location_on</i>
      {{reliefCamp.campName}}
      {{reliefCamp.location}}
    </div>
    <div class="d-flex p-2" v-if="reliefCamp.timeOfUpdate">
      <i class="material-icons px-2">access_time</i>
      {{reliefCamp.timeOfUpdate}}
    </div>
    <div class="d-flex p-2" v-if="reliefCamp.strength">
      <i class="material-icons px-2">people</i>
      {{reliefCamp.strength}}
    </div>
    <div class="d-flex p-2" v-if="reliefCamp.excess">
      <i class="material-icons px-2">more</i>
      {{reliefCamp.excess}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReliefCamp',
  data() {
    return {};
  },
  props: {
    reliefCamp: Object,
  },
};
</script>

<style scoped lang="scss">
.reliefCamp {
  margin-top: 1em;
  padding: 1em;
  box-sizing: border-box;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
