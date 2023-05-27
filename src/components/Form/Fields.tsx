import { WrappedFieldProps } from 'redux-form'

interface TextFieldProps {
    label: string,
    type: string,
}

export const TextField = (props: (TextFieldProps & WrappedFieldProps)) => {
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