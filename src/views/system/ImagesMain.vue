<template>
  <div>
    <CompTemplate :fields="fields">
      <template #body>
        <HorizonTable
          :fields="tableFields"
          :items="tableItems"
          :options="options"
        ></HorizonTable>
      </template>
    </CompTemplate>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import CompTemplate from "@/components/CompTemplate.vue";
import HorizonTable from "@/components/HorizonTable.vue";
import DockerAPI from "@/models/dockerApi";
const fields = ref({
  icon: "bi-house",
  title: "Dashboard",
  tail: "hello",
});

const options = ref({
  perPage: 10,
  paginationFunc: true,
  currentPage: 1,
  dropdown: [
    { key: 10, text: 10 },
    { key: 20, text: 20 },
    { key: 30, text: 30 },
    { key: 40, text: 40 },
    { key: 50, text: 50 },
    { key: "all", text: "All" },
  ],
});

const tableFields = ref([
  { key: "name", label: "name" },
  { key: "age", label: "age" },
  {
    key: "color",
    label: "color",
  },
]);

const tableItems = ref([
  { name: "neko1", age: 19, color: "white1" },
  { name: "neko3", age: 139, color: "white3" },
  { name: "neko3", age: 139, color: "white3" },
]);
</script>

<style scoped>
.editor {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  background-color: white;
}
</style>
