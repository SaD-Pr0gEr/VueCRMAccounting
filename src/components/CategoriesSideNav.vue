<template>
  <BaseSideNav :sidenav-extra-classes="`app-sidenav open`">
    <template #sidenav-content>
      <li>
        <router-link class="waves-effect waves-orange pointer" to="/">Главная(Счёт)</router-link>
      </li>
      <li>
        <router-link class="waves-effect waves-orange pointer" to="/categories">Категории</router-link>
      </li>
      <li>
        <router-link class="waves-effect waves-orange pointer" to="/history">История</router-link>
      </li>
      <li>
        <router-link class="waves-effect waves-orange pointer" to="/planning">Планирование</router-link>
      </li>
      <li>
        <router-link class="waves-effect waves-orange pointer" to="/record/new">Новая запись</router-link>
      </li>
    </template>
  </BaseSideNav>
</template>

<script>
import BaseSideNav from "@/components/UI/BaseSideNav.vue";

export default {
  name: "CategoriesSideNav",
  components: {BaseSideNav}
}
</script>

<style scoped>

</style>