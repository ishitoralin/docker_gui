<template>
  <div
    :style="{
      width: fields.width || '100%',
      height: fields.height || '100%',
      maxWidth: fields.maxWidth || '100%',
      minWidth: fields.maxWidth || '100%',
    }"
  >
    <div class="card">
      <div class="card-header d-flex">
        <div v-if="fields.icon" class="holder-icon me-3">
          <i :class="['icon', 'bi', fields.icon]"></i>
        </div>
        <div v-if="fields.title" class="holder-title">
          <slot name="title">{{ fields.title }}</slot>
        </div>
        <div v-if="fields.tail" class="holder-tail">
          <slot name="tail">{{ fields.tail }}</slot>
        </div>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>

      <div class="card-footer">
        <slot name="foot"></slot>
      </div>
    </div>
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
.card {
  color: var(--color-white);
  background-color: var(--color-border);
  border: 1px solid var(--color-border);
  transition: 0.2s ease;
  height: 100%;
}

.card:hover {
  border: 1px solid var(--color-wood);
}

.card-header {
  border: none;
}

.card-body {
  white-space: nowrap;
  overflow-x: auto;
}

.card-footer {
  border: none;
  background-color: var(--color-border);
}

.icon {
  font-size: var(--font-l);
}

.holder-icon {
  margin: 10px 0;
  min-width: var(--font-3l);
  min-height: var(--font-3l);
  max-width: var(--font-3l);
  max-height: var(--font-3l);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark);
  color: var(--color-lightblue);
}

.holder-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-l);
}

.holder-tail {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}
</style>