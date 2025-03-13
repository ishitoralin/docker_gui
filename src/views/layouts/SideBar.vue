<template>
  <div class="sideBarContainer">
    <div class="sideBarContent">
      <div class="contentList">
        <div
          v-for="(item, index) in sideBarItems"
          @click="routerSwitch(item.path)"
          :class="[item.focus ? 'itemFocus' : 'itemContainer']"
          :key="index"
        >
          <i :class="['icon', item.icon]"></i>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { routes } from "@/router/index";
const router = useRouter();
const route = useRoute();

const sideBarItems = ref([]);
const handleSetSideBar = () => {
  const main = routes
    .filter((item) => item.name === "main")[0]
    ["children"].filter((item) => item.side)
    .map((item) => {
      return { ...item, title: item.name, focus: false };
    });

  sideBarItems.value = main;
};

const routerSwitch = (currentPath, title) => {
  sideBarItems.value = sideBarItems.value.map((item) => ({
    ...item,
    focus: item.path === currentPath,
  }));

  router.push(currentPath);
};

const checkFocus = () => {
  const currentPath = route.path.toLowerCase();
  sideBarItems.value = sideBarItems.value.map((item) => ({
    ...item,
    focus: item.path === currentPath,
  }));
};

onMounted(() => {
  handleSetSideBar();
  checkFocus();
});

watch(
  () => route.path,
  () => {
    checkFocus();
  }
);
</script>

<style scoped>
.sideBarContainer {
  height: 100%;
  width: 100%;

  /* border-right: 2px solid var(--color-border); */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sideBarContent {
  height: 100%;
  width: 100%;
  border-radius: 0;
  background-color: var(--color-main);
  color: var(--color-white);
}

.contentList {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contentList > div {
  padding: 5px 0;
  margin: 10px;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contentList > div > .icon {
  font-size: 24px;
}

.contentList > div:last-child {
  margin-top: auto;
}

.itemFocus,
.itemContainer {
  border-radius: 5px;
  background-color: transparent;
  transition: 0.3s ease-in-out;
}

.itemContainer:hover {
  cursor: pointer;
  border-radius: 5px;
  color: var(--color-wood);
  box-shadow: var(--box-shadow-wood-opa);
}

.itemFocus {
  cursor: pointer;
  border-radius: 5px;
  color: var(--color-wood);
  box-shadow: var(--box-shadow-wood-opa-focus);
}
</style>
