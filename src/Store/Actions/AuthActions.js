export function login(email, senha){
    return {
        type: 'LOGIN',
        payload: {email: email, senha: senha}
    };
}