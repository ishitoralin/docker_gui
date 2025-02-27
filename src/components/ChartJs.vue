<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>
  
  <script setup>
import { ref, defineProps, onMounted, watch } from "vue";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const chartCanvas = ref(null);
let chartInstance = null;

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartCanvas.value, {
    plugins: ["ChartDataLabels"],
    type: props.options.type,
    data: props.data,
    options: props.options,
  });
};

watch(
  () => props.data,
  () => {
    createChart();
  },
  { deep: true }
);

onMounted(() => {
  createChart();
});
</script>
  
  <style scoped>
canvas {
  max-width: 100%;
}
/* canvas {
  width: 520px !important;
  height: 220px !important;
} */
</style>
  