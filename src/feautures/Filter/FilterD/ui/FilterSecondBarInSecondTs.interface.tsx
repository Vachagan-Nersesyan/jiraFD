
export interface FilterRightBarNavBarSecCompType {
    filterIssueByProjectCompFunc: (obj: FilterObjType) => void,


}

export interface OwnProps {
    filterIssueByProjectCompFunc: (obj: FilterObjType) => void,
}


export interface FilterObjType {
    projectFilter: Array<string>,
    typeFilter: Array<string>
    statusFilter: Array<string>
    textFilter: string
}