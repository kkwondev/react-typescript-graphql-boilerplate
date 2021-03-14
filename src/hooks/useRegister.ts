import { useMutation } from "@apollo/client";
import { useState } from "react";
import { REGISTER_REQUEST } from '../apollo/querys/Auth';

interface registerInput {
    email:string;
    password:string;
    passwordComfirm:string;
    phoneNumber:string;
    nickname:string;
}

export default function useRegister() {
    const [registerData, setRegisterData] = useState<registerInput>({
        email:'',
        password:'',
        passwordComfirm:'',
        phoneNumber:'',
        nickname:'',
    })
    const [createUser] = useMutation<registerInput>(REGISTER_REQUEST)

    const handleChangeData = (event:React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit =(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(
            registerData.email,
            registerData.password,
            registerData.passwordComfirm,
            registerData.phoneNumber,
            registerData.nickname === '') {
            alert('빈칸없이 입력하세요')
            return;
        }
        if(registerData.passwordComfirm !== registerData.password) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
            return;
        }
        createUser({variables:{input:
            {
                email:registerData.email,
                password:registerData.password,
                phoneNumber:registerData.phoneNumber, 
                nickname:registerData.nickname
            }
        }}).then((response) => {
            alert('회원가입 완료')
            console.log(response.data)
        }).catch((e)=> {
            console.error(e);
            alert(e)
        })
    }
    return{
        registerData,
        handleChangeData,
        handleSubmit
    }
}

