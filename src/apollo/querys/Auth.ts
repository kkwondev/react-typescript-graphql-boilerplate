import {gql} from '@apollo/client'

export const LOGIN_REQUEST = gql`
    mutation login($input: UserLogin) {
        login(input:$input)
    }
`

export const REGISTER_REQUEST = gql`
    mutation createUser($input: UserInput) {
        createUser(input:$input){
            email,
            password,
            nickname,
            phoneNumber
        }
    }
`