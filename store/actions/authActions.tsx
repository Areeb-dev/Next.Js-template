import { LOGIN_USER } from '../types'
import { User } from '../../utils/interfaces'


const loginUser = (user: User) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export {
    loginUser
}