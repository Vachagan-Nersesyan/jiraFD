import { IssuesType } from "entities/issues/issuesReducerTs.interface"
import { BoardArrType, ProjectType } from "entities/project/projectReducerTs.interface"
import { IssueToBoardsFuncArgsType } from "pages/BoardComp/ui/BoardTs.interface"

export interface OwnProps { }

export interface MapStateToPropsType {
    issuesArr: Array<IssuesType>,
    boardsArr: Array<BoardArrType>,
    projectArr: Array<ProjectType>,
    boardUniqName: string,
    projectItem: ProjectType
}

export interface MapDispatchToPropsType {
    addIssueToBoardsFunc: ({ obj, uniqtext }: IssueToBoardsFuncArgsType) => void,
    addingIssueToCurrentBoard: ({ obj, str, projectName }: AddingIssueToCurrentBoardArgsType) => void,

}

export interface AddingIssueToCurrentBoardArgsType {
    obj: IssuesType,
    str: string,
    projectName: string
}


export interface IssueValueType {
    issueName: string
}