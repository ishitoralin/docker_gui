<template>
  <button
    :class="[
      'btn',
      'custom-basic-button-style',
      {
        'custom-button-style-normal':
          !fields['style'] || fields['style'] === 'normal',

        'custom-button-style-danger': fields['style'] === 'danger',
        'custom-button-style-safe': fields['style'] === 'safe',
      },
    ]"
    :style="{ width: fields['width'] || '4.5rem' }"
    :disabled="disabled"
  >
    <i v-if="fields['icon']" :class="['bi', fields['icon']]"></i>
    {{ fields["title"] || fields["key"] }}
  </button>
</template>

<script setup>
import { defineProps, defineModel } from "vue";
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

const disabled = defineModel("disabled", {
  type: Boolean,
  default: () => false,
});
</script>
<style scoped>
.btn {
  white-space: nowrap;
}

.custom-inputbox-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-basic-button-style {
  padding: 3px 5px;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s;
  font-weight: bold;
  border: 2px solid;
  font-size: var(--font-s);
}

.custom-button-style-normal {
  border-color: var(--color-wood);
  color: var(--color-wood);
  transition: all 0.3s;
}

.custom-button-style-normal:hover {
  border-color: var(--color-wood-light);
  color: var(--color-wood-light);
  transition: all 0.3s;
  text-shadow: var(--text-shadow-wood);
}

.custom-button-style-normal:active {
  border-color: var(--color-wood-dark);
  color: var(--color-wood-dark);
}

.custom-button-style-danger {
  border-color: var(--color-deeppink);
  color: var(--color-deeppink);
  transition: all 0.3s;
}

.custom-button-style-danger:hover {
  border-color: var(--color-deeppink-light);
  color: var(--color-deeppink-light);
  transition: all 0.3s;
  text-shadow: var(--text-shadow-deeppink);
}

.custom-button-style-danger:active {
  border-color: var(--color-deeppink-dark);
  color: var(--color-deeppink-dark);
}

.custom-button-style-safe {
  border-color: var(--color-aquamarine);
  color: var(--color-aquamarine);
  transition: all 0.3s;
}

.custom-button-style-safe:hover {
  border-color: var(--color-aquamarine-light);
  color: var(--color-aquamarine-light);
  transition: all 0.3s;
  text-shadow: var(--text-shadow-aquamarine);
}

.custom-button-style-safe:active {
  border-color: var(--color-aquamarine-dark);
  color: var(--color-aquamarine-dark);
}
</style>