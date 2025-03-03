<template>
  <div class="main-container">
    <div class="input-wrapper">
      <input
        class="input-main"
        :type="fields.type"
        :placeholder="fields.placeholder"
      />
      <i v-if="fields.icon" :class="['bi', fields.icon, 'custom-icon']"></i>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fields: {
    type: Object,
    required: true,
    default: () => {
      return {
        type: "text",
        placeholder: "placeholder",
        icon: "",
      };
    },
  },
});
</script>

<style scoped>
.main-container {
  margin: 15px 0;
  height: 35px;
  width: 100%;
}

.input-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.input-main {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  color: var(--color-white);
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 0 35px 0 15px;
}

.input-main:focus-visible {
  border: 2px solid rgba(255, 255, 255, 0.8);
  outline: none;
}
.custom-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
}
</style>
