<template>
  <div class="resource">
    <div class="text-muted pb-2 d-flex">
      {{resource.resourcesAvailableWithThem}}
      <i class="material-icons px-2" v-if="resource.verifiedOrNot=='verified'">verified_user</i>
    </div>
    <div class="d-flex p-2">
      <i class="material-icons px-2">account_circle</i>
      {{resource.nameOfPeople}}
      {{resource.contactDetails}}
    </div>
    <div class="d-flex p-2" v-if="resource['location(rough)']">
      <i class="material-icons px-2">location_on</i>
      {{resource['location(rough)']}}
    </div>
    <div class="d-flex p-2" v-if="resource.comments">
      <i class="material-icons px-2">comment</i>
      {{resource.comments}}
    </div>
    <div class="d-flex p-2" v-if="resource.availability">
      <i class="material-icons px-2">info</i>
      {{resource.availability}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resource',
  data() {
    return {};
  },
  props: {
    resource: Object,
  },
};
</script>

<style scoped lang="scss">
.resource {
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
