import React from "react";
import {Button, Form, Grid, Input, notification, theme, Typography} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {useAppDispatch} from "../../app/store/store.ts";
import {IUser} from "../../interfaces/user.interface.ts";
import {signUp} from "../../app/slice/appSlice.ts";
import {useNavigate} from "react-router-dom";

const {useToken} = theme;
const {useBreakpoint} = Grid;
const {Text, Title} = Typography;

export const SignUp = React.memo(() => {
    const [form] = Form.useForm();
    const {token} = useToken();
    const screens = useBreakpoint();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const styles = {
        section: {
            display: "flex",
            alignItems: "center",
            padding: screens.md ? `10px 0px` : "0px",
        },
        container: {
            margin: "0 auto",
            padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
            maxWidth: "380px",
            width: "100%"
        },
        header: {
            marginBottom: token.marginXL
        },
        text: {
            color: token.colorTextSecondary
        },
        title: {
            fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
        },
    }

    const onFinish = async (values: IUser) => {
        const {email, password} = values;
        if (email && password) {
            try {
                await dispatch(signUp(values)).unwrap();
                navigate('/');
                notification.success({
                    message: 'Registration Successful',
                    description: 'You have successfully signed up!'
                });
            } catch (error) {
                notification.error({
                    message: 'Registration Failed',
                    description: 'An error occurred during sign up.'
                });
            }
        }
    };

    return <>
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div className="header" style={styles.header}>
                    <svg
                        width="30" height="29" viewBox="0 0 25 24" style={{marginTop: "15px"}}
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF"/>
                        <path d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z" fill="white"/>
                        <path d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z" fill="white"/>
                        <path d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z" fill="white"/>
                    </svg>
                    <Title style={styles.title}>Sign Up</Title>
                    <Text style={styles.text}>
                        Welcome back! Please enter your details below to
                        sign up.
                    </Text>
                </div>

                <Form form={form} onFinish={onFinish}>
                    <Form.Item name="email"
                               rules={[{type: "email", required: true, message: "Please input your Email!"}]}>
                        <Input prefix={<MailOutlined/>} placeholder="Email"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{required: true, message: "Please input your Password!",}]}>
                        <Input.Password
                            prefix={<LockOutlined/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item style={{marginBottom: "0px"}}>
                        <Button block type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    </>
})