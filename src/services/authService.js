import {apiService} from "./apiConfig";

export const login = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = false
    apiObject.isBasicAuth = true
    apiObject.urlEncoded = true
    apiObject.url = `oauth/token`
    apiObject.method = 'post'
    apiObject.body = data
    return await apiService(apiObject)
}

export const sendNewPassword = async (data) => {
    const apiObject = {}
    apiObject.isBaseUrl = true
    apiObject.url = `user/password`
    apiObject.method = 'patch'
    apiObject.body = data
    return await apiService(apiObject)
}
