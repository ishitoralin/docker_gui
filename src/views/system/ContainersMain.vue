<template>
  <div>
    <h1>{{ router.path }}</h1>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
</script>
