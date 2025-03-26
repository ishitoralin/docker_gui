<template>
  <div>
    <CompTemplate
      :fields="containersDetailFields['containerDetailTemplateFields']"
    >
      <template></template>
      <template #body>
        {{ route.params.id }}
      </template>
      <template #foot>
        <div class="custon-button-group">
          <SingleButton
            v-for="(item, index) in containersDetailFields[
              'containerDetailButtonGroupFields'
            ]"
            :key="index"
            :fields="item"
            @click="handleAction(item['key'])"
          ></SingleButton>
        </div>
      </template>
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
import SingleButton from "@/components/SingleButton.vue";
import { containersDetailFields } from "@/init/fields";
import { handleGetVerticalTableItems } from "@/models/helper";
const route = useRoute();

const fetchDetail = async () => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI("getContainerDetail", options);
};

const handleAction = (action) => {
  console.log(action);
  // fetchAction(action);
};

const fetchAction = async (action) => {
  const options = {
    pathParams: {
      id: route.params.id,
    },
  };
  const response = await DockerAPI(`postContainer${action}`, options);
};

onMounted(() => {
  fetchDetail();
});
</script>

<style scoped>
.custon-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
