import { IssuesType } from "entities/issues/issuesReducerTs.interface";
import { BoardArrType, ProjectType } from "entities/project/projectReducerTs.interface";
import { AddIssueFlagFuncArgsType, DeleteIssueFuncArgsType } from "pages/BoardComp/ui/BoardTs.interface";

export interface BackblogandBoardFOwnProps { }

export interface AddIssueBacklogToBoardFuncArgsType {
    obj: IssuesType,
    projectName: string,
}


export interface AddIssueToBacklogArrArgsType {
    str: string,
    obj: IssuesType
}


export interface OwnProps { }

export interface MapStateToPropsType {
    boardArr: Array<BoardArrType>,
    getBoardIssueItem: IssuesType,
    backlogIssueArr: Array<IssuesType>,
    currentProjectName: string,
    backlogSecIssueArr: Array<IssuesType>,
    currentProject: ProjectType
}

export interface MapDispatchToPropsType {
    deleteIssueFunc: ({ id, boardName }: DeleteIssueFuncArgsType) => void,
    addIssueFlagFunc: ({ id, boardName }: AddIssueFlagFuncArgsType) => void,
    changeGetBoardIssueItemFunc: (obj: IssuesType) => void,
    setBacklogIssueArr: (arr: Array<IssuesType>) => void,
    addingIssueInBacklogFunc: (obj: IssuesType) => void,
    addIssueToBacklogArr: ({ str, obj }: AddIssueToBacklogArrArgsType) => void,
    addIssueBacklogToBoardFunc: ({ obj, projectName }: AddIssueBacklogToBoardFuncArgsType) => void,
    addFlagToBacklogIssueFunc: (str: string) => void,
    deleteFlagToBacklogIssueFunc: () => void
}