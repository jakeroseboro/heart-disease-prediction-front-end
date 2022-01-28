import { Card, Form, Input, Button, } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { json } from 'stream/consumers';

export const LoginForm = () => {
    const [mode, setMode] = useState("login");
    const onFinish = (values: any) => {
        const user = {
            username: values.username,
            password: values.password
        }
        login(user)
    }

    const login = async(user:any) =>{
        if(mode === "login"){
            await axios.post("https://heart-disease-ml-api.herokuapp.com/login", user).then(r => localStorage.setItem('token', r.data.auth_token))
        }
        else if(mode === "signUp"){
            await axios.post("https://heart-disease-ml-api.herokuapp.com/signup", user).then(r => localStorage.setItem('token', r.data.auth_token))
        }
        window.location.reload()
    }
    return(
        <>
        {mode === "login" ?
        <div className='d-flex cards justify-content-center'>
            <Card title="Login" bordered={false} style={{border: '1px solid rgb(187, 40, 40)'}}>
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                >
                    <Form.Item 
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item 
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button type="primary" onClick={()=>{setMode("signUp")}} style={{margin: 15}}>
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </Card>  
            </div>  
            :
            <div className='d-flex cards justify-content-center'>
            <Card title="Signup" bordered={false} style={{border: '1px solid rgb(187, 40, 40)'}}>
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                >
                    <Form.Item 
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item 
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{margin: 15}}>
                            Submit
                        </Button>
                        <Button type="primary" onClick={()=>{setMode("login")}}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>  
        }
        </>
    )
}