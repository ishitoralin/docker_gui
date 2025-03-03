<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-12 test">
        <!-- <CompTemplate :fields="fields"></CompTemplate> -->
      </div>
      <div class="col-lg-6 col-md-12 test">2</div>
      <div class="col-lg-6 col-md-12 test">3</div>
      <div class="col-lg-6 col-md-12 test">4</div>
      <div class="col-lg-6 col-md-12 test">5</div>
      <div class="col-lg-6 col-md-12 test">6</div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import CompTemplate from "@/components/CompTemplate.vue";
const router = useRoute();
</script>
<style scoped>
.test {
  border: 1px solid red;
}
</style>