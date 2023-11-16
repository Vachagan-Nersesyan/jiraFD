import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

const initialState: InitialStateType = {

    info: {
        picture: '',
        itSupportManager: '',
        department: '',
        organization: '',
        location: '',
        contact: 'vach.nersesyan@bk.ru'
    }


}

interface InitialStateType {
    info: userInfo

}

interface userInfo {
    picture: string,
    itSupportManager: string,
    department: string,
    organization: string,
    location: string,
    contact: string
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserInfo(state: InitialStateType, action: PayloadAction<{ infoName: string, str: string }>) {

            switch (action.payload.str) {

                case 'Your location': {
                    state.info.location = action.payload.infoName
                    break
                }

                case 'IT Support Manager': {
                    state.info.itSupportManager = action.payload.infoName
                    break
                }

                case 'Your department': {
                    state.info.department = action.payload.infoName
                    break
                }

                case 'Your organization': {
                    state.info.organization = action.payload.infoName
                    break
                }

                case 'email': {
                    state.info.contact = action.payload.infoName
                    break
                }

                default: break
            }
            console.log(action.payload, current(state))
        },
    }
})

export const { changeUserInfo } = userSlice.actions


export default userSlice.reducer



