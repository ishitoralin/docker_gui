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
      <li v-for="(item, index) in options['dropdown']" :key="index">
        <a class="dropdown-item" @click="handleChangePerPage(item.text)">
          {{ item.text || "-" }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineModel, defineProps, computed } from "vue";
const options = defineModel("options");

const totalPages = computed(() => {
  return Math.ceil(options.value["rows"] / options.value["perPage"]) || 1;
});

const target = ref(options.value["dropdown"][0]["text"]);

const handleChangePerPage = (key) => {
  options.value["currentPage"] = 1;
  target.value = key;
  if (typeof key === "string") {
    options.value["perPage"] = options.value["rows"];
  } else if (key >= options.value["rows"]) {
    options.value["perPage"] = options.value["rows"];
  } else {
    options.value["perPage"] = key;
  }
};
</script>
<style scoped>
.custom-dropdown-button-style {
  color: var(--color-white);
}
</style>