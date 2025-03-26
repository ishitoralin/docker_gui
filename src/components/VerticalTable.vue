<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-if="options?.order">#</th>
          <th v-for="(item, index) in fields" :key="index">
            <slot
              :name="`head(${item['key']})`"
              :key="item['key']"
              :item="item"
              :index="index"
              :data="showItems"
              >{{ item["label"] }}</slot
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in showItems" :key="index">
          <td
            v-for="(element, i) in fields"
            :key="i"
            :style="{ width: element.options?.width || '' }"
          >
            <slot
              :name="`cell(${element['key']})`"
              :key="element['key']"
              :item="item"
              :index="index"
              :data="showItems"
            >
              {{ item[element["key"]] }}
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
  fields: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  },
  // options: {
  //   type: Object,
  //   required: true,
  //   default: () => {
  //     return {
  //       perPage: 10,
  //       currentPage: 1,
  //       rows: 0,
  //       dropdown: [],
  //     };
  //   },
  // },
});

const options = defineModel("options");

const totalPages = computed(() => {
  return Math.ceil(options.value["rows"] / options.value["perPage"]) || 1;
});

const showItems = computed(() => {
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