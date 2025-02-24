<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-if="options?.order">#</th>
          <th v-for="(item, index) in fields" :key="index">
            {{ item.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in showItems" :key="index">
          <td v-for="(element, i) in fields" :key="i">
            {{ item[element["key"]] }}
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComp
      v-model:currentPage="currentPage"
      v-model:totalPages="totalPages"
    ></PaginationComp>
    <DropdownsComp
      :totalRows="totalRows"
      :dropdownList="options.dropdown"
      v-model:perPage="perPage"
      v-model:currentPage="currentPage"
    ></DropdownsComp>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import PaginationComp from "./PaginationComp.vue";
import DropdownsComp from "./DropdownsComp.vue";
const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
  },
});

const perPage = ref(props.fields.perPage || 10);
const currentPage = ref(props.options.currentPage || 1);

const totalRows = computed(() => {
  return props.options.totalRows || props.items.length;
});

const totalPages = computed(() => {
  return Math.ceil(props.items.length / perPage.value);
});

const showItems = computed(() => {
  if (!props.items || !Array.isArray(props.items)) {
    return [];
  }

  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  const rows = props.items.slice(start, end);
  return rows;
});
</script>

<style scoped>
</style>