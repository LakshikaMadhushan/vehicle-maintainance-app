import {apiService} from "./apiConfig";

export const getAllCustomer = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `customer`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}
