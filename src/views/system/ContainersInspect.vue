<template>
  <div>
    <CompTemplate
      class="mb-3"
      :fields="containersInspectFields['containerInspectActionTemplateFields']"
    >
      <template #body>
        <div class="custon-button-group mb-3">
          <SingleButton
            v-for="(item, index) in containersInspectFields[
              'containerInspectActionButtonFields'
            ]"
            :key="index"
            :fields="item"
            @click="handleAction(item['key'])"
          ></SingleButton>
        </div>

        <div>
          <div class="custon-button-group">
            <SingleButton
              v-for="(buttonItem, buttonIndex) in containersInspectFields[
                'containerInspectRouterButtonFields'
              ]"
              :key="buttonIndex"
              :fields="buttonItem"
              @click="handleRouter(buttonItem['key'], item['Id'])"
            ></SingleButton>
          </div>
        </div>
      </template>
    </CompTemplate>

    <CompTemplate
      class="mb-3"
      :fields="containersInspectFields['containerInspectMainTemplateFields']"
    >
      <template #body>
        <HorizonTable :items="containerInspectMainTableItems"></HorizonTable>
      </template>
    </CompTemplate>

    <CompTemplate
      class="mb-3"
      :fields="containersInspectFields['containerInspectImageTemplateFields']"
    >
      <template #body>
        <HorizonTable :items="containerInspectImageTableItems"></HorizonTable>
      </template>
    </CompTemplate>

    <CompTemplate
      class="mb-3"
      :fields="containersInspectFields['containerInspectNetworkTemplateFields']"
    >
      <template #body>
        <HorizonTable :items="containerInspectNetworkTableItems"></HorizonTable>
      </template>
    </CompTemplate>

    <CompTemplate
      :fields="containersInspectFields['containerInspectVolumeTemplateFields']"
    >
      <template #body>
        <HorizonTable :items="containerInspectVolumeTableItems"></HorizonTable>
      </template>
    </CompTemplate>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import VerticalTable from "@/components/VerticalTable.vue";
import HorizonTable from "@/components/HorizonTable.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import DropdownComp from "@/components/DropdownComp.vue";
import SingleButton from "@/components/SingleButton.vue";
import { containersInspectFields } from "@/init/fields";
import {
  handleGetVerticalTableItems,
  handleGetHorizonTableItems,
} from "@/models/helper";
const route = useRoute();
const router = useRouter();

const containerInspectMainTableItems = ref([]);
const containerInspectImageTableItems = ref([]);
const containerInspectNetworkTableItems = ref([]);
const containerInspectVolumeTableItems = ref([]);

const handleRouter = (key) => {
  router.push(`/containers/${key}/${route.params.id}`);
};

const handleAction = (action) => {
  fetchAction(action);
};

const fetchAction = async (action) => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI(`postContainer${action}`, options);
  if (response.reason === "ok") {
    fetchInspect();
  }
};

const fetchInspect = async () => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI("getContainerInspect", options);
  console.log(response.result);
  containerInspectMainTableItems.value = handleGetHorizonTableItems(
    containersInspectFields.value["containerInspectMainTableFields"],
    response.result
  );

  containerInspectImageTableItems.value = handleGetHorizonTableItems(
    containersInspectFields.value["containerInspectImageTableFields"],
    response.result
  );

  containerInspectNetworkTableItems.value = handleGetHorizonTableItems(
    containersInspectFields.value["containerInspectMainTableFields"],
    response.result
  );

  containerInspectVolumeTableItems.value = handleGetHorizonTableItems(
    containersInspectFields.value["containerInspectMainTableFields"],
    response.result
  );
};

onMounted(() => {
  fetchInspect();
});
</script>

<style scoped>
.custon-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
