<template>
  <div class="navbar-left">
    <a href="#" @click.prevent="$emit('navbar-toggle-event')">
      <i class="material-icons" :class="{'black-text': !$store.state.darkTheme, 'dark-green': $store.state.darkTheme}">dehaze</i>
    </a>
    <span :class="{'black-text': !$store.state.darkTheme, 'dark-green': $store.state.darkTheme}">{{ datetime }}</span>
  </div>
  <ul class="right hide-on-small-and-down">
    <li>
      <PageThemes></PageThemes>
    </li>
    <li>
      <a class="dropdown-trigger" :class="{'black-text': !$store.state.darkTheme, 'dark-green': $store.state.darkTheme}"
         href="#"
         data-target="dropdown" ref="dropdownTrigger">
        USER NAME
        <i class="material-icons right">arrow_drop_down</i>
      </a>
      <ul id='dropdown' class='dropdown-content'>
        <li>
          <router-link :to="{name: 'userProfile'}" :class="{'black-text': !$store.state.darkTheme, 'dark-green': $store.state.darkTheme}">
            <i class="material-icons">account_circle</i>Профиль</router-link>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li @click.prevent="logout">
          <a href="#" :class="{'black-text': !$store.state.darkTheme, 'dark-green': $store.state.darkTheme}">
            <i class="material-icons">assignment_return</i>Выйти
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import M from 'materialize-css'
import PageThemes from "@/components/UI/PageThemes.vue";

export default {
  name: "CategoriesNavbar",
  components: {PageThemes},
  emits: ["navbar-toggle-event"],
  data() {
    return {
      datetime: null
    }
  },
  mounted() {
    let datetime = new Date()
    let day = datetime.getDate()
    let month = String(datetime.getMonth() + 1)
    let year = datetime.getFullYear()
    datetime = `${day}.${month.length > 1 ? month : '0' + month}.${year} г.`
    this.datetime = datetime
    M.Dropdown.init(this.$refs.dropdownTrigger, {constrainWidth: true})
  },
  methods: {
    logout() {
      this.$router.push('/login?action=logoutSuccess')
    }
  }
}
</script>
