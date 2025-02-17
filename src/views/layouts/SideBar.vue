<template>
  <div>
    <SidebarBtn :fields="fieldsList"></SidebarBtn>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SidebarBtn from "@/components/SidebarBtn.vue";
const fieldsList = ref([
  {
    key: "dashborad",
    label: "Dashborad",
    icon: "bi-apple",
  },
  {
    key: "dashborad",
    label: "Dashborad",
    icon: "bi-apple",
  },
  {
    key: "dashborad",
    label: "Dashborad",
    icon: "bi-apple",
  },
]);
</script>
<style scoped>
</style>