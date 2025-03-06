<template>
  <div>
    <ul class="pagination justify-content-center">
      <li
        :class="['page-item', options['currentPage'] === 1 ? 'disabled' : '']"
      >
        <a
          :class="[
            'page-link',
            options['currentPage'] === 1
              ? 'disabled-button'
              : 'non-target-page',
          ]"
          href="#"
          @click="handleStart"
          disabled
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        :class="['page-item', options['currentPage'] === 1 ? 'disabled' : '']"
      >
        <a
          :class="[
            'page-link',
            options['currentPage'] === 1
              ? 'disabled-button'
              : 'non-target-page',
          ]"
          href="#"
          @click="handleMinus"
        >
          <span aria-hidden="true">‹</span>
        </a>
      </li>

      <li
        v-if="totalPages > 5 && options['currentPage'] > 3"
        :class="['page-item']"
      >
        <ol :class="['page-link', 'non-target-page', 'disabled']">
          ‧ ‧ ‧
        </ol>
      </li>
      <template v-for="index in totalPages" :key="index">
        <li
          v-if="
            (index >= options['currentPage'] - 2 &&
              index <= options['currentPage'] + 2) ||
            (options['currentPage'] <= 2 && index <= 5) ||
            (options['currentPage'] >= totalPages - 1 &&
              index === options['currentPage'] - 4) ||
            (options['currentPage'] === totalPages && index === totalPages - 5)
          "
          :class="[
            'page-item',
            options['currentPage'] === index ? 'active' : '',
          ]"
        >
          <a
            :class="[
              'page-link',
              options['currentPage'] === index
                ? 'target-page'
                : 'non-target-page',
            ]"
            href="#"
            @click="handleTargetPage(index)"
          >
            {{ index }}
          </a>
        </li>
      </template>

      <li
        v-if="totalPages > 5 && totalPages - options['currentPage'] >= 3"
        :class="['page-item']"
      >
        <ol :class="['page-link', 'non-target-page', 'disabled']">
          ‧ ‧ ‧
        </ol>
      </li>

      <li
        :class="[
          'page-item',
          options['currentPage'] === totalPages ? 'disabled' : '',
        ]"
      >
        <a
          :class="[
            'page-link',
            options['currentPage'] === totalPages
              ? 'disabled-button'
              : 'non-target-page',
          ]"
          href="#"
          @click="handlePlus"
        >
          <span aria-hidden="true">›</span>
        </a>
      </li>

      <li
        :class="[
          'page-item',
          options['currentPage'] === totalPages ? 'disabled' : '',
        ]"
      >
        <a
          :class="[
            'page-link',
            options['currentPage'] === totalPages
              ? 'disabled-button'
              : 'non-target-page',
          ]"
          href="#"
          @click="handleEnd"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed, defineModel, defineProps } from "vue";
const options = defineModel("options");

const totalPages = computed(() => {
  return Math.ceil(options.value["rows"] / options.value["perPage"]) || 1;
});

const handleTargetPage = (index) => {
  options.value["currentPage"] = index;
};

const handlePlus = () => {
  if (options.value["currentPage"] < totalPages.value) {
    options.value["currentPage"]++;
  }
};

const handleMinus = () => {
  if (options.value["currentPage"] > 1) {
    options.value["currentPage"]--;
  }
};

const handleStart = () => {
  options.value["currentPage"] = 1;
};

const handleEnd = () => {
  options.value["currentPage"] = totalPages.value;
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