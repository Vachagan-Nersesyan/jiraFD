export interface InitialStateType {
    filteredIssuesInitArr: Array<IssuesType>,
    filteredIssuesArr: Array<IssuesType>,
    filterIssueName: string,
    loading: boolean,
    error: boolean
}


export interface IssuesType {
    id: number,
    uniqId: string,
    issuesProject: string,
    issueTypeName: string,
    issueTypePic: any,
    issueStatus: string,
    summary: string,
    descriptionText: string,
    description?: Array<string>,
    reporter: string,
    assignee: string,
    storyPoint: number,
    issueComments: Array<IssuesCommentsType>,
    issuesChilds: Array<IssuesType>,
    flag: boolean,
    issueLabel: Array<IssuesLabelType>,
    issueShortName: string,
    doneRecently: string,
    currentDate: string,

    isSubIssue: boolean,
    issuesInnerItems: Array<IssuesType>
}

export interface IssuesCommentsType {
    id: number,
    text: string,
    name: string,
    date: string,
    picture: string
}

interface IssuesLabelType {
    id: number,
    text: string
}
