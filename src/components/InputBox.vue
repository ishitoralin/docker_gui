<template>
  <div class="custom-container">
    <div v-if="fields['title']" class="custom-title-container">
      <slot :name="fields['title']">{{ fields["title"] }}</slot>
    </div>

    <div
      v-if="fields['type'] !== 'dropdown'"
      class="custom-input-group"
      :style="{
        width: fields['title'] ? '80%' : '95%',
      }"
    >
      <div class="custom-inputbox-container">
        <input
          v-model="value"
          :type="fields['type']"
          class="form-control"
          :placeholder="fields['placeholder']"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>

      <div :class="[fields['tail'] ? 'custom-tail-container' : '']">
        <slot :name="fields['title']">{{ fields["title"] }}</slot>
      </div>
    </div>

    <div
      v-if="fields['type'] === 'dropdown'"
      class="custom-form-select-container"
    >
      <select class="form-select" v-model="value">
        <option v-for="(item, index) in items" :key="index" :value="item.value">
          {{ item.label }}
        </option>
      </select>
      <div :class="[fields['tail'] ? 'custom-tail-container' : '']">
        <slot :name="fields['title']">{{ fields["title"] }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineModel, defineProps } from "vue";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import InputBox from "@/components/InputBox.vue";
import { imagesPullFields } from "@/init/fields";
const props = defineProps({
  fields: {
    type: Object,
    required: true,
    default: () => {
      return {
        title: "",
        type: "text", // text, password, dropdown
        placeholder: "placeholder",
      };
    },
  },
  items: {
    type: Array,
  },
});

const value = defineModel("value");
</script>
<style scoped>
.custom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-inputbox-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 0;
  white-space: nowrap;
  gap: 1rem;
}

.custom-title-container {
  padding: 0 1rem 0 0;
  white-space: nowrap;
  min-width: 5rem;
}

.custom-input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 0;
}

.input-group {
  padding: 0 1rem 0 0;
  white-space: nowrap;
}

.custom-form-select-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 0 1rem 0 0;
  white-space: nowrap;
  gap: 1rem;
}

.form-control {
  width: 100%;
  min-width: 15rem;
  white-space: "nowrap";
}

.form-select {
  width: 100%;
  min-width: 15rem;
}

.custom-tail-container {
  min-width: 5rem;
}
</style>