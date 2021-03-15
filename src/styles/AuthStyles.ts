import styled from 'styled-components';

export const FormWarp = styled.article`
    width:100%;
    height:500px;
    h2 {
        text-align:center;
        border-bottom:1px solid #ccc;
        padding:10px 0;
        letter-spacing:-1.5px;
    }
    form {
        padding:0 10px;
    }
    input {
        width:100%;
        height:50px;
        padding:0 10px;
        outline:none;
        border-radius:5px;
        border:1px solid #ccc;
    }
    input:focus {
        border:2px solid skyblue;
    }
    button {
        width:100%;
        height:50px;
        border:none;
        background:skyblue;
        color:#fff;
        font-size:18px;
        letter-spacing:-1.5px;
        cursor:pointer;
        margin-top:20px;
    }
    button.lastBtn {
        background:#000;
        margin-top:50px;
    }
`;