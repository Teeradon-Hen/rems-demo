import React from 'react'
import { connect } from 'react-redux'
import EditExample from '../components/Example/EditExample'
import ExampleList from '../components/Example/ExampleList'
import NewExample from '../components/Example/NewExample'
import { getAll } from '../reducers/Example/ExampleListReducer'
import { RootState } from '../store'
const style = {
    margin: 10,
    backgroundColor: 'blue',
    padding: 10
}



export default function ExamplePage() {

    return (
        <div>
            <h1>ExamplePage</h1>
            <div style={style}>
                <NewExample />
            </div>
            {/* <div style={style}>
                <EditExample />
            </div> */}
            <div style={style}>
                <ExampleList />
            </div>
        </div>
    )
}