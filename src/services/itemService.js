import {apiService} from "./apiConfig";

export const getAllItems = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `items`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}
