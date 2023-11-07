import {apiService} from "./apiConfig";

export const getAllCategory = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.authentication = true
    apiObject.url = `category`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}
export const getAllItemCategoryFilter = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `category/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const saveItemCategory = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `category`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateItemCategory = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `category`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
