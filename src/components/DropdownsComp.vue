<template>
  <div class="dropdown-center">
    <button
      class="btn dropdown-toggle custom-dropdown-button-style"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ target }}
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li v-for="(item, index) in dropdownList" :key="index">
        <a class="dropdown-item" @click="handleChangePerPage(item.text)">
          {{ item.text || "-" }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineModel, defineProps } from "vue";
const props = defineProps({
  totalRows: {
    type: Number,
    required: true,
  },
  dropdownList: {
    type: Array,
    required: true,
  },
});
const perPage = defineModel("perPage");
const currentPage = defineModel("currentPage");

const target = ref(props.dropdownList[0].text);

const handleChangePerPage = (key) => {
  currentPage.value = 1;
  target.value = key;
  if (typeof key === "string") {
    perPage.value = props.totalRows;
  } else if (key >= props.totalRows) {
    perPage.value = props.totalRows;
  } else {
    perPage.value = key;
  }
};
</script>
<style scoped>
.custom-dropdown-button-style {
  color: var(--color-white);
}
</style>