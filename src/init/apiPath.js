const UrlList = {
    "getInfo": { method: "GET", path: "/api/docker/info" },
    "getVersion": { method: "GET", path: "/api/docker/version" },
    "getContainerList": { method: "GET", path: "/api/docker/containers/json" },
    "getContainerInspect": { method: "GET", path: ["/api/docker/containers/", { key: "id" }, "/json"] },

    "getImageList": { method: "GET", path: "/api/docker/images/json" },
    "getImageInspect": { method: "GET", path: ["/api/docker/images/", { key: "id" }, "/json"] },
    "getNetworkList": { method: "GET", path: "/api/docker/networks" },
    "getVolumeList": { method: "GET", path: "/api/docker/volumes" },
}

export default UrlList