import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_NICKNAME } from "../apollo/querys/User";


interface updateUser {
    nickname:string,
    status:string,
}

export default function useMyInfo() {
    const [updateNickname, setUpdateNickname] = useState<string>('')
    const [updateUser] = useMutation<updateUser>(UPDATE_NICKNAME);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUpdateNickname(event.target.value)
    }

    const handleSumbit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateUser({variables:{nickname:updateNickname}}).then((response) => {
            console.log(response.data);
            alert('변경 성공')

        }).catch((e) => {
            alert(e)
        })
    }
    return{
        handleChange,
        handleSumbit,
    }
}