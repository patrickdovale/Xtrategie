import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function InputText(props) {

    const [show, setShow] = useState(false);

    return (
        <>
            <TextField
                id={props.label}
                label={props.label}
                name={props.name}
                type={props.password ? (show ? 'text' : 'password') : props.type}
                value={props.value}
                onChange={props.onChange}
                error={props.error || false}
                helperText={props.error ? props.helperText : ""}
                variant="filled"
                margin="dense"
                fullWidth
                required
                InputProps={{
                    endAdornment:
                        props.label.toLowerCase() === 'senha' ?
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShow(!show)}
                                    edge="end"
                                >
                                    {show ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            : null
                }}

            />
        </>
    )
}