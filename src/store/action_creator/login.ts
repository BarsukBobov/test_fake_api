import {IAuth, LoginAction, LoginActionTypes} from "../../types/login";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";

export const authAPI = (username:string, password:string) => {
    const data={
        username: username,
        password: password
    }
    const config={
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            const response: AxiosResponse<IAuth> = await axios.post<IAuth>("https://dummyjson.com/auth/login", data, config)
            dispatch({type: LoginActionTypes.LOGIN_SUCCESS, payload: response.data.token})
        } catch (e) {
            dispatch({type: LoginActionTypes.LOGIN_ERROR, payload: "Неверный логин или пороль"})
        }
    }
}

export function logout(){
    return (dispatch: Dispatch<LoginAction>)=>dispatch({type: LoginActionTypes.LOGIN_RESET})
}