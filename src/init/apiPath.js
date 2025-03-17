const UrlList = {
    "getPing": { method: "GET", path: "/api/docker/ping" },
    "getInfo": { method: "GET", path: "/api/docker/info" },
    "getVersion": { method: "GET", path: "/api/docker/version" },
    "getEvents": { method: "GET", path: "/api/docker/events" },
    "getSystenmDF": { method: "GET", path: "/api/docker/system/df" },


    "getImageList": { method: "GET", path: "/api/docker/images/json" },
    "getImageSearch": { method: "GET", path: "/api/docker/images/search" },
    "getImageInspect": { method: "GET", path: ["/api/docker/images/", { key: "id" }, "/json"] },
    "getImageHistory": { method: "GET", path: ["/api/docker/images/", { key: "id" }, "/history"] },
    "getImageExport": { method: "GET", path: ["/api/docker/images/", { key: "id" }, "/get"] },
    // "postImageBuild": { method: "POST", path: "/api/docker/build" },
    "postImagePull": { method: "POST", path: "/api/docker/images/create" },
    "postImagePush": { method: "POST", path: ["/api/docker/images/", { key: "id" }, "/push"] },
    "postImageTag": { method: "POST", path: ["/api/docker/images/", { key: "id" }, "/tag"] },
    "postImagePrune": { method: "POST", path: "/api/docker/images/prune" },
    "postImageCommit": { method: "POST", path: "/api/docker/commit" },
    "postImageLoad": { method: "POST", path: "/api/docker/images/load" },
    "deleteImageRemove": { method: "DELETE", path: ["/api/docker/images/", { key: "id" }] },


    "getContainerList": { method: "GET", path: "/api/docker/containers/json" },
    "getContainerInspect": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/json"] },
    "getContainerTop": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/top"] },
    "getContainerLogs": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/logs"] },
    "getContainerChanges": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/changes"] },
    "getContainerExport": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/export"] },
    "getContainerStats": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/stats"] },
    "getContainerAttach": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/attach/ws"] },
    "getContainerArchive": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/archive"] },

    "postContainerStart": { method: "POST", path: ["/api/docker/containers/", { key: "id" }, "/start"] },
    "postContainerRestart": { method: "POST", path: ["/api/docker/containers/", { key: "id" }, "/restart"] },
    "postContainerStop": { method: "POST", path: ["/api/docker/containers/", { key: "id" }, "/stop"] },
    "postContainerKill": { method: "POST", path: ["/api/docker/containers/", { key: "id" }, "/kill"] },
    "postContainerPause": { method: "POST", path: ["/api/docker/containers/", { key: "id" }, "/pause"] },
    "postContainerUnpause": { method: "POST", path: ["/api/docker/containers/", { key: "id" }, "/unpause"] },

    "getNetworkList": { method: "GET", path: "/api/docker/networks" },


    "getVolumeList": { method: "GET", path: "/api/docker/volumes" },
}

export default UrlList