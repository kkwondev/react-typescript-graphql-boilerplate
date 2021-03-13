import React, { ChangeEvent, FormEvent } from 'react';

interface loginFormProps {
    input:{email:string,password:string},
    onChangeData:(event : ChangeEvent<HTMLInputElement>) => void;
    onSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
    loginRequired:any;
}

function LoginForm({input,onChangeData,loginRequired,onSubmit}:loginFormProps) {
    const {email,password} = input;
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

export default LoginForm;