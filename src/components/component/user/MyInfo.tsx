import React from 'react';
import { FormWarp } from '../../../styles/AuthStyles';
import { CommonWrap ,CommonContent} from '../../../styles/CommonStyles';

interface MyInfoProps {
    onClick:() => void;
    onChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onSumbit:(event:React.FormEvent<HTMLFormElement>) => void;
    user:{email:string,nickname:string,phoneNumber:string,roles:{name:string}};
}


function MyInfo ({onClick,user,onChange,onSumbit}:MyInfoProps) {
    return(
        <CommonWrap>
            <CommonContent>
                <FormWarp>
                    <h2>나의 정보</h2>
                    <form onSubmit={onSumbit}>
                        <input type="text" value={user.email} disabled/>
                        <input type="text" name="nickname" defaultValue={user.nickname} onChange={e=> onChange(e)} />
                        <input type="text" value={user.phoneNumber} disabled/>
                        <input type="text" value={user.roles.name === 'ADMIN' ? '관리자' : '유저'} disabled/>
                        <button type="submit">닉네임 변경</button>
                    </form>
                    <button type="button" onClick={onClick}>로그아웃</button>
                </FormWarp>
        </CommonContent>
        </CommonWrap>
    );
}

export default MyInfo;