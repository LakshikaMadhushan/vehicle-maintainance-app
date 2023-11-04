import {apiService} from "./apiConfig";

export const getAllAdmin = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.authentication = true
    apiObject.url = `admin/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)

}
export const saveAdmin = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `admin`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateAdmin = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `admin`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
