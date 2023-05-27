import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { addList, getAll } from '../../reducers/Example/ExampleListReducer';
import { RootState, } from '../../store'
import { ExampleListType } from '../../dataType/Example';
import ExampleForm from "./ExampleForm"
import { setID } from '../../reducers/Example/ExampleSelectedID';

export default function ExampleList() {
    const exampleList = useSelector((state: RootState) => state.example.exampleList.list)
    console.log(exampleList)
    const id = useSelector((state: RootState) => state.example.ExampleSelectedID.selectedId)
    const dispatch = useDispatch()
    console.log(id)

    return (
        <div>
            <>
                <h2>ExampleList</h2>
                {exampleList.map(e => (
                    <h4 onClick={() => dispatch(setID(e.id))}>{`${e.id}. ${e.title} ${e.content}`}</h4>
                ))}
                <button onClick={() => dispatch(setID(100))}>clear selected id</button>
            </>
        </div>
    )
}


