<template>
  <div>
    <CompTemplate></CompTemplate>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CompTemplate from "@/components/CompTemplate.vue";
</script>

<style scoped>
.editor {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  background-color: white;
}
</style>
