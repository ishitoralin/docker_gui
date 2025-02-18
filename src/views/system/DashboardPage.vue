<template>
  <div>
    <h1 class="title">{{ router.name }}</h1>
    <CompTemplate></CompTemplate>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import CompTemplate from "@/components/CompTemplate.vue";
const router = useRoute();
</script>
<style scoped>
.title {
  color: var(--color-white);
  font-size: 20px;
}
</style>