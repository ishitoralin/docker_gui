<template>
  <div>
    <!-- <CompTemplate
      class="mb-3"
      :fields="containersDetailFields['containerDetailActionTemplateFields']"
    >
      <template #title>
        <span class="me-2">
          {{
            containersDetailFields["containerDetailActionTemplateFields"][
              "title"
            ]
          }}
        </span>
        <span :class="['custom-state-style', `custom-text-${containerState}`]">
          {{ handleStringHeadToUpperCase(containerState) }}
        </span>
      </template>
      <template #body>
        <div class="custon-button-group mb-3">
          <SingleButton
            v-for="(item, index) in containersDetailFields[
              'containerDetailActionButtonFields'
            ]"
            :key="index"
            :fields="item"
            @click="handleAction(item['key'])"
          ></SingleButton>
        </div>

        <div>
          <div class="custon-button-group">
            <SingleButton
              v-for="(buttonItem, buttonIndex) in containersDetailFields[
                'containerDetailRouterButtonFields'
              ]"
              :key="buttonIndex"
              :fields="buttonItem"
              @click="handleRouter(buttonItem['key'], item['Id'])"
            ></SingleButton>
          </div>
        </div>
      </template>
    </CompTemplate> -->

    <!-- <CompTemplate
      class="mb-3"
      :fields="containersDetailFields['containerDetailMainTemplateFields']"
    >
      <template #body>
        <HorizonTable :items="containerDetailMainTableItems"></HorizonTable>
      </template>
    </CompTemplate> -->

    <CompTemplate
      class="mb-3"
      :fields="containersDetailFields['containerDetailImageTemplateFields']"
    >
      <template #body>
        <HorizonTable :items="containerDetailImageTableItems">
          <template #cell(Create)>
            <div class="d-flex">
              <InputBox
                :fields="
                  containersDetailFields['containerDetailCreateInputBoxFields']
                "
                v-model:value="createImage"
                @input="handleInputBox"
              ></InputBox>

              <SingleButton
                :fields="
                  containersDetailFields['containerDetailCreateButtonFields']
                "
                v-model:disabled="disabledCreateButton"
                @click="handleCreate()"
              ></SingleButton>
            </div>
          </template>
        </HorizonTable>
      </template>
    </CompTemplate>

    <CompTemplate
      class="mb-3"
      :fields="containersDetailFields['containerDetailNetworkTemplateFields']"
    >
      <!-- <template #body>
        <InputBox
          class="mb-3"
          :fields="containersDetailFields['containerDetailNetworksFields']"
          :items="networks"
          v-model:value="selectedNetwork"
        >
        </InputBox>
      </template> -->
      <template #body>
        <VerticalTable
          :fields="containersDetailFields['containerDetailNetworkTableFields']"
          :items="containerDetailNetworkTableItems"
          v-model:options="tableOptions"
        >
          <template #cell(disconnect)="{ item }">
            <SingleButton
              :fields="
                containersDetailFields['containerDetailDisconnectButtonFields']
              "
              @click="handleNetworkAction('Disconnect', item['Name'])"
            ></SingleButton>
          </template>
        </VerticalTable>
      </template>
    </CompTemplate>

    <CompTemplate
      :fields="containersDetailFields['containerDetailUnusedNetworkFields']"
    >
      <template #body>
        <VerticalTable
          :fields="
            containersDetailFields['containerDetailUnusedNetworkTableFields']
          "
          :items="unusedNetworks"
          v-model:options="tableOptions"
        >
          <template #cell(Connect)="{ item }">
            <SingleButton
              :fields="
                containersDetailFields['containerDetailConnectButtonFields']
              "
              @click="handleNetworkAction('Connect', item['Name'])"
            ></SingleButton>
          </template>
        </VerticalTable>
      </template>
    </CompTemplate>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import VerticalTable from "@/components/VerticalTable.vue";
import HorizonTable from "@/components/HorizonTable.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import DropdownComp from "@/components/DropdownComp.vue";
import SingleButton from "@/components/SingleButton.vue";
import InputBox from "@/components/InputBox.vue";
import { containersDetailFields } from "@/init/fields";
import {
  handleGetVerticalTableItems,
  handleGetHorizonTableItems,
  handleStringHeadToUpperCase,
} from "@/models/helper.js";

const handleSelect = () => {
  console.log(selectedNetwork.value);
};
const route = useRoute();
const router = useRouter();

const networks = ref([]);
const selectedNetwork = ref("");
const disabledCreateButton = ref(true);
const createImage = ref("");
const containerState = ref("");
const containerDetailMainTableItems = ref([]);
const containerDetailImageTableItems = ref([]);
const containerDetailNetworkTableItems = ref([]);
const containerDetailVolumeTableItems = ref([]);
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

const handleRouter = (key) => {
  router.push(`/containers/${key}/${route.params.id}`);
};

const handleAction = (action) => {
  fetchAction(action);
};

const handleInputBox = () => {
  if (createImage.value) return (disabledCreateButton.value = false);
  return (disabledCreateButton.value = true);
};

const handleCreate = () => {
  fetchCreateImage();
};

const handleNetworkAction = (action, id) => {
  fetchNetworkAction(action, id);
};

const fetchAction = async (action) => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI(`postContainer${action}`, options);
  if (response.reason === "ok") {
    fetchDetail();
  }
};

const fetchCreateImage = async () => {
  const options = {
    queryParams: {
      container: route.params.id,
      repo: createImage.value,
    },
  };
  const response = await DockerAPI("postImageCommit", options);
  if (response.reason === "ok") {
    createImage.value = "";
    fetchDetail();
  }
};

const fetchNetworkAction = async (action, id) => {
  const options = {
    pathParams: {
      id: id,
    },
    data: {
      container: route.params.id,
    },
  };
  const response = await DockerAPI(`postNetwork${action}`, options);

  if (response.reason === "ok") {
    fetchDetail();
  }
};

const unusedNetworks = ref([]);

const fetchDetail = async () => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI("getContainerDetail", options);
  containerState.value = response["result"]["State"]["Status"];

  containerDetailMainTableItems.value = handleGetHorizonTableItems(
    containersDetailFields.value["containerDetailMainTableFields"],
    response["result"]
  );

  containerDetailImageTableItems.value = handleGetHorizonTableItems(
    containersDetailFields.value["containerDetailImageTableFields"],
    response["result"]
  );

  const list = response.result.NetworkSettings.Networks;

  unusedNetworks.value = await handleUnusedNetworks(list);

  const modifiedList = [];
  for (const key in list) {
    modifiedList.push({ ...list[key], Name: key });
  }

  containerDetailNetworkTableItems.value = handleGetVerticalTableItems(
    containersDetailFields.value["containerDetailNetworkTableFields"],
    modifiedList
  );
};

const handleUnusedNetworks = async (list) => {
  const unusedList = [];
  const networks = await fetchNetworks();
  for (const network of networks) {
    if (!list[network["Name"]]) {
      unusedList.push({
        Name: network["Name"],
        Id: network["Id"],
        Connect: "",
      });
    }
  }

  return unusedList;
};

const fetchNetworks = async () => {
  const response = await DockerAPI("getNetworkList");
  return response.result;
};

onMounted(() => {
  fetchDetail();
});
</script>

<style scoped>
.custom-state-style {
  width: 4rem;
  border-radius: 4px;
  font-size: var(--font-m);
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
