export interface InitialStateType {
    info: userInfo,
    loading: boolean,
    error: boolean

}

export interface userInfo {
    picture: string | undefined | null,
    name: string | undefined | null,
    email: string | undefined | null,

    itSupportManager: string,
    department: string,
    organization: string,
    location: string,
}