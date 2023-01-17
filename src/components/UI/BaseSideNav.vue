<template>
  <ul :class="`sidenav ${sidenavExtraClasses}`">
    <slot name="sidenav-content"></slot>
  </ul>
</template>

<script>
export default {
  name: "BaseSideNavbar",
  props: ["sidenavExtraClasses"]
}
</script>

<style scoped>

</style>