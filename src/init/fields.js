import { ref } from "vue";
import { filesize } from "filesize";
import { handleDateTransform } from "@/models/helper.js"
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

    containerListAccordionFields: {
        key: "Id",
        label: "Id",
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
            key: "NetworkSettings",
            label: "IP",
            func: (item) => item['Networks']['bridge']['IPAddress']
        },
        {
            key: "Ports",
            label: "Ports",
            func: (item) => {
                item = item.filter((value) => value['PublicPort'])
                let result = ""
                if (item.length) {
                    for (let i = 0; i < item.length; i++) {
                        const element = item[i];
                        result += `${element['PublicPort']}`
                        if (i < item.length - 1) {
                            result += `, `
                        }
                    }
                }
                return result
            }
        },
        {
            key: "Created",
            label: "Created",
            func: (item) => new Date(item * 1000).toLocaleString(),
        },
    ],

    containerListAccordionActionButtonFields: [
        {
            key: "Start",
            icon: "bi-play-circle",
            style: "safe",
            width: "4.5rem",


        },
        {
            key: "Restart",
            icon: "bi-play-circle",
            style: "safe",
            width: "4.5rem",


        },
        {
            key: "Pause",
            icon: "bi-pause-circle",
            style: "safe",
            width: "4.5rem",


        },
        {
            key: "Unpause",
            title: "Resume",
            icon: "bi-play-circle",
            style: "safe",
            width: "4.5rem",


        },
        {
            key: "Stop",
            icon: "bi-stop-circle",
            style: "danger",
            width: "4.5rem",


        },
        {
            key: "Kill",
            icon: "bi-x-circle",
            style: "danger",
            width: "4.5rem",


        },
    ],

    containerListAccordionRouterButtonFields: [
        {
            key: "detail",
            title: "Detail",
            icon: "bi-card-list",
            width: "4.5rem",


        },
        {
            key: "logs",
            title: "Logs",
            icon: "bi-journal",
            width: "4.5rem",


        },
        {
            key: "stats",
            title: "Stats",
            icon: "bi-bar-chart-line",
            width: "4.5rem",


        },
        {
            key: "console",
            title: "Console",
            icon: "bi-cpu",
            width: "4.5rem",


        },
        {
            key: "attach",
            title: "Attach",
            icon: "bi-plug",
            width: "4.5rem",


        },
    ]
})

export const containersDetailFields = ref({
    // Actions
    containerDetailActionTemplateFields: {
        icon: "bi-house",
        title: "Actions",
        tail: "",
    },

    containerDetailActionButtonFields: [
        {
            key: "Start",
            icon: "bi-play-circle",
            style: "safe",
            width: "4.5rem",
        },
        {
            key: "Restart",
            icon: "bi-play-circle",
            style: "safe",
            width: "4.5rem",
        },
        {
            key: "Pause",
            icon: "bi-pause-circle",
            style: "safe",
            width: "4.5rem",
        },
        {
            key: "Unpause",
            title: "Resume",
            style: "safe",
            icon: "bi-play-circle",
            width: "4.5rem",
        },
        {
            key: "Stop",
            icon: "bi-stop-circle",
            style: "danger",
            width: "4.5rem",
        },
        {
            key: "Kill",
            icon: "bi-x-circle",
            style: "danger",
            width: "4.5rem",
        },
    ],

    containerDetailRouterButtonFields: [
        {
            key: "detail",
            title: "Detail",
            icon: "bi-card-list",
            width: "4.5rem",
        },
        {
            key: "logs",
            title: "Logs",
            icon: "bi-journal",
            width: "4.5rem",
        },
        {
            key: "stats",
            title: "Stats",
            icon: "bi-bar-chart-line",
            width: "4.5rem",
        },
        {
            key: "console",
            title: "Console",
            icon: "bi-cpu",
            width: "4.5rem",
        },
        {
            key: "attach",
            title: "Attach",
            icon: "bi-plug",
            width: "4.5rem",
        },
    ],

    // container detail main
    containerDetailMainTemplateFields: {
        icon: "bi-house",
        title: "Container Detail",
        tail: "",
    },

    containerDetailMainTableFields: [
        { key: "Id", label: "Id" },
        { key: "Name", label: "Name", func: (item) => item.split("/")[1] },
        // { key: "Args", label: "Args" },
        { key: "State", label: "State", func: (item) => item['Status'] },
        // { key: "Driver", label: "Driver" },
        // { key: "LogPath", label: "LogPath" },
        { key: "MountLabel", label: "MountLabel" },
        { key: "Mounts", label: "Mounts" },
        // { key: "Config", label: "Config" },
        { key: "State", label: "Start At", func: (item) => handleDateTransform(item['StartedAt']) },
        { key: "Created", label: "Created", func: (item) => handleDateTransform(item) },
    ],

    // container detail image
    containerDetailImageTemplateFields: {
        icon: "bi-house",
        title: "Image",
        tail: "",
    },

    containerDetailImageTableFields: [
        { key: "Image", label: "Image Id" },
        { key: "Config", label: "Image Name", func: (item) => item['Image'] },
        { key: "", swap: "Create", label: "Create Image", },
    ],

    containerDetailCreateInputBoxFields: {
        title: "",
        type: "text",
        placeholder: "repo:tag",
    },

    containerDetailCreateButtonFields: {
        key: "create",
        title: "Create",
        icon: "bi-card-list",
        width: "5rem",
    },

    // container detail network
    containerDetailNetworkTemplateFields: {
        icon: "bi-house",
        title: "Network",
        tail: "",
    },

    containerDetailNetworkTableFields: [
        { key: "Name", label: "Name" },
        {
            key: "IPAddress",
            label: "IP Address",
        },
        { key: "Gateway", label: "Gateway" },
        { key: "MacAddress", label: "Mac Address" },
        { key: "disconnect", label: "Disconnect", options: { width: '15rem' } },
    ],

    containerDetailDisconnectButtonFields: {
        key: "disconnect",
        title: "Disconnect",
        icon: "bi-card-list",
        style: "danger",
        width: "6rem",
    },

    containerDetailNetworksFields: {
        title: "Networks",
        type: "dropdown",
        placeholder: "",
    },

    containerDetailUnusedNetworkFields: {
        icon: "bi-house",
        title: "Unused Network",
        tail: "",
    },

    containerDetailConnectButtonFields: {
        key: "connect",
        title: "Connect",
        style: "safe",
        icon: "bi-card-list",
        width: "6rem",
    },

    containerDetailUnusedNetworkTableFields: [
        { key: "Name", label: "Name" },
        { key: "Id", label: "Id" },
        {
            key: "Connect",
            label: "Connect",
            options: { width: '15rem' }
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
        key: "Search",
        icon: "bi-search",
    },

    imagePullPullButtonFields: {
        key: "Pull",
        icon: "bi-arrow-down-square",
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

export const imageDetailFields = ref({
    imageDetailTemplateFields: {
        icon: "bi-house",
        title: "Image Detail",
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

export const networkDetailFields = ref({
    networkDetailTemplateFields: {
        icon: "bi-house",
        title: "Network Detail",
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

export const volumeDetailFields = ref({
    volumeDetailTemplateFields: {
        icon: "bi-house",
        title: "Volume Detail",
        tail: "",
    },
})