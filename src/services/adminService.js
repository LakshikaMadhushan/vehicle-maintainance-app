import {apiService} from "./apiConfig";

export const getAllAdmin = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `admin/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}
