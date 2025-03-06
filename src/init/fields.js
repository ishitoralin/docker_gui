import { ref } from "vue";
import { filesize } from "filesize";

export const dashboardPageFields = ref({
    systemInfoTemplateFields: {
        icon: "bi-house",
        title: "System Info",
        tail: "",
    },

    dockerInfoTemplateFields: {
        icon: "bi-house",
        title: "Docker Info",
        tail: "",
    },

    dashboardTemplateFields: {
        icon: "bi-house",
        title: "Dashboard",
        tail: "",
    },

    containersTemplateFields: {
        icon: "bi-house",
        title: "Containers",
        tail: "",
    },

    systemInfoTableFields: [
        { key: "Name", label: "Hostname" },
        { key: "OperatingSystem", label: "Operating System" },
        { key: "NCPU", label: "CPU Number" },
        { key: "MemTotal", label: "Total Memory", func: (item) => filesize(item) },
        { key: "Architecture", label: "Architecture" },
        { key: "KernelVersion", label: "Kernel Version" },
    ],

    dockerInfoTableFields: [
        { key: "Platform", label: "Platform", func: (item) => item.Name },
        { key: "Version", label: "Docker Version" },
        { key: "ApiVersion", label: "Api Version" },
    ],
})

export const imagesMainFields = ref({
    imageListTemplateFields: {
        icon: "bi-house",
        title: "Image List",
        tail: "",
    },

    imageListTableFields: [
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

export const networksMainFields = ref({
    networkListTemplateFields: {
        icon: "bi-house",
        title: "Image List",
        tail: "",
    },

    networkListTableFields: [
        { key: "Name", label: "Name", func: (item) => item },
        { key: "Id", label: "Id", func: (item) => `${item.slice(0, 10)}...` },
        { key: "Attachable", label: "Attachable", func: (item) => item },
        {
            key: "Internal",
            label: "Internal",
            func: (item) => item ? "true" : "false"
        },
        { key: "Driver", label: "Driver", func: (item) => item },
        { key: "IPAM", label: "IPAM", func: (item) => item.Config },
        {
            key: "Created",
            label: "Created",
            func: (item) => new Date(item).toLocaleString(),
        },
    ]
})