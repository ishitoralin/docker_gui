<template>
  <div>
    <CompTemplate :fields="containersMainFields['containerListTemplateFields']">
      <template #body>
        <VerticalTable
          :fields="containersMainFields['containerListTableFields']"
          :items="containerListTableItems"
          v-model:options="tableOptions"
        >
          <template #cell(State)="{ item }">
            <span
              :class="[
                'custom-state-style',
                {
                  'custom-text-created': item === 'created',
                  'custom-text-running': item === 'running',
                  'custom-text-paused': item === 'paused',
                  'custom-text-exited': item === 'exited',
                },
              ]"
            >
              {{ handleStringHeadToUpperCase(item) }}
            </span>
          </template>
          <template #cell(Id)="{ item }">
            <router-link
              class="router-link-style"
              :to="`/containers/inspect/${item}`"
            >
              {{ handleTruncateString(item) }}
            </router-link>
          </template>
        </VerticalTable>
      </template>
      <template #foot>
        <div class="template-foot">
          <PaginationComp
            v-if="containerListTableItems.length > 10"
            class="mx-auto"
            v-model:options="tableOptions"
          ></PaginationComp>
          <DropdownComp
            v-if="containerListTableItems.length > 10"
            v-model:options="tableOptions"
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
import AccordionCard from "@/components/AccordionCard.vue";
import { containersMainFields } from "@/init/fields";
import {
  handleGetVerticalTableItems,
  handleStringHeadToUpperCase,
  handleTruncateString,
} from "@/models/helper";

const containerListTableItems = ref([]);
const tableOptions = ref({
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
  const options = {
    queryParams: {
      all: 1,
    },
  };
  const response = await DockerAPI("getContainerList", options);
  containerListTableItems.value = handleGetVerticalTableItems(
    containersMainFields.value["containerListTableFields"],
    response.result
  );
  tableOptions.value["rows"] = containerListTableItems.value.length;
};

onMounted(() => {
  fetchList();
});
</script>

<style scoped>
.template-foot {
  display: flex;
}

.custom-state-style {
  width: 4rem;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
}
.custom-text-created {
  background-color: var(--color-cornflowerblue);
}
.custom-text-running {
  background-color: var(--color-green);
}
.custom-text-paused {
  background-color: var(--color-red);
}
.custom-text-exited {
  background-color: var(--color-secondary);
}
</style>
