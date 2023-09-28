import {apiService} from "./apiConfig";

export const getAllCategory = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `category`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}
