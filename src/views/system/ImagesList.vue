<template>
  <div>
    <CompTemplate :fields="imagesListFields['imageListTemplateFields']">
      <template #body>
        <VerticalTable
          :fields="imagesListFields['imageListTableFields']"
          :items="imageStore['imageListTableItems']"
          v-model:options="imageStore['tableOptions']"
        >
          <template #head(checkbox)>
            <div class="d-flex justify-content-center align-items-center">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                :checked="checkboxAll"
                aria-label="Checkbox for following text input"
                @change="handleChangeAll"
              />
            </div>
          </template>
          <template #cell(checkbox)="{ index }">
            <div class="d-flex justify-content-center align-items-center">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                :checked="imageStore['checkList'][index]['value']"
                aria-label="Checkbox for following text input"
                @change="handleChange(index)"
              />
            </div>
          </template>
          <template #cell(Id)="{ item, key }">
            <router-link
              class="router-link-style"
              :to="`/images/detail/${item[key]}`"
            >
              {{ handleTruncateString(item[key]) }}
            </router-link>
          </template>
          <template #cell(RepoTags)="{ item }">
            <div class="custom-tags-style-container">
              <span
                class="custom-tags-style"
                v-for="(value, index) in item['RepoTags']"
                :key="index"
              >
                {{ value }}
              </span>
            </div>
          </template>
        </VerticalTable>
      </template>
      <template #foot>
        <div class="template-foot">
          <PaginationComp
            v-if="imageStore['imageListTableItems'].length > 10"
            class="mx-auto"
            v-model:options="imageStore['tableOptions']"
          ></PaginationComp>
          <DropdownComp
            v-if="imageStore['imageListTableItems'].length > 10"
            v-model:options="imageStore['tableOptions']"
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
import { imagesListFields } from "@/init/fields";
import { handleTruncateString } from "@/models/helper";
import { useImageStore } from "@/stores/imageStore";
const imageStore = useImageStore();

const checkList = ref([]);
const checkboxAll = ref(false);

const handleChange = (index) => {
  imageStore["checkList"][index]["value"] =
    !imageStore["checkList"][index]["value"];

  checkboxAll.value = imageStore["checkList"].every((item) => item["value"]);
};

const handleChangeAll = () => {
  checkboxAll.value = !checkboxAll.value;

  imageStore["checkList"].forEach((item) => {
    item["value"] = checkboxAll.value;
  });
};

onMounted(() => {
  imageStore.fetchList();
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
  border-radius: 5px;
  padding: 2px 5px;
}

.template-foot {
  display: flex;
}
</style>
