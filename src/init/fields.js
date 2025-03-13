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

export const containersMainFields = ref({
    containerListTemplateFields: {
        icon: "bi-house",
        title: "Container List",
        tail: "",
    },

    containerListTableFields: [
        {
            key: "State",
            label: "State",
        },
        {
            key: "Id",
            label: "Id",
        },
        {
            key: "Image",
            label: "Image"
        },
        {
            key: "Created",
            label: "Created",
            func: (item) => new Date(item * 1000).toLocaleString(),
        },
    ]
})

export const containersInspectFields = ref({
    containerInspectTemplateFields: {
        icon: "bi-house",
        title: "Container Inspect",
        tail: "",
    },

    containerListTableFields: [
        {
            key: "Id",
            label: "Id",
        },
        {
            key: "Image",
            label: "Image"
        },
        {
            key: "State",
            label: "State",
        },
        {
            key: "Created",
            label: "Created",
            func: (item) => new Date(item * 1000).toLocaleString(),
        },
    ]
})

export const imagesPullFields = ref({
    imagePullTemplateFields: {
        icon: "bi-house",
        title: "Pull Image",
        tail: "",
    },
    imagePullInputBoxFields: {
        title: "Pull Image",
        type: "text",
        placeholder: "Image:tag",
    },

    imagePullRegistryFields: {
        title: "Registry",
        type: "dropdown",
        placeholder: "",
    },

    imagePullSearchButtonFields: {
        title: "Search",
        icon: "bi-search",
        isSubmit: false,
        isDisabled: false,
    },

    imagePullPullButtonFields: {
        title: "Pull",
        icon: "bi-arrow-down-square",
        isSubmit: false,
        isDisabled: false,
    }
})

export const imagesListFields = ref({
    imageListTemplateFields: {
        icon: "bi-house",
        title: "Image List",
        tail: "",
    },

    imageListTableFields: [
        {
            key: "checkbox",
            label: "",
        },
        {
            key: "Id",
            label: "Id",
            func: (item) => item.split(":")[1]
        },
        {
            key: "RepoTags",
            label: "RepoTags"
        },
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

export const imageInspectFields = ref({
    imageInspectTemplateFields: {
        icon: "bi-house",
        title: "Image Inspect",
        tail: "",
    },
})

export const networksMainFields = ref({
    networkListTemplateFields: {
        icon: "bi-house",
        title: "Network List",
        tail: "",
    },

    networkListTableFields: [
        { key: "Name", label: "Name", func: (item) => item },
        { key: "Id", label: "Id" },
        { key: "Attachable", label: "Attachable" },
        { key: "Internal", label: "Internal" },
        { key: "Driver", label: "Driver" },
        { key: "IPAM", label: "IPAM", func: (item) => item.Config },
        {
            key: "Created",
            label: "Created",
            func: (item) => new Date(item).toLocaleString(),
        },
    ]
})

export const networkInspectFields = ref({
    networkInspectTemplateFields: {
        icon: "bi-house",
        title: "Network Inspect",
        tail: "",
    },
})

export const volumesMainFields = ref({
    volumeListTemplateFields: {
        icon: "bi-house",
        title: "Volume List",
        tail: "",
    },

    volumeListTableFields: [
        { key: "Name", label: "Name" },
        { key: "Driver", label: "Driver" },
        // { key: "Mountpoint", label: "Mountpoint" },
        { key: "Status", label: "Status" },
        { key: "Labels", label: "Labels" },
        {
            key: "CreatedAt",
            label: "Created",
            func: (item) => new Date(item).toLocaleString(),
        },
    ]
})

export const volumeInspectFields = ref({
    volumeInspectTemplateFields: {
        icon: "bi-house",
        title: "Volume Inspect",
        tail: "",
    },
})