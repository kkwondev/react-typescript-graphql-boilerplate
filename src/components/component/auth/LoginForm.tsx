import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import {CommonContent, CommonWrap} from '../../../styles/CommonStyles';
import {FormWarp} from '../../../styles/AuthStyles';
import { Link } from 'react-router-dom';

interface loginFormProps {
    input:{email:string,password:string},
    onChangeData:(event : ChangeEvent<HTMLInputElement>) => void;
    onSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
    loginRequired:any;
}

function LoginForm({input,onChangeData,loginRequired,onSubmit,history}:loginFormProps & RouteComponentProps) {
    const {email,password} = input;
    const currentUser = localStorage.getItem('Authorization')
    useEffect(() => {
        if (currentUser) {
            history.push('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        //TODO: 로그인폼 퍼블리싱 해야함
        <CommonWrap>
            <CommonContent>
                <FormWarp>
                    <h2>로그인</h2>
                    <form onSubmit={onSubmit}>
                        <input 
                        type="email" 
                        name="email" 
                        value={email}
                        placeholder="이메일" 
                        onChange={e => onChangeData(e)}
                        />
                        <input
                        className="loginPassword"
                        type="password" 
                        name="password"
                        placeholder="비밀번호" 
                        value={password}
                        onChange={e => onChangeData(e)}
                        />
                        <button type="submit">로그인</button>
                        <Link to="/signup">
                            <button type="button" className="lastBtn">회원가입</button>
                        </Link>
                    </form>
                </FormWarp>
        </CommonContent>
        </CommonWrap>
    );
}

export default withRouter(LoginForm);