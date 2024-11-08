import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import { Field, Form, Formik } from "formik";

export function Login() {
    const navigate = useNavigate();
    return (
        <center className='center-login'>
        <div className="login-form">
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
        >
            <center>
            <Form>
                <h1 style={{ textAlign: 'center', color: 'black', fontSize: '24px' , fontWeight: '700' }} > Đăng Nhập Ngay</h1>
                <br />
                <Field type="text" name="username" placeholder="Nhập địa chỉ Email" className="input-field" />
                <Field type="password" name="password" placeholder="Mật Khẩu" className="input-field" />
                <button type="submit" className="login-button">Đăng Nhập</button>
            </Form>
            </center>
        </Formik>
        <Link to="/forgot-password" className="forgot-password-link">Quên Mật Khẩu</Link>
        <hr className="separator" />
        <Link to="/register" className="create-account-link">
            <button className="create-account-button">Đăng kí ngay</button>
        </Link>
    </div>
    </center>
    );
}