import { IssuesType } from "entities/issues/issuesReducerTs.interface";
import { BoardArrType, ProjectType } from "entities/project/projectReducerTs.interface";
import { AddDesctiptionIssFuncType, AddIssueFlagFuncArgsType, ChangeIssNameFuncType, DeleteIssueFuncArgsType, GetBoardIssueFuncType } from "pages/BoardComp/ui/BoardTs.interface";

export interface OwnProps {
    addDesctiptionIssFunc: ({ arr, id, boardName }: AddDesctiptionIssFuncType) => void,
    changeIssNameFunc: ({ str, id }: ChangeIssNameFuncType) => void,
    val2: IssuesType,
    currentProject: ProjectType,

    deleteIssueFunc: ({ id, boardName }: DeleteIssueFuncArgsType) => void,

    getBoardIssueFunc: ({ id, boardName }: GetBoardIssueFuncType) => void,

    // poxel

    val: BoardArrType,
    valueInd: number,

    addIssueFlagFunc: ({ id, boardName }: AddIssueFlagFuncArgsType) => void,
    getBoardIssueItem: IssuesType,

    // jnjel

    boardArr: any
}