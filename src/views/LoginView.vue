<template>
  <EmptyBackground>
    <template #layout-content>
      <LoginForm/>
    </template>
  </EmptyBackground>
</template>

<script>

import EmptyBackground from "@/components/UI/EmptyBackground.vue";
import LoginForm from "@/components/UI/forms/LoginForm.vue";

export default {
  name: "LoginPage",
  components: {LoginForm, EmptyBackground}
}
</script>
