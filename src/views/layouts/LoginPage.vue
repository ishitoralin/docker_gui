<template>
  <div class="login-container">
    <SignupForm v-if="route.path === '/signup'"></SignupForm>
    <ForgotForm v-else-if="route.path === '/forgot'"></ForgotForm>
    <LoginForm v-else></LoginForm>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import LoginForm from "@/components/LoginPage/LoginForm.vue";
import ForgotForm from "@/components/LoginPage/ForgotForm.vue";
import SignupForm from "@/components/LoginPage/SignupForm.vue";
const route = useRoute();
</script>

<style scoped>
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/login.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.login-container > * {
  z-index: 2;
}
</style>