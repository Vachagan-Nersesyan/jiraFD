import { InitialStateType, IssuesType } from "entities/issues/issuesReducerTs.interface"

// ystex nayel ete sxal lini

import { BoardArrType, InitialStateBoardOverlayType, ProjectType } from "entities/project/projectReducerTs.interface"
import { AddingBoardToProjectArgsType } from "pages/BoardComp/ui/BoardTs.interface"

export interface OwnProps {
}

export interface MapStateToPropsType {
    boardArr: Array<BoardArrType>,
    projectArr: Array<ProjectType>,
    currentBoard: InitialStateBoardOverlayType,
    board: InitialStateBoardOverlayType,
    issueFilterType: InitialStateType,
    allProjectsIssueArr: Array<IssuesType>
}

export interface MapDispatchToPropsType {
    changeGetBoardIssueItemFunc: (obj: IssuesType) => void,
    addingBoardToProject: ({ projectName, board }: AddingBoardToProjectArgsType) => void
    changeActualFilterdIssuesArrFunc: (arr: Array<IssuesType>) => void,
    setAllProjectsIssuesArr: (arr: Array<IssuesType>) => void
}