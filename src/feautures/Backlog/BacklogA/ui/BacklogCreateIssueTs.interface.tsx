import { IssuesType } from "entities/issues/issuesReducerTs.interface";

export interface OwnProps {
    currentProjectName: string,
    backlogCreateIssueCompFunc: (obj: IssuesType) => void,
}