<template>
  <div>
    <button @click="go">gooo</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const go = () => {
  router.push("/dashboard");
};
</script>
