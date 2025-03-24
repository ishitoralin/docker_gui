<template>
  <div class="container-fluid">
    <div class="row g-3">
      <div class="col-12 col-lg-6">
        <CompTemplate :fields="dashboardPageFields['systemInfoTemplateFields']">
          <template #body>
            <HorizonTable
              v-model:options="options"
              :items="systemInfoTableItems"
            ></HorizonTable>
          </template>
        </CompTemplate>
      </div>

      <div class="col-12 col-lg-6">
        <CompTemplate :fields="dashboardPageFields['dockerInfoTemplateFields']">
          <template #body>
            <HorizonTable
              v-model:options="options"
              :items="dockerInfoTableItems"
            ></HorizonTable>
          </template>
        </CompTemplate>
      </div>

      <div class="col-12 col-md-6">
        <CompTemplate :fields="dashboardPageFields['dashboardTemplateFields']">
          <template #body>
            <div class="bar-container">
              <ChartJs :data="barData" :options="dashboardChart.barOptions" />
            </div>
          </template>
        </CompTemplate>
      </div>

      <div class="col-12 col-md-6">
        <CompTemplate :fields="dashboardPageFields['containersTemplateFields']">
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
import HorizonTable from "@/components/HorizonTable.vue";
import ChartJs from "@/components/ChartJs.vue";
import { dashboardChart } from "@/init/chartOptions";
import { dashboardPageFields } from "@/init/fields";
import { handleGetHorizonTableItems } from "@/models/helper";

const dockerInfo = ref({});
const imageInfo = ref([]);
const networksInfo = ref([]);
const volumesInfo = ref([]);
const dockerInfoTableItems = ref([]);
const systemInfoTableItems = ref([]);
const options = ref({
  perPage: 10,
  currentPage: 1,
});

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
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
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
          "rgba(0, 128, 0, 0.2)",
          "rgba(155, 0, 0, 0.2)",
          "rgba(128, 128, 128, 0.2)",
        ],
        borderColor: ["rgb(0, 128, 0)", "rgb(155, 0, 0)", "rgb(128, 128, 128)"],
        datalabels: {
          display: false,
        },
      },
    ],
  };
  return data;
});

const fetchInfo = async () => {
  const response = await DockerAPI("getInfo");
  dockerInfo.value = response.result;

  systemInfoTableItems.value = handleGetHorizonTableItems(
    dashboardPageFields.value["systemInfoTableFields"],
    response.result
  );
};

const fetchVersion = async () => {
  const response = await DockerAPI("getVersion");
  dockerInfoTableItems.value = handleGetHorizonTableItems(
    dashboardPageFields.value["dockerInfoTableFields"],
    response.result
  );
};

const fetchImageList = async () => {
  const response = await DockerAPI("getImageList");
  imageInfo.value = response.result;
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
  fetchVersion();
  fetchImageList();
  fetchNetworkList();
  fetchVolumeList();
});
</script>

<style scoped>
.dashboard-container {
  display: flex;
}

.bar-container {
  width: 100%;
  margin: auto;
  overflow: hidden;
}

.chart-container {
  width: 100%;
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
