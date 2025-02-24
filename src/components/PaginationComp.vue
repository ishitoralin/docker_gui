<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="['page-item', currentPage === 1 ? 'disabled' : '']">
        <a
          :class="[
            'page-link',
            currentPage === 1 ? 'disabled-button' : 'non-target-page',
          ]"
          href="#"
          @click="handleStart"
          disabled
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li :class="['page-item', currentPage === 1 ? 'disabled' : '']">
        <a
          :class="[
            'page-link',
            currentPage === 1 ? 'disabled-button' : 'non-target-page',
          ]"
          href="#"
          @click="handleMinus"
        >
          <span aria-hidden="true">‹</span>
        </a>
      </li>

      <template v-for="index in totalPages" :key="index">
        <li :class="['page-item', currentPage === index ? 'active' : '']">
          <a
            :class="[
              'page-link',
              currentPage === index ? 'target-page' : 'non-target-page',
            ]"
            href="#"
            @click="handleTargetPage(index)"
          >
            {{ index }}
          </a>
        </li>
      </template>

      <li :class="['page-item', currentPage === totalPages ? 'disabled' : '']">
        <a
          :class="[
            'page-link',
            currentPage === totalPages ? 'disabled-button' : 'non-target-page',
          ]"
          href="#"
          @click="handlePlus"
        >
          <span aria-hidden="true">›</span>
        </a>
      </li>

      <li :class="['page-item', currentPage === totalPages ? 'disabled' : '']">
        <a
          :class="[
            'page-link',
            currentPage === totalPages ? 'disabled-button' : 'non-target-page',
          ]"
          href="#"
          @click="handleEnd"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { defineModel, defineProps } from "vue";
const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
});
const currentPage = defineModel("currentPage");
const totalPages = defineModel("totalPages");

const handleTargetPage = (index) => {
  currentPage.value = index;
};

const handlePlus = () => {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
  }
};

const handleMinus = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const handleStart = () => {
  currentPage.value = 1;
};

const handleEnd = () => {
  currentPage.value = props.totalPages;
};
</script>

<style scoped>
.page-item .page-link {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

.page-link:hover {
  color: var(--color-wood);
}

.target-page {
  color: var(--color-wood);
  cursor: auto;
}

.non-target-page {
  color: var(--color-white);
}

.disabled-button {
  color: var(--color-grey);
}

.active {
  border-bottom: 3px solid var(--color-wood);
}

.not-active {
  color: var(--color-grey);
}
</style>