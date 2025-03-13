<template>
  <div>
    <button class="btn custom-button-style" :disabled="fields['isDisabled']">
      <i v-if="fields['icon']" :class="['bi', fields['icon']]"></i>
      {{ fields["title"] }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
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
        title: "Button",
        type: "text", // text, password, dropdown
        placeholder: "placeholder",
      };
    },
  },
});
</script>
<style scoped>
.custom-inputbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-button-style {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;
  /* border: 2px solid var(--color-lightblue); */
  border: 2px solid;
  border-color: aquamarine;
  color: aquamarine;
  transition: all 0.3s;
  font-weight: bold;
}

.custom-button-style:hover {
  border: 2px solid var(--color-wood);
  color: var(--color-wood);
  transition: all 0.3s;
  text-shadow: var(--text-shadow-wood);
}

.custom-button-style:active {
  border: 2px solid var(--color-wood-active);
  color: var(--color-wood-active);
}
</style>