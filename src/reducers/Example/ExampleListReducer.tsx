import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { ExampleListType, ExampleType } from '../../dataType/Example'

const initialState: ExampleListType = {
    list: [{title:"00", content:"00", id:1}]
}

export const counterSlice = createSlice({
    name: 'exampleList',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<ExampleType>) => {
            const list = state.list
            state.list = [...list, { ...action.payload, id: list.length + 1 }]

        }
    },

})

export const { addList } = counterSlice.actions

export const getAll = (state: RootState) => state.example.exampleList.list

export const getById = (state: RootState, id : number) => state.example.exampleList.list.find(e => e.id == id)

export default counterSlice.reducer