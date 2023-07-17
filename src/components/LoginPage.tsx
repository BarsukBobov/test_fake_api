import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Navigate} from "react-router";
import {authAPI} from "../store/action_creator/login";

const LoginPage: React.FC = () => {
    const {token,error} = useTypedSelector(state=>state.login)
    const {authAPI} = useActions()
    const onFinish = (values: any) => {
        authAPI(values.username, values.password)
        if (error_message) error_message.classList.add("invisible")
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    if (token){
        return(<Navigate to="/private"/>)

    }

    const error_message:HTMLElement|null=document.getElementById("error")
    if (error!=="no error"){
        if (error_message) error_message.classList.remove("invisible")
    }

    return (
        <Form className="absolute translate-x-1/4 left-1/3 top-1/3"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Логин"
                name="username"
                rules={[{ required: true, message: 'Введите имя пользователя!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input.Password />
            </Form.Item>
            <div className="text-red-500 flex justify-end invisible" id="error">{error}</div>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" className="bg-blue-500 ">
                    Подтвердить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;