import React from 'react';
import RegisterForm from '../component/auth/RegisterForm';
import useRegister from '../../hooks/useRegister';


function SignupPage() {
    const {
        registerData,
        handleChangeData,
        handleSubmit,
    } = useRegister();
    return(
        <RegisterForm 
        registerData={registerData} 
        onChange={handleChangeData} 
        onSubmit={handleSubmit}
        />
    );
}

export default SignupPage;