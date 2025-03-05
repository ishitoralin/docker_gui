import { ref } from "vue";
import { filesize } from "filesize";

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
        { key: "MemTotal", label: "Total Memory", func: (item) => filesize(item) },
        { key: "Architecture", label: "Architecture" },
        { key: "KernelVersion", label: "Kernel Version" },
    ],

    versionTableFields: [
        { key: "Platform", label: "Platform", func: (item) => item.Name },
        { key: "Version", label: "Docker Version" },
        { key: "ApiVersion", label: "Api Version" },
    ],
})

export const imagesFields = ref({
    listTemplateFields: {
        icon: "bi-house",
        title: "Image List",
        tail: "",
    },

    listTableFields: [
        { key: "Id", label: "Id", func: (item) => `${item.split("sha256:")[1].slice(0, 10)}...` },
        { key: "RepoTags", label: "RepoTags" },
        {
            key: "Size",
            label: "Size",
            func: (item) => filesize(item),
        },
        {
            key: "Created",
            label: "Created",
            func: (item) => new Date(item * 1000).toLocaleString(),
        },
    ]
})