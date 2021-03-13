
import React from 'react';
import LoginForm from '../component/auth/LoginForm';
import useLogin from '../../hooks/useLogin';

function SigninPage() {
    const {
        loginData,
        loginRequired,
        handleChangeData,
        handleSubmit,
    } = useLogin();
    return(
        <LoginForm 
        input={loginData}
        onChangeData={handleChangeData}
        loginRequired={loginRequired} 
        onSubmit={handleSubmit}/>    
    );
}

export default SigninPage;