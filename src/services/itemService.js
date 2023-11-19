import {apiService} from "./apiConfig";

export const getAllItems = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `items`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}

export const getAllItemFilter = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `items/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const saveItem = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `items`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

    export const updateItem = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `items`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
