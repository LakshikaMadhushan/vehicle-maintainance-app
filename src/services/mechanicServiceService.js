import {apiService} from "./apiConfig";


export const getAllMechanicServiceFilter = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const saveMechanicService = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateMechanicService = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
