<template>
  <nav aria-label="Page navigation example">
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

      <li v-if="totalPages > 5 && currentPage > 3" :class="['page-item']">
        <ol :class="['page-link', 'non-target-page', 'disabled']">
          ‧ ‧ ‧
        </ol>
      </li>
      <template v-for="index in totalPages" :key="index">
        <li
          v-if="
            (index >= currentPage - 2 && index <= currentPage + 2) ||
            (currentPage <= 2 && index <= 5) ||
            (currentPage >= totalPages - 1 && index === currentPage - 4) ||
            (currentPage === totalPages && index === totalPages - 5)
          "
          :class="['page-item', currentPage === index ? 'active' : '']"
        >
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

      <li
        v-if="totalPages > 5 && totalPages - currentPage >= 3"
        :class="['page-item']"
      >
        <ol :class="['page-link', 'non-target-page', 'disabled']">
          ‧ ‧ ‧
        </ol>
      </li>

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
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
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

.page-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 35px;
  white-space: nowrap;
}
</style>