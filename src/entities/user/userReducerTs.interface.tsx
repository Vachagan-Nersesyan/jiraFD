export interface InitialStateType {
    info: userInfo

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