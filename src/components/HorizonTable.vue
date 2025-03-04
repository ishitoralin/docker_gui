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

    <div class="d-flex mt-3 justify-content-center align-items-center">
      <PaginationComp
        v-if="options.paginationFunc"
        v-model:currentPage="currentPage"
        v-model:totalPages="totalPages"
        class="ms-auto me-auto"
      ></PaginationComp>

      <DropdownsComp
        v-if="options.dropdown.length"
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
  items: {
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  },
  options: {
    type: Object,
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
/* .custom-tbody {
  white-space: nowrap;
  overflow: auto;
} */
</style>