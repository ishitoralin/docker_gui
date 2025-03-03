<template>
  <div class="card-title">
    <h1>{{ fields.title }}</h1>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fields: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card-title {
  margin-bottom: 10px;
}
</style>