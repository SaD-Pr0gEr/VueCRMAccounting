<template>
  <nav class="navbar" :class="{
    'orange lighten-1': !$store.state.darkTheme, 'bg-dark': $store.state.darkTheme}">
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
