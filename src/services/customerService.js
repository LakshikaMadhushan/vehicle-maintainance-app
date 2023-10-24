import {apiService} from "./apiConfig";

export const getAllCustomer = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `customer`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}

export const getAllFilterCustomer = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `customer/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}
