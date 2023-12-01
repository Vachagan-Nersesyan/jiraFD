import { IssuesCommentsType, IssuesType } from "entities/issues/issuesReducerTs.interface";
import { ChangeCommentIssueFuncType } from "feautures/Filter/FilterE/ui/FilterRightBarThirdInFItemTs.interface";

export interface IssueCommentCompOwnProps {
    issueCommentInfo: IssuesCommentsType,
    getBoardIssueItem: IssuesType,
    // changeCommentIssueFunc: ({ str, id, boardName, commId }: ChangeCommentIssueFuncType) => void,
    // deleteCommentIssueFunc: ({ str, id, boardName, commId }: ChangeCommentIssueFuncType) => void


}
