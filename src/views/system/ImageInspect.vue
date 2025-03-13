<template>
  <div>
    <CompTemplate :fields="imageInspectFields['imageInspectTemplateFields']">
      <template></template>
      <template #body>
        {{ route.params.id }}
      </template>
      <template #foot> </template>
    </CompTemplate>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import VerticalTable from "@/components/VerticalTable.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import DropdownComp from "@/components/DropdownComp.vue";
import { imageInspectFields } from "@/init/fields";
import { handleGetVerticalTableItems } from "@/models/helper";
const route = useRoute();
const containerListTableItems = ref([]);
// const options = ref({
//   perPage: 10,
//   currentPage: 1,
//   rows: 1,
//   dropdown: [
//     { key: 10, text: 10 },
//     { key: 20, text: 20 },
//     { key: 30, text: 30 },
//     { key: 40, text: 40 },
//     { key: 50, text: 50 },
//     { key: "all", text: "All" },
//   ],
// });

const fetchInspect = async () => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI("getImageInspect", options);
  console.log(response.result);
  // containerListTableItems.value = handleGetVerticalTableItems(
  //   containersInspectFields.value["containerListTableFields"],
  //   response.result
  // );
  // options.value["rows"] = containerListTableItems.value.length;
};

onMounted(() => {
  fetchInspect();
});
</script>

<style scoped>
.custom-tags-style-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.custom-tags-style {
  background-color: var(--color-cornflowerblue);
  border-radius: 10px;
  padding: 2px 5px;
}

.template-foot {
  display: flex;
}
</style>
