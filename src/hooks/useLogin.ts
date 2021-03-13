import { useMutation } from '@apollo/react-hooks';
import  { FormEvent, useState } from 'react';
import { LOGIN_REQUEST } from '../apollo/querys/Auth';

interface loginInput {
    email:string,
    password:string
}

interface token {
    login:string
}

export default function useLogin() {
    const [loginData, setLoginData] = useState<loginInput>({
        email:'',
        password:'',
    })
    const [login] = useMutation<token>(LOGIN_REQUEST)

    const [ loginRequired, setLoginRequired ] = useState<any>(null);


    const handleChangeData = (event:React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(loginData.email === '') {
            alert('이메일을 입력하세요.')
            return;
        }
        if(loginData.password === '') {
            alert('패스워드를 입력하세요.')
            return;
        }
        console.log(loginData.email)
        console.log(loginData.password)
        login({variables:{input:loginData}}).then((response) => {
            setLoginRequired(response.data?.login);
            console.log(response.data?.login);
            // eslint-disable-next-line no-useless-concat
            localStorage.setItem("authorization","Bearer" + " " + response.data?.login as string);
            alert('로그인 완료');
            setLoginData({
                email:'',
                password:'',
            })
        }).catch((e) => {
            console.error(e)
            alert(e)
        })

    }
    return {
        loginData,
        loginRequired,
        handleChangeData,
        handleSubmit,
    }
}