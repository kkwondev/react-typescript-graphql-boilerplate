import React, { useEffect } from 'react';
import RegisterForm from '../component/auth/RegisterForm';
import useRegister from '../../hooks/useRegister';
import { RouteComponentProps } from 'react-router-dom';


function SignupPage({history}:RouteComponentProps) {
    const {
        registerData,
        handleChangeData,
        handleSubmit,
    } = useRegister();

    const token = localStorage.getItem('Authorization')
    useEffect(() => {
        if (token) {
            history.push('/signin')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])
    return(
        <RegisterForm 
        registerData={registerData} 
        onChange={handleChangeData} 
        onSubmit={handleSubmit}
        />
    );
}

export default SignupPage;