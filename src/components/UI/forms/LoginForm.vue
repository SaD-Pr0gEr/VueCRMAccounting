<template>
  <form class="card auth-card" @submit.prevent="loginSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="userEmail"
            @blur="validateEmail"
            :class="{invalid: defineErrorClass(v$.userEmail)}">
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="v$.userEmail.$errors.length > 0">
          {{ v$.userEmail.$errors[0].$message }}
        </small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="userPassword"
            @blur="validatePassword"
            :class="{invalid: defineErrorClass(v$.userPassword)}"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.userPassword.$errors.length > 0">
          {{ v$.userPassword.$errors[0].$message }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            :class="{'disabledButton': hasFormError}"
            type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, minLength, required} from "@vuelidate/validators";
import M from "materialize-css"
import useVuelidate from "@vuelidate/core";
import {loginUser} from "@/firebase/auth";

export default {
  name: "LoginForm",
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
      hasFormError: false,
      response: null
    }
  },
  validations() {
    return {
      userEmail: {email, required},
      userPassword: {required, minLength: minLength(6)},
    }
  },
  methods: {
    async loginSubmit() {
      this.v$.$validate()
      if (this.v$.$invalid) {
        this.hasFormError = true
        return 0
      }
      this.response = await loginUser(this.userEmail, this.userPassword)
      if (this.response.success) {
        return this.$router.push('/?action=loginSuccess')
      } else {
        M.toast({html: this.response.message})
      }
    },
    validateEmail() {
      this.v$.userEmail.$touch()
      this.hasFormError = this.v$.userEmail.$invalid
    },
    validatePassword() {
      this.v$.userPassword.$touch()
      this.hasFormError = this.v$.userPassword.$invalid
    },
    defineErrorClass(VueElem) {
      if (!VueElem.$dirty) {
        return ''
      } else if (VueElem.$dirty && VueElem.$invalid) {
        return 'invalid'
      } else {
        return ''
      }
    }
  },
  mounted() {
    switch (this.$route.query.action) {
      case "registerSuccess":
        this.$toaster('Вы успешно зарегистрировались! Теперь войдите в свой аккаунт');
        break
      case "logoutSuccess":
        this.$toaster('Вы успешно вышли из системы');
        break
    }
  }
}
</script>
<style>
.disabledButton {
  cursor: not-allowed;
}
</style>
