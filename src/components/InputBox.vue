<template>
  <div class="custom-inputbox-container mb-3">
    <div v-if="fields['title']" style="min-width: 15%">
      {{ fields["title"] }}
    </div>
    <div
      v-if="fields['type'] !== 'dropdown'"
      class="input-group"
      style="width: 80%"
    >
      <input
        v-model="value"
        :type="fields['type']"
        class="form-control"
        :placeholder="fields['placeholder']"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>

    <div v-if="fields['type'] === 'dropdown'" style="width: 80%">
      <select class="form-select" v-model="value">
        <option v-for="(item, index) in items" :key="index" :value="item.value">
          {{ item.label }}
        </option>
      </select>
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
.custom-inputbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>