import {apiService} from "./apiConfig";

export const getAllVehicle = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `vehicle`
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}

export const getAllVehicleFilter = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.authentication = true
    apiObject.url = `vehicle/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)

}

export const saveVehicle = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `vehicle`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const updateVehicle = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `vehicle`
    apiObject.method = 'put'
    apiObject.body = data
    return await apiService(apiObject)
}
