import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    post: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    },
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {

    }
})

export  const postReducer = postSlice.reducer