<template>
  <div>
    <h1>{{ router.path }}</h1>
    <!-- <CompTemplate></CompTemplate> -->
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
// import { CompTemplate } from "@/components/CompTemplate.vue";
const router = useRoute();
</script>
