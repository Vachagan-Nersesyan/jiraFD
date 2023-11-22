import { IssuesType } from "entities/issues/issuesReducerTs.interface";

export interface OwnProps {

    currentProjectName: string,
    backlogSecCreateIssueCompFunc: (str: string, obj: IssuesType) => void

}