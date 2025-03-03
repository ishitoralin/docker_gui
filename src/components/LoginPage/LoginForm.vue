<template>
  <div class="card-container">
    <LoginFormTitle :fields="titleFields"></LoginFormTitle>
    <LoginFormInput
      v-for="(item, index) in inputFieldsGroup"
      :key="index"
      :fields="item"
    ></LoginFormInput>
    <div class="options-container">
      <div class="remember-container">
        <input
          class="form-check-input mt-0 me-1"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
        />
        <span>Remember me</span>
      </div>
      <div>
        <router-link
          class="router-link-style"
          to=""
          @click.prevent="handleRouterSwitch('/forgot')"
          >Forget password?</router-link
        >
      </div>
    </div>
    <LoginFormButton
      :fields="btnFields"
      @handleClick="handleClick"
    ></LoginFormButton>
    <div class="signup-container">
      <span class="me-1">Create a new account?</span>
      <router-link
        class="router-link-style"
        to=""
        @click.prevent="handleRouterSwitch('/signup')"
        >Sign up</router-link
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
  title: "Login",
});

const inputFieldsGroup = ref([
  {
    type: "text",
    placeholder: "User",
    icon: "bi-person",
  },
  {
    type: "password",
    placeholder: "Password",
    icon: "bi-lock",
  },
]);

const btnFields = ref({
  key: "login",
  text: "Login",
});

const handleClick = (key) => {
  router.push("/dashboard");
};
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