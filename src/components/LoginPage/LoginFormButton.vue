<template>
  <div class="main-container">
    <button class="btn-container" @click="handleClick">
      {{ fields.text || "Login" }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  fields: {
    type: Object,
  },
});
const emit = defineEmits(["handleClick"]);
const handleClick = () => {
  emit("handleClick", props.fields.key);
};
</script>

<style scoped>
.main-container {
  margin: 15px 0;
  height: 30px;
  width: 100%;
}

.btn-container {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  color: var(--color-dark);
  font-size: var(--font-m);
  font-weight: bold;
  transition: 0.2s ease;
}

.btn-container:hover {
  background-color: var(--color-wood);
}

.btn-container:active {
  background-color: var(--color-wood-dark);
}
</style>