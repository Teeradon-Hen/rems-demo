import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { TextFieldd } from '../Form/Fields'
import { ExampleType } from '../../dataType/Example'

function ExampleFrom(props: InjectedFormProps<ExampleType, {}, string>) {
    const { handleSubmit, pristine, submitting, reset } = props
    console.log(props);

    return (
        <form onSubmit={handleSubmit}>
            <Field name="title" label={"title"} type={"text"} component={TextFieldd} />
            <Field name="content" label={"content"} type={"text"} component={TextFieldd} />
            <button disabled={pristine || submitting} > submit</button>
            <button disabled={pristine || submitting} onClick={reset}> clear</button>
        </form>
    )
}

export default reduxForm<ExampleType>({ form: "EXAMPLE_FORM" })(ExampleFrom)
