import {apiService} from "./apiConfig";

export const getAllVehicle = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `vehicle`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}
