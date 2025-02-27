<template>
  <div>
    <img v-if="imageUrl" class="img" :src="imageUrl" alt="動態圖片" />
    <button @click="fetchImage">載入圖片</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const imageUrl = ref("");

const fetchImage = async () => {
  try {
    const url = "https://10.15.1.89:8443/api/v1/auths/otp";
    const response = await axios.get(url);
    const data = response.data;
    if (data.image) {
      imageUrl.value = data.image;
    } else {
      console.error("圖片資料不存在");
    }
  } catch (error) {
    console.error("圖片載入失敗:", error);
  }
};

onMounted(() => {
  fetchImage();
});
</script>
<style scoped>
.img {
  filter: invert(9);
}
</style>