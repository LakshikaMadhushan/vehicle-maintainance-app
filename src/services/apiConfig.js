import {serverConfig} from '../configs/serverConfig'
import {toast} from "react-toastify";
import {API_RESPONSE_STATUS} from "../const/const";
import axios from "axios";

export const apiService = async (apiObject) => {
    const url = apiObject?.isBaseUrl ? `${serverConfig.baseUrl}/${serverConfig.version}/${apiObject?.url}` : `${serverConfig.baseUrl}/${apiObject?.url}`
    let result = null
    let headers
    if(!apiObject.isBaseUrl){
        headers={
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic YXNzX2NsaWVudDphc3Mtc2VjcmV0'
        }
    }
    await axios({
        url,
        method: apiObject.method,
        data: apiObject.body,
        headers
    }).then(response => {
        console.log(response,"Line 22 Response")
        if (response.status === API_RESPONSE_STATUS[1]) {
            toast.error(response.message)
        } else if (response.status === API_RESPONSE_STATUS[0]) {

            result = response.data
        }
        // do something with JSON response data
    }).catch(error => {
        console.log(error.code === "ERR_BAD_REQUEST")
        if (error.code === "ERR_BAD_REQUEST") {
            toast.error("Bad Credintials")
        } else {
        toast.error(error.message)
        }
    })

    return result
}
