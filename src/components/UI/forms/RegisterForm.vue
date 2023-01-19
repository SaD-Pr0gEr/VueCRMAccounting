<template>
  <form class="card auth-card" @submit.prevent="registerSubmit">
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
      <div class="input-field">
        <input
            id="username"
            type="text"
            v-model.trim="userName"
            @blur="validateUsername"
            :class="{invalid: defineErrorClass(v$.userName)}"
        >
        <label for="password">Ваше имя</label>
        <small class="helper-text invalid" v-if="v$.userName.$errors.length > 0">
          {{ v$.userName.$errors[0].$message }}
        </small>
      </div>
<!--      <p>-->
<!--        <label>-->
<!--          <input type="checkbox"/>-->
<!--          <span>С правилами согласен</span>-->
<!--        </label>-->
<!--      </p>-->
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            :class="{'disabledButton': hasFormError}"
            type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";

export default {
  name: "RegisterForm",
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
      userName: '',
      hasFormError: false
    }
  },
  validations() {
    return {
      userEmail: {email, required},
      userPassword: {required, minLength: minLength(6)},
      userName: {required}
    }
  },
  methods: {
    registerSubmit() {
      this.v$.$validate()
      if (this.v$.$invalid) {
        this.hasFormError = true
        return 0
      }
      return this.$router.push('/login')
    },
    validateEmail() {
      this.v$.userEmail.$touch()
      this.hasFormError = this.v$.userEmail.$invalid
    },
    validatePassword() {
      this.v$.userPassword.$touch()
      this.hasFormError = this.v$.userPassword.$invalid
    },
    validateUsername() {
      this.v$.userName.$touch()
      this.hasFormError = this.v$.userName.$invalid
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
  }
}
</script>
