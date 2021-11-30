import React from 'react';
import Button from '@mui/material/Button';

export default function Buttons(props) {
    return (
        <Button variant="outlined"
            style={{
                border: "2px solid",
                fontWeight: 'bold',
                marginTop: '60px'
            }}
            {...props}
            >
                {props.value}
        </Button>
    );
}