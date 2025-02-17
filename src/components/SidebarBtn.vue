<template>
  <div class="sidebarContainer">
    <div v-for="(item, index) in fields" :key="index" class="btnContainer">
      <div class="iconContainer">
        <i :class="['bi', item.icon]"></i>
      </div>
      <div class="fontContainer">{{ item.label }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped>
.sidebarContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btnContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 75px;
  width: 75px;
  color: white;
  transition: box-shadow 0.3s ease, color 0.3s ease;
}

.btnContainer:hover {
  box-shadow: var(--box-shadow-wood-light);
  color: var(--color-wood);
}

.iconContainer {
  font-size: 24px;
}

.fontContainer {
  font-size: 14px;
}
</style>