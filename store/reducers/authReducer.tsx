import { LOGIN_USER } from '../types'

interface Action {
    type: string;
    payload: any;
}

const reducer = (state: any = { users: {} }, action: Action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return { ...state, user: action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer