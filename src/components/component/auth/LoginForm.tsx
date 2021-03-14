import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

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
        <article className="formWrap">
            <form onSubmit={onSubmit}>
                <input 
                type="email" 
                name="email" 
                value={email}
                placeholder="EMAIL" 
                onChange={e => onChangeData(e)}
                />
                <input 
                type="password" 
                name="password"
                placeholder="PASSWORD" 
                value={password}
                onChange={e => onChangeData(e)}
                />
                <button type="submit">SIGN IN</button>
            </form>
        </article>
    );
}

export default withRouter(LoginForm);