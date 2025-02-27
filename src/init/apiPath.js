const UrlList = {
    "getInfo": { method: "GET", path: "/api/docker/info" },
    "getVersion": { method: "GET", path: "/api/docker/version" },
    "getContainerList": { method: "GET", path: "/api/docker/containers/json" },
    "getImageList": { method: "GET", path: "/api/docker/images/json" },
    "getNetworkList": { method: "GET", path: "/api/docker/networks" },
    "getVolumeList": { method: "GET", path: "/api/docker/volumes" },
}

export default UrlList