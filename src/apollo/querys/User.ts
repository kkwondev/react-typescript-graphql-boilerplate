import {gql} from '@apollo/client'

export const UPDATE_NICKNAME = gql`
    mutation updateUser($nickname:String!) {
        updateUser(nickname:$nickname){
            nickname,
            status
        }
    }
`;