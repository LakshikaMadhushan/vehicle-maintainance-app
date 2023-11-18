import {apiService} from "./apiConfig";

export const getAllService = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.authentication = true
    apiObject.url = `service-details/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)

}

