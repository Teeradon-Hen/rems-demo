import React from 'react'
import { connect } from 'react-redux'
import { addList, getAll, getById } from '../../reducers/Example/ExampleListReducer';
import { RootState, AppDispatch } from '../../store'
import { ExampleType } from '../../dataType/Example';
import ExampleForm from "./ExampleForm"
import { getselectedID } from '../../reducers/Example/ExampleSelectedID';

const mapStateToProps = (state: RootState) => {
    console.log(state)
    return({
    initialValues: getById(state, getselectedID(state))
})}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onSubmit: (data: ExampleType) => {
        console.log(data)
        dispatch(addList(data))
    },
})

let NewExampleFrom = connect(mapStateToProps, mapDispatchToProps)(ExampleForm)

export default function NewExample() {
    return (
        <div>
            <h2>NewExampleFrom</h2>
            <NewExampleFrom />
        </div>
    )
}
