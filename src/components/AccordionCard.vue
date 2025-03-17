<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div v-for="(item, index) in fields" :key="index" class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#flush-${item['key']}`"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <slot :name="`head(${item['key']})`">{{ item["title"] }}</slot>
        </button>
      </h2>
      <div
        :id="`flush-${item['key']}`"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <slot :name="`body(${item['key']})`">{{ item["content"] }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
    

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fields: {
    type: Object,
    required: true,
    default: () => {
      return [
        {
          key: 1,
          title: "Accordion Item #1",
          content:
            "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.",
        },
        {
          key: 2,
          title: "Accordion Item #2",
          content:
            "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content.",
        },
        {
          key: 3,
          title: "Accordion Item #3",
          content:
            "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.",
        },
      ];
    },
  },
});
</script>