<template>
  <div>
    <CompTemplate :fields="volumesMainFields['volumeListTemplateFields']">
      <template #body>
        <VerticalTable
          :fields="volumesMainFields['volumeListTableFields']"
          :items="volumeListTableItems"
          v-model:options="options"
        >
          <template #cell(Name)="{ item }">
            <router-link
              class="router-link-style"
              :to="`/volumes/inspect/${item}`"
            >
              {{ handleTruncateString(item) }}
            </router-link>
          </template>
          
          <template #cell(RepoTags)="{ row }">
            <div class="custom-tags-style-container">
              <span
                class="custom-tags-style"
                v-for="(item, index) in row['item']"
                :key="index"
              >
                {{ item }}
              </span>
              <span
                class="custom-tags-style"
                v-for="(item, index) in row['item']"
                :key="index"
              >
                {{ item }}
              </span>
            </div>
          </template>
        </VerticalTable>
      </template>
      <template #foot>
        <div class="template-foot">
          <PaginationComp
            v-if="volumeListTableItems.length > 10"
            class="mx-auto"
            v-model:options="options"
          ></PaginationComp>
          <DropdownComp
            v-if="volumeListTableItems.length > 10"
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
import { volumesMainFields } from "@/init/fields";
import {
  handleGetVerticalTableItems,
  handleTruncateString,
} from "@/models/helper";

const volumeListTableItems = ref([]);
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
  const response = await DockerAPI("getVolumeList");
  volumeListTableItems.value = handleGetVerticalTableItems(
    volumesMainFields.value["volumeListTableFields"],
    response.result.Volumes
  );
  options.value["rows"] = volumeListTableItems.value.length;
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
