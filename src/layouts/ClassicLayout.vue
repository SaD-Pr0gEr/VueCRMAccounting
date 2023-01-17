<template>
  <div class="app-main-layout">
    <BaseNavbar>
      <template #base-navbar-content>
        <CategoriesNavbar/>
      </template>
    </BaseNavbar>
    <CategoriesSideNav/>
    <main class="app-content">
      <div class="app-page">
        <slot></slot>
      </div>
    </main>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import BaseNavbar from "@/components/UI/BaseNavbar.vue";
import CategoriesNavbar from "@/components/CategoriesNavbar.vue";
import CategoriesSideNav from "@/components/CategoriesSideNav.vue";

export default {
  name: "ClassicLayout",
  components: {CategoriesSideNav, CategoriesNavbar, BaseNavbar}
}
</script>

<style scoped>

</style>