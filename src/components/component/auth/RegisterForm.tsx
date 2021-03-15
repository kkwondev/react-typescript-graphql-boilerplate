import React from 'react';
import { Link } from 'react-router-dom';
import { FormWarp } from '../../../styles/AuthStyles';
import { CommonContent, CommonWrap } from '../../../styles/CommonStyles';

interface registerProps {
    registerData:{email:string,password:string,passwordComfirm:string,nickname:string,phoneNumber:string};
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
}
function RegisterForm({registerData,onChange,onSubmit}:registerProps) {
    return(
        //TODO: Register 퍼블리싱 해야함
        <CommonWrap>
            <CommonContent>
                    <FormWarp>
                        <h2>회원가입</h2>
                        <form onSubmit={onSubmit}>
                            <input type="email" name="email" placeholder="이메일" onChange={e => onChange(e)}/>
                            <input type="password" name="password" placeholder="비밀번호" onChange={e => onChange(e)}/>
                            <input type="password" name="passwordComfirm"  placeholder="비밀번호 확인" onChange={e => onChange(e)}/>
                            <input type="text" name="phoneNumber" placeholder="휴대폰 번호" onChange={e => onChange(e)}/>
                            <input type="text" name="nickname" placeholder="닉네임" onChange={e => onChange(e)}/>
                            <button type="submit">회원가입</button>
                            <Link to="/signin">
                                <button type="button" className="lastBtn">로그인</button>
                            </Link>
                        </form>
                    </FormWarp>
        </CommonContent>
        </CommonWrap>
    );
}

export default RegisterForm;