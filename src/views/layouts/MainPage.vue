<template>
  <div class="mainContainer">
    <div class="navBarArea">
      <NavBar></NavBar>
    </div>

    <div class="bodyArea">
      <div class="sideBarArea">
        <SideBar></SideBar>
      </div>

      <div class="contentArea">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
</script>

<style scoped>
.mainContainer {
  width: 100vw;
  height: 100vh;
  background: var(--color-main);
  /* background: linear-gradient(180deg, var(--color-dark), var(--color-main)); */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.navBarArea {
  height: 10vh;
  width: 100%;
}

.bodyArea {
  height: calc(100vh - var(--height-navbar));
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sideBarArea {
  height: 100%;
  min-width: var(--width-sidebar);
}

.contentArea {
  height: 100%;
  width: 100%;
  padding: 1vh 1vw;
  overflow-y: auto;
}
</style>
