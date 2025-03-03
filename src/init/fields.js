import { ref } from "vue";

export const dashboardFields = ref({
    dashboard: {
        icon: "bi-house",
        title: "Dashboard",
        tail: "",
    },

    containers: {
        icon: "bi-house",
        title: "Containers",
        tail: "",
    },

    dockerInfo: {
        icon: "bi-house",
        title: "Docker Info",
        tail: "",
    },

    systemInfo: {
        icon: "bi-house",
        title: "System Info",
        tail: "",
    },

    basicTableFields: [
        { key: "Name", label: "Hostname" },
        { key: "OperatingSystem", label: "Operating System" },
        { key: "NCPU", label: "CPU Number" },
        { key: "MemTotal", label: "Total Memory" },
        { key: "Architecture", label: "Architecture" },
        { key: "KernelVersion", label: "Kernel Version" },
    ],

    versionTableFields: [
        { key: "Platform", label: "Platform", func: (item) => item.Name },
        { key: "Version", label: "Docker Version" },
        { key: "ApiVersion", label: "Api Version" },
    ],
})