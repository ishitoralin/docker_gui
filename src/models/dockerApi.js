import axios from "axios"
import UrlList from "@/init/apiPath"
const DockerAPI = async (name, options) => {
    const protocol = window.location.protocol
    const hostname = window.location.hostname;
    // const port = window.location.port
    const port = 8866
    const parameters = {}
    const api = UrlList[name]
    parameters["method"] = api["method"]

    let serverUrl = `${protocol}//${hostname}:${port}${api.path}`

    if (options) {
        if (options.typeParams) {
            parameters['responseType'] = options.typeParams.responseType
        }

        if (options.headers) {
            parameters['headers'] = options.headers
        }

        if (options.data) {
            parameters['data'] = options.data
        }

        if (options.queryParams) {
            if (options.multiQuery) {
                const queryParams = new URLSearchParams();
                for (const key in options.queryParams) {
                    if (Array.isArray(options.queryParams[key])) {
                        options.queryParams[key].forEach(value => {
                            queryParams.append(key, value);
                        });
                    } else {
                        queryParams.append(key, options.queryParams[key]);
                    }
                }
                parameters["params"] = queryParams;
            } else {
                parameters["params"] = options.queryParams;
            }
        }
        if (options.pathParams) {
            if (typeof api.path === "string") {
                serverUrl = `${protocol}//${hostname}:${port}${api.path}`;
            } else if (Array.isArray(api.path)) {
                serverUrl = `${protocol}//${hostname}:${port}`;
                for (const element of api.path) {
                    if (typeof element === "string") {
                        serverUrl += element;
                    } else if (typeof element === "object") {
                        serverUrl += options.pathParams[element.key];
                    }
                }
            }
        }
    }

    parameters["url"] = serverUrl
    try {
        const response = await axios(parameters)
        if (response.data) {
            return response.data
        }
    } catch (error) {
        return error.response
    }
}

export default DockerAPI