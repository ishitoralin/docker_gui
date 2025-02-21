<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-if="options?.order">#</th>
          <th v-for="(item, index) in fields" :key="index" scope="col">
            {{ item.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(element, i) in fields" :key="i">
            {{ item[element["key"]] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
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
</script>

<style scoped>
</style>