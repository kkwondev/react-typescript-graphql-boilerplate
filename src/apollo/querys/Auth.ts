import {gql} from '@apollo/client'

export const LOGIN_REQUEST = gql`
    mutation login($input: UserLogin) {
        login(input:$input)
    }

`