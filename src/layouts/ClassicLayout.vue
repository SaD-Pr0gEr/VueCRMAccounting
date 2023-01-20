<template>
  <div class="app-main-layout" :class="{'bg-dark-material dark-pink': $store.state.darkTheme}">
    <BaseNavbar>
      <template #base-navbar-content>
        <CategoriesNavbar @navbar-toggle-event="navbarOpen = !navbarOpen"/>
      </template>
    </BaseNavbar>
    <CategoriesSideNav :sidenavLinks="sidebarLinks" :navbarOpen="navbarOpen"/>
    <main :class="`app-content ${wideWindowNavbar}`">
      <div class="app-page">
        <slot></slot>
      </div>
    </main>
    <FixedAddBtn />
  </div>
</template>

<script>
import BaseNavbar from "@/components/UI/BaseNavbar.vue";
import CategoriesNavbar from "@/components/CategoriesNavbar.vue";
import CategoriesSideNav from "@/components/CategoriesSideNav.vue";
import {sidebarLinks} from "@/router/linksData";
import FixedAddBtn from "@/components/UI/Buttons/FixedAddBtn.vue";

export default {
  name: "ClassicLayout",
  components: {FixedAddBtn, CategoriesSideNav, CategoriesNavbar, BaseNavbar},
  data() {
    return {
      sidebarLinks: sidebarLinks,
      navbarOpen: true
    }
  },
  computed: {
    wideWindowNavbar() {
      return this.navbarOpen ? '' : 'full'
    }
  }
}
</script>

<style scoped>

</style>