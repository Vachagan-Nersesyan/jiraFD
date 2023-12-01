import { IssuesType } from "entities/issues/issuesReducerTs.interface"

export interface InitialStateType {
    projectArr: Array<ProjectType>,
    currentProject: string,
    currentBoard: InitialStateBoardOverlayType,
    getBoardIssueItem: IssuesType,
    currentProjectNumber: number,
    allProjectsIssueArr: Array<IssuesType>,
    backlogIssueArr: Array<IssuesType>,
    error: boolean,
    loading: boolean
}


export interface DeveloperInfoType {
    uniqId: string,
    id: number,
    name: string,
    picture: string,
    teamName?: string
}

export interface ProjectType {
    id: number,
    picture: string,
    name: string,
    key: string,
    projectType: string,
    lead: string,
    board: InitialStateBoardOverlayType,
    defaultAssignee: string,
    backlogSecIssueArr: Array<IssuesType>,
    boardUniqName: string,
    team?: TeamType
}

export interface TeamType {
    id: string,
    teamName: string,
    teamPeaoples: Array<DeveloperInfoType>
}



export interface BoardArrType {
    id: number,
    title: string,
    uniqText: string,
    boardIssue: Array<IssuesType>,
    boardLimit: number
}

export interface InitialStateBoardType {
    boardItem: InitialStateBoardOverlayType

}

export interface InitialStateBoardOverlayType {
    boardArr: Array<BoardArrType>,
    getBoardIssueItem: IssuesType,
    boardUniqName: string,
}

