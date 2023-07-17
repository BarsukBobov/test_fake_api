export interface LoginState {
    token: null | string,
    error: string;
}

export enum LoginActionTypes {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    LOGIN_RESET="LOGIN_RESET"
}


interface LoginSuccessAction {
    type: LoginActionTypes.LOGIN_SUCCESS,
    payload: string
}

interface LoginErrorAction {
    type: LoginActionTypes.LOGIN_ERROR,
    payload: string
}

interface LoginResetAction {
    type: LoginActionTypes.LOGIN_RESET,
}


export type LoginAction = LoginSuccessAction|LoginErrorAction|LoginResetAction
export interface IAuth{
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
}