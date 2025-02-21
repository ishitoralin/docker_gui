<template>
  <div>
    <CompTemplate :fields="fields">
      <template #body>
        <HorizonTable :fields="tableFields" :items="tableItems"></HorizonTable>
      </template>
    </CompTemplate>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CompTemplate from "@/components/CompTemplate.vue";
import HorizonTable from "@/components/HorizonTable.vue";
const fields = ref({
  icon: "bi-house",
  title: "Dashboard",
  tail: "hello",
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
  { name: "neko2", age: 129, color: "white2" },
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
