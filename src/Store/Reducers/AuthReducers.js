const initialValues = {
    email: '',
    senha: ''
}

export default function auth(state = initialValues, action) {

    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload)
            return {
                ...state,
                authenticate: action.payload
            }
        default:
            return state
    }
}