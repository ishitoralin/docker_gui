<template>
  <div>
    <CompTemplate :fields="networksMainFields['networkListTemplateFields']">
      <template #body>
        <VerticalTable
          :fields="networksMainFields['networkListTableFields']"
          :items="networkListTableItems"
          v-model:options="options"
        >
          <template #cell(Id)="{ item, key }">
            <router-link
              class="router-link-style"
              :to="`/networks/detail/${item[key]}`"
            >
              {{ handleTruncateString(item[key]) }}
            </router-link>
          </template>
        </VerticalTable>
      </template>
      <template #foot>
        <div class="template-foot">
          <PaginationComp
            v-if="networkListTableItems.length > 10"
            class="mx-auto"
            v-model:options="options"
          ></PaginationComp>
          <DropdownComp
            v-if="networkListTableItems.length > 10"
            v-model:options="options"
          ></DropdownComp>
        </div>
      </template>
    </CompTemplate>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import VerticalTable from "@/components/VerticalTable.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import DropdownComp from "@/components/DropdownComp.vue";
import { networksMainFields } from "@/init/fields";
import {
  handleGetVerticalTableItems,
  handleTruncateString,
} from "@/models/helper";

const networkListTableItems = ref([]);
const options = ref({
  perPage: 10,
  currentPage: 1,
  rows: 1,
  dropdown: [
    { key: 10, text: 10 },
    { key: 20, text: 20 },
    { key: 30, text: 30 },
    { key: 40, text: 40 },
    { key: 50, text: 50 },
    { key: "all", text: "All" },
  ],
});

const fetchList = async () => {
  const response = await DockerAPI("getNetworkList");
  networkListTableItems.value = handleGetVerticalTableItems(
    networksMainFields.value["networkListTableFields"],
    response.result
  );
  options.value["rows"] = networkListTableItems.value.length;
};

onMounted(() => {
  fetchList();
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
