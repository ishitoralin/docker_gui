<template>
  <div>
    <AccordionCard
      :fields="containersMainFields['containerListAccordionFields']"
      :items="containerListTableItems"
      v-model:options="tableOptions"
    >
      <template #head="{ item }">
        <div class="d-flex" style="width: 100%">
          <div
            style="width: 5rem"
            class="me-3"
            :class="['custom-state-style', `custom-text-${item['State']}`]"
          >
            {{ handleStringHeadToUpperCase(item["State"]) }}
          </div>
          <div>
            <router-link
              class="router-link-style"
              :to="``"
              @click="handleLinkClick(item['Id'])"
            >
              {{ item["Names"][0].split("/")[1] }}
            </router-link>
          </div>
        </div>
      </template>

      <template #body="{ item }">
        <div class="d-flex mb-3">
          <div class="custon-button-group">
            <SingleButton
              v-for="(buttonItem, buttonIndex) in containersMainFields[
                'containerListAccordionActionButtonFields'
              ]"
              :key="buttonIndex"
              :fields="buttonItem"
              @click="handleAction(buttonItem['key'], item['Id'])"
            ></SingleButton>
          </div>
        </div>

        <div>
          <div class="custon-button-group">
            <SingleButton
              v-for="(buttonItem, buttonIndex) in containersMainFields[
                'containerListAccordionRouterButtonFields'
              ]"
              :key="buttonIndex"
              :fields="buttonItem"
              @click="handleRouter(buttonItem['key'], item['Id'])"
            ></SingleButton>
          </div>
        </div>
      </template>
    </AccordionCard>

    <div class="d-flex">
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
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import VerticalTable from "@/components/VerticalTable.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import DropdownComp from "@/components/DropdownComp.vue";
import AccordionCard from "@/components/AccordionCard.vue";
import SingleButton from "@/components/SingleButton.vue";
import { containersMainFields } from "@/init/fields";
import {
  handleStringHeadToUpperCase,
  handleTruncateString,
} from "@/models/helper";

const router = useRouter();
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

const handleLinkClick = (id) => {
  router.push(`/containers/detail/${id}`);
};

const fetchList = async () => {
  const options = {
    queryParams: {
      all: 1,
    },
  };
  const response = await DockerAPI("getContainerList", options);
  const sortedResults = response.result.sort((a, b) => {
    return a["Names"][0].localeCompare(b["Names"][0]);
  });

  containerListTableItems.value = sortedResults;
  tableOptions.value["rows"] = containerListTableItems.value.length;
};

const handleRouter = (key, id) => {
  router.push(`/containers/${key}/${id}`);
};

const handleAction = (action, id) => {
  fetchAction(action, id);
};

const fetchAction = async (action, id) => {
  const options = {
    pathParams: {
      id: id,
    },
  };
  const response = await DockerAPI(`postContainer${action}`, options);
  if (response.reason === "ok") {
    fetchList();
  }
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

.custon-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
