<template>
  <BaseSideNav :sidenav-extra-classes="`app-sidenav open`">
    <template #sidenav-content>
      <router-link
          :to="link.path"
          v-for="(link, index) in sidenavLinks" :key="index"
          active-class="active"
          custom v-slot="{ navigate }"
      >
        <li class="active" v-if="this.$route.path === link.path">
          <a class="waves-effect waves-orange pointer" @click="navigate">{{ link.meta.displayName }}</a>
        </li>
        <li v-else>
          <a class="waves-effect waves-orange pointer" @click="navigate">{{ link.meta.displayName }}</a>
        </li>
      </router-link>
    </template>
  </BaseSideNav>
</template>

<script>
import BaseSideNav from "@/components/UI/BaseSideNav.vue";

export default {
  name: "CategoriesSideNav",
  components: {BaseSideNav},
  props: ["sidenavLinks"]
}
</script>
