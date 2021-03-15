import styled from 'styled-components';


export const CommonWrap = styled.section`
    width:100%;
    height:100%;
    position:reletive;
`;
export const CommonContent = styled.article`
    width:800px;
    margin:0 auto;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    @media screen and (max-width:800px) {
        width:100%;
        position:static;
        top:0;
        left:0;
        transform:translate(0,0);
    }
`;