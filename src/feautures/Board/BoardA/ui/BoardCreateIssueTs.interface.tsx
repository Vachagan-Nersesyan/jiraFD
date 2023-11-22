import { IssuesType } from "entities/issues/issuesReducerTs.interface";
import { ProjectType } from "entities/project/projectReducerTs.interface";

export interface OwnProps {
    currentProject: ProjectType,
    status: string,

    foo: (obj: IssuesType, uniqtext: string) => void,
    boardIssueArr: Array<IssuesType>,

    // uxxel
    boardArr: any
}