<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <slot name="base-navbar-content"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BaseNavbar"
}
</script>

<style scoped>

</style>