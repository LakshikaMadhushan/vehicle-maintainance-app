import {apiService} from "./apiConfig";

export const getAllService = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.authentication = true
    apiObject.url = `service/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)

}
export const saveService = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `service`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateService = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `service`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
