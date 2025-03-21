<template>
  <div>
    <table class="table">
      <tbody class="custom-tbody">
        <tr v-for="(item, index) in showItems" :key="index">
          <td>
            <slot
              :name="`head(${item['swap'] || item['label']})`"
              :row="{ key: item['key'], item: item, data: showItems }"
            >
              {{ item["label"] || item["key"] }}
            </slot>
          </td>
          <td>
            <slot
              :name="`cell(${item['swap']}||${item['label']})`"
              :row="{ key: item['value'], item: item, data: showItems }"
            >
              {{ item["value"] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineModel } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  },
});

const options = defineModel("options", {
  required: false,
  default: () => ({ perPage: 10, currentPage: 1, rows: 0 }),
});

const totalPages = computed(() => {
  return Math.ceil(options.value["rows"] / options.value["perPage"]) || 1;
});

const showItems = computed(() => {
  if (!options) {
    return props.items;
  }

  if (!props.items || !Array.isArray(props.items)) {
    return [];
  }

  const start = (options.value["currentPage"] - 1) * options.value["perPage"];
  const end = start + options.value["perPage"];
  const rows = props.items.slice(start, end);
  return rows;
});
</script>

<style scoped>
</style>