import { WrappedFieldProps } from 'redux-form'
import TextField from '@mui/material/TextField';

interface TextFieldProps {
    label: string,
    type: string,
}

export const TextFieldd = (props: (TextFieldProps & WrappedFieldProps)) => {
    const { input, label, type, meta: { touched, error } } = props
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )
}
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import { useStyles } from '../../assets/styles/InputStyles';
const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
            
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
import { Input } from '@mui/material';
export default function Palette() {
    return (
        <ThemeProvider theme={theme}>
            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>
        </ThemeProvider>
    );
}
export const TextField1 = () => {// (props: (TextFieldProps & WrappedFieldProps)) => {
    // const { input, label, type, meta: { touched, error } } = props
    // const classs = useStyles()
    // classs
    return (
        
        <ThemeProvider theme={theme}>
            <InputLabel >assadasd</InputLabel>

            <TextField
                  error
                id="standard-error-helper-text"
                //   label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                //   variant="filled"

                color="secondary" 
                InputProps={{ inputProps: { style: { backgroundColor: theme.palette.common.white , color:'blue'}}}}
                
            />
        </ThemeProvider>

    )
}