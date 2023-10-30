import {decodeToken, useJwt} from "react-jwt";

export const findObject  = async (array, value) => {
    await array.map(obj => {
        if (obj.value === value) {
            return obj
        }
    })
    return null;
}

export const jwtDecode = (token) =>{
    const decodedToken = decodeToken(token);;
    if(decodedToken){
        return decodedToken;
    }
    return null;
}

