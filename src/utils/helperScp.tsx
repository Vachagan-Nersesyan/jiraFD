import { BoardArrType } from "../redux/projectReducer"
import { IssuesType } from "../redux/issuesReducer"

export function filterBoardUtFunc(str: string, items: Array<BoardArrType>) {

    let itemsClone: Array<BoardArrType> = []

    for (let i in items) {


        let fstArr = items[i].boardIssue.filter((val) => {

            // debugger
            if (val.summary.includes(str)) {
                return val
            }

        })

        let obj: BoardArrType = { ...items[i], boardIssue: fstArr }

        itemsClone.push(obj)


    }

    console.log(itemsClone)

    return itemsClone


}



export function filterBoardByProjectUtFunc(arr: Array<string>, items: Array<IssuesType>) {



    if (arr.length === 0) { return items }

    let itemsClone: Array<IssuesType> = []

    items.filter((val) => {
        if (arr.includes(val.issuesProject)) {
            itemsClone.push(val)
        }
    })

    console.log(itemsClone)


    return itemsClone


}


export function filterBoardByTypeUtFunc(arr: Array<string>, items: Array<IssuesType>) {


    if (arr.length === 0) { return items }



    let itemsClone: Array<IssuesType> = []


    items.filter((val) => {
        if (arr.includes(val.issueTypeName)) {
            itemsClone.push(val)
        }
    })


    console.log(itemsClone)

    return itemsClone


}



export function filterBoardByStatusUtFunc(arr: Array<string>, items: Array<IssuesType>) {


    if (arr.length === 0) { return items }



    let itemsClone: Array<IssuesType> = []

    items.filter((val) => {
        if (arr.includes(val.issueStatus)) {
            itemsClone.push(val)
        }
    })


    // console.log(itemsClone)

    return itemsClone


}

export function filterBoardByTextUtFunc(str: string, items: Array<IssuesType>) {


    if (str === '') { return items }

    let itemsClone: Array<IssuesType> = []

    items.filter((val) => {
        if (val.summary.includes(str)) {
            itemsClone.push(val)
        }
    })

    return itemsClone


}


export function filterBoardByGlobalTypeUtFunc(str: string, items: Array<IssuesType>) {


    // if (str === 'Search issues') { return items }

    let itemsClone: Array<IssuesType> = []

    debugger

    switch (str) {
        case 'Done issues': {

            items.filter((val) => {
                if (val.issueStatus === 'done') {

                    itemsClone.push(val)
                }
            })

            break
        }

        case 'My open issues': {

            items.filter((val) => {
                if (val.assignee === 'Vachagan') {

                    itemsClone.push(val)
                }
            })

            break
        }

        case 'Reported by me': {

            items.filter((val) => {
                if (val.reporter === 'Vachagan') {

                    itemsClone.push(val)
                }
            })

            break
        }

        case 'Open issues': {

            items.filter((val) => {
                if (val.issueStatus !== 'done') {

                    itemsClone.push(val)
                }
            })

            break
        }

        case 'Created recently': {

            let current = new Date();
            let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();


            items.filter((val) => {
                if (val.currentDate === cDate) {

                    itemsClone.push(val)
                }
            })

            break
        }

        case 'Resolved recently': {

            let current = new Date();
            let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();


            items.filter((val) => {
                if (val.doneRecently === cDate) {

                    itemsClone.push(val)
                }
            })

            break
        }

        default: return items
    }

    return itemsClone


}


export function filterBacklogUtFunc(str: string, items: Array<IssuesType>) {

    let itemsClone: Array<IssuesType> = []


    items.filter((val) => {
        if (val.summary.includes(str)) {

            itemsClone.push(val)
        }
    })

    console.log(itemsClone)

    return itemsClone


}
