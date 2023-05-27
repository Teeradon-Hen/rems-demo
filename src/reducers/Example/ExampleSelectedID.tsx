import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { ExampleListType, ExampleType } from '../../dataType/Example'

interface idType { selectedId: number }
const initialState: idType = {
    selectedId: 0
}

export const counterSlice = createSlice({
    name: 'selectedId',
    initialState,
    reducers: {
        setID: (state, action: PayloadAction<number>) => {
            state.selectedId = action.payload

        }
    },

})

export const { setID } = counterSlice.actions

export const getselectedID = (state: RootState) => state.example.ExampleSelectedID.selectedId


export default counterSlice.reducer