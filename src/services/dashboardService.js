import {apiService} from "./apiConfig";

export const getAllAdminDashboard = async () => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `report/admin/dashboard`
    apiObject.authentication = true
    apiObject.method = 'get'
    // apiObject.body = data
    return await apiService(apiObject)
}
