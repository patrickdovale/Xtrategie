import React, { useState } from 'react';
import './index.css';

import TextField from '../../Components/TextField';
import DividerVertical from "../../Components/Divider/Index";
import Button from "../../Components/Button";
import Credits from '../../Components/Creditos';

import { connect } from 'react-redux';
import { login } from '../../Store/Actions/AuthActions';

function Login(props) {

    const Logo = "https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png";


    const [form, setForm] = useState({ email: '', password: '', error: false });

    function onChange(e) {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value, error: false })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if ((form.password !== '') && (form.password.match(/[a-z]+/)) && (form.password.match(/[A-Z]+/)) && (form.password.match(/[@#$%&;*]/)) && (form.email !== '')) {
            return (
                props.login(form.email, form.password)
            )
        }
        else {
            setForm({ ...form, error: true })
        }


    }

    return (
        <div className="login2">
            <div className="section-login2">

                <div className="section-logo">
                    <img src={Logo} alt="logo" />
                </div>

                <DividerVertical className="divider" />


                <div className="section-form">
                    <h3>Faça seu login</h3>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={onChange}
                        />
                        <TextField
                            label="Senha"
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            password
                            error={form.error}
                            helperText={'A senha deve conter (letras, números, e caracteres especiais)'}
                        />
                        <div className="control-btn">
                            <Button value='Entrar'
                                type='submit'
                                className="btn_entrar" />
                        </div>
                    </form>
                </div>
            </div>

            <footer>
                <Credits />
            </footer>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.authenticate,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login(email, password) {
            const action = login(email, password)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)