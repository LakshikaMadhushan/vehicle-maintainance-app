import {apiService} from "./apiConfig";

export const login = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = false
    apiObject.url = `oauth/token`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}
