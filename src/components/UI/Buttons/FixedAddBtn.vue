<template>
  <div class="fixed-action-btn">
    <router-link :to="{name: 'newRecord'}" class="btn-floating btn-large blue">
      <i class="large material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FixedAddBtn"
}
</script>

<style scoped>

</style>