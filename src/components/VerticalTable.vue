<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-if="options?.order">#</th>
          <th v-for="(item, index) in fields" :key="index">
            <slot
              :name="`head(${item['label']})`"
              :row="{ key: item['key'], item: item, data: showItems }"
              >{{ item.label }}</slot
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in showItems" :key="index">
          <td v-for="(element, i) in fields" :key="i">
            <slot
              :name="`cell(${element['key']})`"
              :row="{
                key: element,
                item: item[element['key']],
                data: showItems,
              }"
            >
              {{ item[element["key"]] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex mt-3 justify-content-center align-items-center">
      <PaginationComp
        v-if="options.pagination"
        v-model:currentPage="currentPage"
        v-model:totalPages="totalPages"
        class="ms-auto me-auto"
      ></PaginationComp>

      <DropdownsComp
        v-if="options.dropdown?.length"
        :totalRows="totalRows"
        :dropdownList="options.dropdown"
        v-model:perPage="perPage"
        v-model:currentPage="currentPage"
      ></DropdownsComp>
    </div>
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
    default: () => {
      return [];
    },
  },
  options: {
    type: Object,
    required: true,
    default: () => {
      return {
        perPage: 10,
        pagination: false,
        currentPage: 1,
        dropdown: [],
      };
    },
  },
});

const perPage = ref(props.options?.perPage || 10);
const currentPage = ref(props.options?.currentPage || 1);

const totalRows = computed(() => {
  return props.options?.totalRows || props.items.length;
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
/* .table {
  white-space: nowrap;
} */
</style>