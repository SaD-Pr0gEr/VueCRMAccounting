<template>
  <EmptyBackground>
    <template #layout-content>
      <RegisterForm></RegisterForm>
    </template>
  </EmptyBackground>
</template>

<script>

import EmptyBackground from "@/components/UI/EmptyBackground.vue";
import RegisterForm from "@/components/UI/forms/RegisterForm.vue";

export default {
  name: "RegisterPage",
  components: {RegisterForm, EmptyBackground}
}
</script>
