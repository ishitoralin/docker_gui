<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-12 col-lg-6 d-flex justify-content-center align-items-center"
      >
        <CompTemplate :fields="dashboardFields['dashboardFields']">
          <template #body>
            <div class="bar-container">
              <ChartJs :data="barData" :options="dashboardChart.barOptions" />
            </div>
          </template>
        </CompTemplate>
      </div>

      <div
        class="col-12 col-lg-6 d-flex justify-content-center align-items-center"
      >
        <CompTemplate :fields="dashboardFields.containersFields">
          <template #body>
            <div class="chart-container">
              <ChartJs
                :data="doughnutData"
                :options="dashboardChart.doughNut"
              />
            </div>
          </template>
        </CompTemplate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import DockerAPI from "@/models/dockerApi";
import CompTemplate from "@/components/CompTemplate.vue";
import ChartJs from "@/components/ChartJs.vue";
import { dashboardChart } from "@/init/chartOptions";
import { dashboardFields } from "@/init/fields";

const barData = computed(() => {
  const data = {
    labels: ["Containers", "Images", "Networks", "Volumes"],
    datasets: [
      {
        data: [
          dockerInfo.value["Containers"],
          dockerInfo.value["Images"],
          networksInfo.value.length,
          volumesInfo.value.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
        datalabels: {
          display: false,
        },
        font: {
          weight: "bold",
          size: 14,
        },
      },
    ],
  };
  return data;
});

const doughnutData = computed(() => {
  const data = {
    labels: [`Running`, `Paused`, `Stopped`],
    datasets: [
      {
        data: [
          dockerInfo.value["ContainersRunning"],
          dockerInfo.value["ContainersPaused"],
          dockerInfo.value["ContainersStopped"],
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
        ],
        datalabels: {
          display: false,
        },
      },
    ],
  };
  return data;
});

const dockerInfo = ref({});
const networksInfo = ref([]);
const volumesInfo = ref([]);

const fetchInfo = async () => {
  const response = await DockerAPI("getInfo");
  dockerInfo.value = response.result;
};

const fetchNetworkList = async () => {
  const response = await DockerAPI("getNetworkList");
  networksInfo.value = response.result;
};

const fetchVolumeList = async () => {
  const response = await DockerAPI("getVolumeList");
  volumesInfo.value = response.result.Volumes;
};

onMounted(() => {
  fetchInfo();
  fetchNetworkList();
  fetchVolumeList();
});
</script>

<style scoped>
.dashboard-container {
  display: flex;
}

.bar-container {
  height: 220px;
  margin: auto;
  overflow: hidden;
}

.chart-container {
  width: 220px;
  height: 220px;
  margin: auto;
  overflow: hidden;
}

.title {
  height: 40px;
  color: var(--color-white);
  font-weight: bold;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
