import {apiService} from "./apiConfig";

export const getAllTechnician = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `technician`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}

export const getAllFilterTechnician = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `technician/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const saveTechnician = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `technician`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateTechnician = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `technician`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
