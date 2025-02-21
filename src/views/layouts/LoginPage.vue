<template>
  <div>
    <button @click="go">gooo</button>
    {{ countTimer }}
    <form class="row g-3" @submit.prevent="login">
      <div class="col-auto">
        <input
          v-model="loginInfo.name"
          type="text"
          class="form-control"
          placeholder="email"
        />
      </div>

      <div class="col-auto">
        <input
          v-model="loginInfo.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>

      <div class="col-auto">
        <input
          v-model="loginInfo.otp"
          type="otp"
          class="form-control"
          placeholder="OTP"
        />
      </div>

      <div class="col-auto">
        <button class="btn btn-primary mb-3" type="submit">Send</button>
      </div>
    </form>

    <div class="showPhoto">
      <img v-if="otpImageUrl" :src="otpImageUrl" :key="otpImageUrl" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const go = () => {
  router.push("/dashboard");
};
const otpImageUrl = ref("");
const timer = ref(null);

const loginInfo = ref({
  name: "",
  password: "",
  id: "",
  otp: "",
});

const login = () => {
  fetchLogin();
};

const fetchLogin = async () => {
  try {
    const url = "http://10.15.1.89:8000/login";
    loginInfo.value["id"] = currentId.value;
    const response = await axios.post(url, loginInfo.value);
    if (response.status === 200) {
      console.log(response.data);
      fetchGetOtp();
      window.alert(response.data.result);
    }
  } catch (error) {
    console.log(error);
    window.alert(error.response.data.detail);
    fetchGetOtp();
  }
};

const countTimer = ref(0);
const interval = ref(null);
const setTimer = () => {
  countTimer.value = 29;
  interval.value = setInterval(() => {
    if (countTimer.value > 0) {
      countTimer.value--;
    } else {
      clearInterval(interval.value);
    }
  }, 1000);
};
const currentId = ref(0);
const fetchGetOtp = async () => {
  otpImageUrl.value = "";
  try {
    const url = "http://10.15.1.89:8000/hotp";
    const response = await axios.get(url);
    const data = response.data;
    if (response.status === 200) {
      // setTimer();
      const time = new Date().getTime() / 1000;
      currentId.value = data.id;
      console.log(data.id);
      otpImageUrl.value = `http://10.15.1.89:8000${data.save_path}?t=${time}`;
    }
  } catch (error) {
    console.log(error);
  }
};

watch(
  () => countTimer.value,
  (newValue) => {
    if (newValue === 0) {
      clearInterval(interval.value);
      fetchGetOtp();
    }
  }
);

onMounted(() => {
  fetchGetOtp();
});

onUnmounted(() => {
  if (interval.value) clearInterval(interval.value);
});
</script>
<style scoped>
.showPhoto {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>