import React from 'react'
import { connect } from 'react-redux'
import { addList, getAll,getById } from '../../reducers/Example/ExampleListReducer';
import { RootState, AppDispatch } from '../../store'
import { ExampleType } from '../../dataType/Example';
import ExampleForm from "./ExampleForm"


const mapStateToProps = (state: RootState) => ({
    initialValues: getById(state, 0) 
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onSubmit: (data: ExampleType) => {
        console.log(data)
        dispatch(addList(data))
    },
})

let EditExampleFrom = connect(mapStateToProps, mapDispatchToProps)(ExampleForm)

export default function EditExample() {
    return (
        <div>
            <h2>EditExampleFrom</h2>
            <EditExampleFrom />
        </div>
    )
}
