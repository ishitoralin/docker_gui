<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div v-for="(item, index) in showItems" :key="index" class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#flush-${index}`"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <slot :name="`head`" :index="index" :item="item" :data="showItems">
            {{ item[fields["label"]] }}
          </slot>
        </button>
      </h2>
      <div :id="`flush-${index}`" class="accordion-collapse collapse">
        <div class="accordion-body">
          <slot :name="`body`" :index="index" :item="item" :data="showItems">{{
            showItems[index]
          }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
    

<script setup>
import { ref, computed, defineProps, defineModel } from "vue";
const props = defineProps({
  fields: {
    type: Object,
    required: true,
    default: () => {
      return {
        key: 1,
        label: "hello",
      };
    },
  },
  items: {
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  },
});

const options = defineModel("options");

const totalPages = computed(() => {
  return Math.ceil(options.value["rows"] / options.value["perPage"]) || 1;
});

const showItems = computed(() => {
  if (!props.items || !Array.isArray(props.items)) {
    return [];
  }

  const start = (options.value["currentPage"] - 1) * options.value["perPage"];
  const end = start + options.value["perPage"];
  const rows = props.items.slice(start, end);
  return rows;
});
</script>

<style scoped>
.accordion,
.accordion-header,
.accordion-body,
.accordion-item,
.accordion-button {
  background-color: transparent;
  color: var(--color-white);
  box-shadow: none;
}
</style>