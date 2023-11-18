import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import projectSlice from '../project/projectReducer'
import issuesSlice from '../issues/issuesReducer'
import userSlice from '../user/userReducer'
// import boardSlice  from './boardsReducer'

import thunkMiddleware, { ThunkAction } from 'redux-thunk'




const store = configureStore({
    reducer: {
        project: projectSlice,
        issues: issuesSlice,
        user: userSlice
        // boards : boardSlice
    }
})

type RootReducerType = typeof store.getState
export type AppStateType = ReturnType<RootReducerType>


type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: Array<any>) => any }> = ReturnType<PropertiesTypes<T>>



export type BaseThunkType<AT extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>



export default store