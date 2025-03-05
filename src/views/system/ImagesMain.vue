<template>
  <div>
    <CompTemplate :fields="imagesFields['listTemplateFields']">
      <template #body>
        <VerticalTable
          :fields="imagesFields['listTableFields']"
          :items="tableItems"
          :options="options"
        >
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
        <div></div>
      </template>
    </CompTemplate>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import VerticalTable from "@/components/VerticalTable.vue";
import { handleGetVerticalTableItems } from "@/models/helper";
import { filesize } from "filesize";
import { imagesFields } from "@/init/fields";

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

const tableItems = ref([]);

const fetchImageList = async () => {
  const response = await DockerAPI("getImageList");
  tableItems.value = handleGetVerticalTableItems(
    imagesFields.value["listTableFields"],
    response.result
  );
};

onMounted(() => {
  fetchImageList();
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
</style>
