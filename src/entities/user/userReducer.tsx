import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType } from './userReducerTs.interface'

const initialState: InitialStateType = {

    info: {
        picture: '',
        name: '',
        email: '',


        itSupportManager: '',
        department: '',
        organization: '',
        location: '',
    }


}



enum UserResponse {
    location = 'Your location',
    manager = 'IT Support Manager',
    department = 'Your department',
    organization = 'Your organization'
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserInfo(state: InitialStateType, action: PayloadAction<{ infoName: string, str: string }>) {

            switch (action.payload.str) {

                case UserResponse.location: {
                    state.info.location = action.payload.infoName
                    break
                }

                case UserResponse.manager: {
                    state.info.itSupportManager = action.payload.infoName
                    break
                }

                case UserResponse.department: {
                    state.info.department = action.payload.infoName
                    break
                }

                case UserResponse.organization: {
                    state.info.organization = action.payload.infoName
                    break
                }


                default: break
            }
            console.log(action.payload, current(state))
        },
        changeUserOtherInfoFBFunc(state: InitialStateType, action: PayloadAction<{ name: string | undefined | null, picture: string | undefined | null, email: string | undefined | null }>) {
            state.info.picture = action.payload.picture
            state.info.name = action.payload.name
            state.info.email = action.payload.email

        }
    }
})

export const { changeUserInfo, changeUserOtherInfoFBFunc } = userSlice.actions


export default userSlice.reducer



