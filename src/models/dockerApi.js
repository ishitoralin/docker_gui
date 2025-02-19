import axios from "axios"
import UrlList from "@/init/dockerApiPath"
const DockerAPI = async (api, options) => {
    const protocal = window.location.protocol
    const hostname = window.location.hostname;
    const port = window.location.port
    const parameters = {}
    parameters["method"] = UrlList[api]["method"]
    parameters["url"] = UrlList[api]["url"]

    if (options) {
        if (options.typeParams) {
            parameters['responseType'] = options.responseType
        }

        if (options.headers) {
            parameters['headers'] = options.headers
        }

        if (options.data) {
            parameters['data'] = options.data
        }
    }

    try {
        const response = await axios(parameters)
        return response
    } catch (error) {
        return error
    }
}

export default DockerAPI