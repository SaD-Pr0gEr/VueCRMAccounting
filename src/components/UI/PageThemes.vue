<template>
  <a class="material-icons theme-icon black-text" v-if="!$store.state.darkTheme" @click="changeTheme">brightness_high</a>
  <a class="material-icons theme-icon" v-else @click="changeTheme">brightness_2</a>
</template>

<script>
export default {
  name: "PageThemes",
  data() {
    return {
    }
  },
  methods: {
    changeTheme() {
      this.$store.commit("switchTheme")
    }
  }
}
</script>

<style scoped>
.theme-icon {
  font-size: 30px;
  vertical-align:middle
}

</style>
