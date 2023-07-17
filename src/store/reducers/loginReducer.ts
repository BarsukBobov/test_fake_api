import {LoginState, LoginActionTypes,LoginAction} from "../../types/login";

const initState: LoginState = {
    token: null,
    error: "no error"
}

export function loginReduce(state: LoginState = initState, action: LoginAction): LoginState {
    switch (action.type) {
        case LoginActionTypes.LOGIN_SUCCESS:
            return { error: "no error", token: action.payload}
        case LoginActionTypes.LOGIN_ERROR:
            return {error: action.payload, token: null}
        case LoginActionTypes.LOGIN_RESET:
            return { error: "no error", token: null}
        default:
            return state
    }
}