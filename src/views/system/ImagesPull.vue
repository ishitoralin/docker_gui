<template>
  <div>
    <CompTemplate :fields="imagesPullFields['imagePullTemplateFields']">
      <template #body>
        <InputBox
          :fields="imagesPullFields['imagePullRegistryFields']"
          :items="registryItems"
          v-model:value="registryValue"
        ></InputBox>

        <InputBox
          :fields="imagesPullFields['imagePullInputBoxFields']"
          v-model:value="searchValue"
        ></InputBox>

        <div class="d-flex">
          <SingleButton
            :fields="imagesPullFields['imagePullSearchButtonFields']"
            @click="handleSearchImage"
            class="me-3"
          ></SingleButton>

          <SingleButton
            :fields="imagesPullFields['imagePullPullButtonFields']"
            @click="handlePullImage"
          ></SingleButton>
        </div>
      </template>
    </CompTemplate>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import InputBox from "@/components/InputBox.vue";
import SingleButton from "@/components/SingleButton.vue";
import { imagesPullFields } from "@/init/fields";
import { useImageStore } from "@/stores/imageStore";
const imageStore = useImageStore();

const registryItems = ref([
  { key: "Docker Hub", value: "docker.io", label: "Docker Hub" },
  { key: "shihu", value: "shihu.io", label: "shihu" },
]);
const registryValue = ref(registryItems.value[0]["value"]);

const searchValue = ref("");

const handleSearchImage = () => {
  if (searchValue.value === "") {
    return;
  }
  const url = `https://hub.docker.com/search?type=image&q=${searchValue.value}`;
  window.open(url);
};

const handlePullImage = async () => {
  imageStore.fetchPullImage(searchValue.value);
};
</script>