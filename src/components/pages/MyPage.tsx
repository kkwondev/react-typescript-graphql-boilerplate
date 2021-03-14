

import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { withRouter,RouteComponentProps } from 'react-router';
import { LOGIN_CHECK } from '../../apollo/querys/Auth';
import useLogout from '../../hooks/useLogout';


function MyPage({history}:RouteComponentProps) {
    const {handleLogout} = useLogout();
    const currentUser = useQuery(LOGIN_CHECK);
    const user = currentUser.data?.user;

    const token = localStorage.getItem('Authorization')
    useEffect(() => {
        if (!token) {
            history.push('/signin')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    if (!user) return null;
    return(
        <>
        <p><strong>이메일 :</strong> {user.email}</p>
        <p><strong>닉네임 :</strong> {user.nickname}</p>
        <p><strong>휴대폰번호 :</strong> {user.phoneNumber}</p>
        <p><strong>등급 : </strong>{user.roles.name === 'ADMIN' ? '관리자' : '유저'}</p>
        <button type="button" onClick={handleLogout}>로그아웃</button>
        </>
    );
}

export default withRouter(MyPage);