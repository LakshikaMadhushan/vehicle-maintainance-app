import {apiService} from "./apiConfig";

export const getAllItemsAdminReport = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `report/filter`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}
