import {apiService} from "./apiConfig";

export const getAllMechanicServiceCategory = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service-category`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}

export const getAllMechanicServiceCategoryFilter = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service-category/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}


export const saveMechanicServiceCategory = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service-category`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateMechanicServiceCategory = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `mechanic-service-category`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}

