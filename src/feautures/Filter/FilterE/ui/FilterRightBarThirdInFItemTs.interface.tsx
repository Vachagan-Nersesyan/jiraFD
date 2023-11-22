import { IssuesType } from "entities/issues/issuesReducerTs.interface"
import { ChangeIssNameFuncType } from "pages/BoardComp/ui/BoardTs.interface"

export interface SubIssueOwnPropsType {
    subIssueInfo: IssuesType,
    changeIssueInnerIssueSummary: ({ str, id }: ChangeIssueInnerIssueSummaryArgsType) => void

}

export interface ChangeIssueInnerIssueSummaryArgsType {
    str: string,
    id: string
}

export interface ChangeCommentIssueFuncType {
    str: string,
    id: number,
    boardName: string,
    commId: number
}

export interface ChangeIssDescriptionFuncType {
    str: string,
    id: number,
    boardName: string
}

export interface OwnProps {

}

export interface MapStateToPropsType {
    getBoardIssueItem: IssuesType,
    issuesInnerItems: Array<IssuesType>
}

export interface MapDispatchToPropsType {
    changeIssNameFunc: ({ str, id, boardName }: ChangeIssNameFuncType) => void,
    changeIssDescriptionFunc: ({ str, id, boardName }: ChangeIssDescriptionFuncType) => void,
    addCommentIssueFunc: ({ str, id, boardName }: ChangeIssDescriptionFuncType) => void,
    changeCommentIssueFunc: ({ str, id, boardName, commId }: ChangeCommentIssueFuncType) => void,
    deleteCommentIssueFunc: ({ str, id, boardName, commId }: ChangeCommentIssueFuncType) => void,
    addIssueInnerIssueFunc: (obj: IssuesType) => void,
    changeIssueInnerIssueSummary: ({ str, id }: ChangeIssueInnerIssueSummaryArgsType) => void
}
