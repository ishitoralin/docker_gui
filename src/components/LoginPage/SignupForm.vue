<template>
  <div class="card-container">
    <LoginFormTitle :fields="titleFields"></LoginFormTitle>
    <LoginFormInput
      v-for="(item, index) in inputFieldsGroup"
      :key="index"
      :fields="item"
    ></LoginFormInput>

    <LoginFormButton :fields="btnFields"></LoginFormButton>
    <div class="signup-container">
      <span class="me-1">Already have an account?</span>
      <router-link
        class="router-link-style"
        to=""
        @click.prevent="handleRouterSwitch('/')"
        >Login</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginFormInput from "@/components/LoginPage/LoginFormInput.vue";
import LoginFormButton from "@/components/LoginPage/LoginFormButton.vue";
import LoginFormTitle from "@/components/LoginPage/LoginFormTitle.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const handleRouterSwitch = (path) => {
  router.push(path);
};

const titleFields = ref({
  title: "Sign Up",
});

const inputFieldsGroup = ref([
  {
    type: "text",
    placeholder: "User",
    icon: "bi-person",
  },
  {
    type: "text",
    placeholder: "E-mail",
    icon: "bi-envelope",
  },
  {
    type: "password",
    placeholder: "Password",
    icon: "bi-lock",
  },
  {
    type: "password",
    placeholder: "Confirm password",
    icon: "bi-lock",
  },
]);

const btnFields = ref({
  text: "Send",
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 25px 40px;
  /* height: 22rem; */
  width: 26rem;

  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  color: var(--color-white);
  border-radius: 20px;

  background-color: rgba(50, 50, 50, 0.5);
}

.options-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-size: var(--font-m);
}

.remember-container {
  display: flex;
  align-items: center;
  font-size: var(--font-lg);
}

.submit-container {
  font-size: var(--font-m);
  margin: 10px 0;
}

.signup-container {
  font-size: var(--font-m);
}

.router-link-style {
  color: var(--color-cornflowerblue);
}
</style>