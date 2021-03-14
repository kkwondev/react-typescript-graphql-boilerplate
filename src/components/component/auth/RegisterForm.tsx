import React from 'react';

interface registerProps {
    registerData:{email:string,password:string,passwordComfirm:string,nickname:string,phoneNumber:string};
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
}
function RegisterForm({registerData,onChange,onSubmit}:registerProps) {
    return(
        //TODO: Register 퍼블리싱 해야함
        <article className="formWrap">
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="EMAIL" onChange={e => onChange(e)}/>
                <input type="password" name="password" placeholder="PASSWORD" onChange={e => onChange(e)}/>
                <input type="password" name="passwordComfirm"  placeholder="PASSWORD COMFIRM" onChange={e => onChange(e)}/>
                <input type="text" name="phoneNumber" placeholder="phoneNumber" onChange={e => onChange(e)}/>
                <input type="text" name="nickname" placeholder="NICKNAME" onChange={e => onChange(e)}/>
                <button type="submit">회원가입</button>
            </form>
        </article>
    );
}

export default RegisterForm;