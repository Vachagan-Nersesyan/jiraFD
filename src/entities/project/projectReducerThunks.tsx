import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase"
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { createAvatar } from "@dicebear/core"
import { v4 as uuid } from "uuid";
import { shapes, avataaars } from '@dicebear/collection';
import { projectExample } from './projectReducer'
import { BoardArrType, DeveloperInfoType, InitialStateType, TeamType } from "./projectReducerTs.interface";
import { IssuesType } from "entities/issues/issuesReducerTs.interface";


export const fetchProjects = createAsyncThunk(
    'project/fetchProjects',
    async () => {

        const querySnapshot = await getDocs(collection(db, 'project'))

        return querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
    }
)



export const createProjectFunc = createAsyncThunk(
    'project/createProjectFunc',
    async (item: { name: string, key: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');


        let projectArrCLone = [...data[0].projectArr]


        const avatarProject = createAvatar(shapes, {
            seed: uuid(),
        });

        const dataUri2 = avatarProject.toDataUriSync();

        let newProjectClone = { ...projectExample }
        newProjectClone.board = { ...projectExample.board }

        newProjectClone.id = projectArrCLone.length
        newProjectClone.name = item.name
        newProjectClone.key = item.key
        newProjectClone.picture = dataUri2
        newProjectClone.board.boardUniqName = `${item.name} board`
        newProjectClone.boardUniqName = `${item.name} board`

        projectArrCLone.push(newProjectClone)

        // newProjectClone.board.boardUniqName = ''


        // console.log(current(state))

        await updateDoc(docRef, {
            projectArr: projectArrCLone,
        });

        return { ...item }


    }
)


export const addingIssueToCurrentBoard = createAsyncThunk(
    'project/addingIssueToCurrentBoard',
    async (item: { obj: IssuesType, str: string, projectName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');


        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === item.projectName) {
                for (let j in projectArrCLone.projectArr[i].board.boardArr) {
                    if (projectArrCLone.projectArr[i].board.boardArr[j].uniqText === item.str) {
                        projectArrCLone.projectArr[i].board.boardArr[j].boardIssue.push(item.obj)

                    }
                }

            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
        });

        return { ...item }


    }
)

export const setCurrentProject = createAsyncThunk(
    'project/setCurrentProject',
    async (item: { num: number }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');


        let projectArrCLone: InitialStateType = { ...data[0] }

        projectArrCLone.currentProjectNumber = item.num

        await updateDoc(docRef, {
            currentProjectNumber: projectArrCLone.currentProjectNumber,
        });

        return { ...item }


    }
)


export const changeIssueAssigneeFunc = createAsyncThunk(
    'project/changeIssueAssigneeFunc',
    async (item: { str: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');


        let projectArrCLone: InitialStateType = { ...data[0] }


        // debugger

        projectArrCLone.projectArr.map((val) => {
            if (val.name === projectArrCLone.getBoardIssueItem.issuesProject) {

                val.board.boardArr.map((val1) => {
                    if (val1.uniqText === projectArrCLone.getBoardIssueItem.issueStatus) {
                        val1.boardIssue.map((val2) => {
                            if (val2.uniqId === projectArrCLone.getBoardIssueItem.uniqId) {
                                val2.assignee = item.str
                            }
                        })
                    }
                })

                projectArrCLone.getBoardIssueItem.assignee = item.str
            }
        })

        await updateDoc(docRef, {
            projectArr: projectArrCLone,
        });

        return { ...item }


    }
)



export const getBoardIssueFunc = createAsyncThunk(
    'project/getBoardIssueFunc',
    async (item: { id: string, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }


        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        for (let i in currentBoard) {

            if (currentBoard[i].uniqText === item.boardName) {

                for (let j in currentBoard[i].boardIssue) {

                    if (currentBoard[i].boardIssue[j].uniqId === item.id) {

                        projectArrCLone.getBoardIssueItem = { ...currentBoard[i].boardIssue[j] }
                    }
                }
            }
        }


        await updateDoc(docRef, {
            getBoardIssueItem: projectArrCLone.getBoardIssueItem,
        });

        return { ...item }


    }
)





export const addIssueToBoardsFunc = createAsyncThunk(
    'project/addIssueToBoardsFuncF',
    async (item: { obj: IssuesType, uniqtext: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        for (let i in currentBoard) {

            if (currentBoard[i].uniqText === item.uniqtext) {
                currentBoard[i].boardIssue.push(item.obj)

                currentBoard[i].boardIssue.map((val, ind) => {
                    val.id = Number(ind) + 1
                })

                break
            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
        });

        return { ...item }


    }
)



export const chooseProjectForTeamFunc = createAsyncThunk(
    'project/chooseProjectForTeamFunc',
    async (item: { str: string, projectName: string, id: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        if (item.projectName) {
            projectArrCLone.projectArr.map((val) => {
                if (val.name === item.projectName) {

                    let teamObj: TeamType = {
                        id: item.id,
                        teamName: '',
                        teamPeaoples: []

                    }

                    val.team = teamObj

                    val.team.teamName = item.str

                }
            })
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
        });

        return { ...item }


    }
)





export const addDeveloperFunc = createAsyncThunk(
    'project/addDeveloperFunc',
    async (item: DeveloperInfoType) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        projectArrCLone.projectArr.map((val) => {
            if (val.team?.teamName === item.teamName) {

                val.team?.teamPeaoples.push({ ...item, id: val.team.teamPeaoples.length })
            }
        })
        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
        });

        return { ...item }


    }
)


export const changeProjectInfoFunc = createAsyncThunk(
    'project/changeProjectInfoFunc',
    async (item: { name: string, key: string, lead: string, defaultAssignee: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentProject = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber]


        for (let i in item) {

            // uxxel 

            switch (i) {
                case 'name': {

                    currentProject.name = item.name

                    break
                }

                case 'key': {

                    currentProject.key = item.key

                    break
                }


                case 'lead': {

                    currentProject.lead = item.lead

                    break
                }


                case 'defaultAssignee': {

                    currentProject.defaultAssignee = item.defaultAssignee

                    break
                }



                default: break
            }

        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
        });

        return { ...item }


    }
)



export const setAllProjectsIssuesArr = createAsyncThunk(
    'project/setAllProjectsIssuesArr',
    async (item: Array<IssuesType>) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        projectArrCLone.allProjectsIssueArr = item

        await updateDoc(docRef, {
            allProjectsIssueArr: projectArrCLone.allProjectsIssueArr,
        });

        return { ...item }


    }
)

export const setBacklogIssueArr = createAsyncThunk(
    'project/setBacklogIssueArr',
    async (item: Array<IssuesType>) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }
        projectArrCLone.backlogIssueArr = item


        await updateDoc(docRef, {
            backlogIssueArr: projectArrCLone.backlogIssueArr,
        });

        return { ...item }


    }
)


export const addIssueInnerIssueFunc = createAsyncThunk(
    'project/addIssueInnerIssueFunc',
    async (item: IssuesType) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === item.issuesProject) {
                projectArrCLone.projectArr[i].board.boardArr.map((val) => {

                    if (val.uniqText === projectArrCLone.getBoardIssueItem.issueStatus) {
                        val.boardIssue.map((val2) => {

                            if (val2.uniqId === projectArrCLone.getBoardIssueItem.uniqId) {

                                val2.issuesInnerItems.push(item)
                                projectArrCLone.getBoardIssueItem.issuesInnerItems.push(item)
                            }
                        })
                    }
                })
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const changeIssueInnerIssueSummary = createAsyncThunk(
    'project/changeIssueInnerIssueSummary',
    async (item: { str: string, id: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {

            if (projectArrCLone.projectArr[i].name === projectArrCLone.getBoardIssueItem.issuesProject) {
                projectArrCLone.projectArr[i].board.boardArr.map((val) => {

                    if (val.uniqText === projectArrCLone.getBoardIssueItem.issueStatus) {
                        val.boardIssue.map((val2) => {

                            if (val2.uniqId === projectArrCLone.getBoardIssueItem.uniqId) {

                                val2.issuesInnerItems.map((val3, ind3) => {

                                    if (val3.uniqId === item.id) {
                                        val3.summary = item.str
                                        projectArrCLone.getBoardIssueItem.issuesInnerItems[ind3].summary = item.str
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const changeIssNameFunc = createAsyncThunk(
    'project/changeIssNameFunc',
    async (item: { str: string, id: number, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');




        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {
                currentBoard[i].boardIssue.map((val) => {
                    if (val.id === item.id) {
                        val.summary = item.str
                        projectArrCLone.getBoardIssueItem.summary = item.str
                    }
                })
            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            currentBoard: projectArrCLone.currentBoard,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const addDesctiptionIssFunc = createAsyncThunk(
    'project/addDesctiptionIssFunc',
    async (item: { arr: Array<string>, id: number, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {
                currentBoard[i].boardIssue.map((val) => {
                    if (val.id === item.id) {
                        if (val.description && projectArrCLone.getBoardIssueItem.description) {

                            for (let t in item.arr) {
                                if (!val.description.includes(item.arr[t]) && !projectArrCLone.getBoardIssueItem.description.includes(item.arr[t])) {
                                    val.description.push(item.arr[t])
                                    projectArrCLone.getBoardIssueItem.description.push(item.arr[t])
                                }

                            }


                        }

                    }
                })
            }

        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)

export const addBoardFunc = createAsyncThunk(
    'project/addBoardFunc',
    async (item: { str: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        let boardObj = {
            id: currentBoard.length,
            title: item.str,
            uniqText: item.str.toLowerCase().split(' ').join(''),
            boardIssue: [],
            boardLimit: 1000
        }
        currentBoard.push(boardObj)
        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const addIssueFlagFunc = createAsyncThunk(
    'project/addIssueFlagFunc',
    async (item: { id: number, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        for (let i in currentBoard) {

            if (currentBoard[i].uniqText === item.boardName) {
                for (let j in currentBoard[i].boardIssue) {

                    if (currentBoard[i].boardIssue[j].id === item.id) {

                        currentBoard[i].boardIssue[j].flag = !currentBoard[i].boardIssue[j].flag
                        projectArrCLone.getBoardIssueItem.flag = !projectArrCLone.getBoardIssueItem.flag

                    }
                }
            }

        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)

export const deleteIssueFunc = createAsyncThunk(
    'project/deleteIssueFunc',
    async (item: { id: number, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        let fastArr = []

        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {

                for (let j in currentBoard[i].boardIssue) {
                    if (currentBoard[i].boardIssue[j].id === item.id) {
                        currentBoard[i].boardIssue.splice(Number(j), 1)
                    }
                }

            }
        }

        for (let t in currentBoard) {

            if (currentBoard[t].uniqText === item.boardName) {

                for (let j in currentBoard[t].boardIssue) {
                    let o = { ...currentBoard[t].boardIssue[j] }
                    o.id = Number(j) + 1
                    fastArr.push(o)
                }

                currentBoard[t].boardIssue = fastArr

                break
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)



export const deleteBoardFunc = createAsyncThunk(
    'project/deleteBoardFunc',
    async (item: { str: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        let deletedBoardIssuesArr: Array<IssuesType> = []

        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.str) {

                currentBoard[0].boardIssue = [...currentBoard[0].boardIssue, ...currentBoard[i].boardIssue]

                currentBoard.splice(Number(i), 1)
            }
        }

        console.log(deletedBoardIssuesArr)
        for (let j in currentBoard) {
            currentBoard[j].id = Number(j)
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)

export const changeBoardLimitFunc = createAsyncThunk(
    'project/changeBoardLimitFunc',
    async (item: { num: string, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }


        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        for (let i in currentBoard) {

            if (currentBoard[i].uniqText === item.boardName) {

                currentBoard[i].boardLimit = Number(item.num)
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const changeIssDescriptionFunc = createAsyncThunk(
    'project/changeIssDescriptionFunc',
    async (item: { str: string, id: number, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {
                currentBoard[i].boardIssue.map((val) => {
                    if (val.id === item.id) {
                        val.descriptionText = item.str

                        projectArrCLone.getBoardIssueItem.descriptionText = item.str

                    }
                })
            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)

export const addCommentIssueFunc = createAsyncThunk(
    'project/addCommentIssueFunc',
    async (item: { str: string, id: number, boardName: string }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }


        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        const getDate: () => string = () => {
            const newDate = new Date();
            const year = newDate.getFullYear();
            const month = newDate.getMonth() + 1;
            const d = newDate.getDate();

            return `${month.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}/${year}`;
        }

        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {
                currentBoard[i].boardIssue.map((val) => {
                    if (val.id === item.id) {

                        let commentObj = {
                            id: val.issueComments.length,
                            text: item.str,
                            name: val.reporter,
                            date: getDate(),
                            picture: ''
                        }

                        val.issueComments.push(commentObj)
                        projectArrCLone.getBoardIssueItem.issueComments.push(commentObj)

                    }
                })
            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const changeCommentIssueFunc = createAsyncThunk(
    'project/changeCommentIssueFunc',
    async (item: { str: string, id: number, boardName: string, commId: number }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }


        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {
                currentBoard[i].boardIssue.map((val) => {
                    if (val.id === item.id) {
                        val.issueComments.map((val2, ind2) => {
                            if (val2.id === item.commId) {
                                val2.text = item.str

                                projectArrCLone.getBoardIssueItem.issueComments[ind2].text = item.str
                            }
                        })

                    }
                })
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const deleteCommentIssueFunc = createAsyncThunk(
    'project/deleteCommentIssueFunc',
    async (item: { str: string, id: number, boardName: string, commId: number }) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        for (let i in currentBoard) {
            if (currentBoard[i].uniqText === item.boardName) {
                currentBoard[i].boardIssue.map((val) => {
                    if (val.id === item.id) {
                        val.issueComments.map((val2, ind2) => {
                            if (val2.id === item.commId) {

                                val.issueComments.splice(ind2, 1)
                                projectArrCLone.getBoardIssueItem.issueComments.splice(ind2, 1)
                            }
                        })

                        val.issueComments.map((val2, ind2) => {
                            val2.id = Number(ind2) + 1

                            projectArrCLone.getBoardIssueItem.issueComments[ind2].id = Number(ind2) + 1
                        })

                    }
                })
            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


export const changeIssueBoardFunc = createAsyncThunk(
    'project/changeIssueBoardFunc',
    async (item: { id: number, boardName: string }) => {


        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }


        let currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr


        for (let i in currentBoard) {

            if (currentBoard[i].uniqText === projectArrCLone.getBoardIssueItem.issueStatus) {

                currentBoard[i].boardIssue.map((val, ind) => {

                    if (val.id === item.id) {



                        val.issueStatus = item.boardName

                        currentBoard.filter((valboard) => valboard.uniqText === item.boardName ? valboard.boardIssue.push(val) : null)
                        currentBoard[i].boardIssue.splice(ind, 1)



                        currentBoard.map((valboard) => {
                            if (valboard.uniqText === item.boardName || valboard.uniqText === projectArrCLone.getBoardIssueItem.issueStatus) {
                                valboard.boardIssue.map((val2board, ind2board) => {
                                    val2board.id = Number(ind2board) + 1

                                })
                            }
                        })

                        projectArrCLone.getBoardIssueItem.issueStatus = item.boardName

                    }


                })

            }
        }

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)



export const changeGetBoardIssueItemFunc = createAsyncThunk(
    'project/changeGetBoardIssueItemFunc',
    async (item: IssuesType) => {

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }


        projectArrCLone.getBoardIssueItem = item

        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)

export const addFlagToBacklogIssueFunc = createAsyncThunk(
    'project/addFlagToBacklogIssueFunc',
    async (item: { str: string }) => {



        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === projectArrCLone.getBoardIssueItem.issuesProject) {
                projectArrCLone.projectArr[i].backlogSecIssueArr.map((val, ind) => {

                    if (val.uniqId === projectArrCLone.getBoardIssueItem.uniqId) {
                        val.flag = !val.flag
                        projectArrCLone.getBoardIssueItem.flag = !projectArrCLone.getBoardIssueItem.flag
                    }
                })
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem,
        });

        return { ...item }


    }
)


export const addingIssueInBacklogFunc = createAsyncThunk(
    'project/addingIssueInBacklogFunc',
    async (item: IssuesType) => {



        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        console.log(projectArrCLone.projectArr)

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === item.issuesProject) {
                projectArrCLone.projectArr[i].board.boardArr.map((val) => {

                    if (val.uniqText === item.issueStatus) {

                        val.boardIssue.push(item)
                        val.boardIssue.map((val1, ind1) => {
                            val1.id = Number(ind1) + 1
                        })

                    }
                })
            }
        }

        console.log(projectArrCLone.projectArr)



        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            backlogIssueArr: projectArrCLone.backlogIssueArr

        });

        return { ...item }


    }
)

export const updateChangedBoardArrFunc = createAsyncThunk(
    'project/updateChangedBoardArrFunc',
    async (item: { str: string, arr: Array<IssuesType>, boardClone: Array<BoardArrType> | null }) => {




        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }
        let swproject: InitialStateType = data[0].currentProject



        let currentBoard: any = null
        if (!item.boardClone) {
            currentBoard = projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr

        } else {
            currentBoard = item.boardClone
        }


        let fastArr = []

        for (let i in currentBoard) {

            if (currentBoard[i].uniqText === item.str) {
                currentBoard[i].boardIssue = []


                for (let j in item.arr) {
                    let o = { ...item.arr[j] }
                    o.issueStatus = item.str
                    o.id = Number(j) + 1
                    fastArr.push(o)
                }

                currentBoard[i].boardIssue = fastArr

                break
            }
        }


        projectArrCLone.projectArr[projectArrCLone.currentProjectNumber].board.boardArr = currentBoard


        // .board.boardArr

        await updateDoc(docRef, {
            currentBoard: currentBoard,
            projectArr: projectArrCLone.projectArr,
            currentProject: projectArrCLone.currentProject
            // getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)

export const deleteFlagToBacklogIssueFunc = createAsyncThunk(
    'project/deleteFlagToBacklogIssueFunc',
    async (item: { str: string }) => {



        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === projectArrCLone.getBoardIssueItem.issuesProject) {
                projectArrCLone.projectArr[i].backlogSecIssueArr.map((val, ind) => {
                    if (val.uniqId === projectArrCLone.getBoardIssueItem.uniqId) {

                        projectArrCLone.projectArr[i].backlogSecIssueArr.splice(ind, 1)
                    }
                })
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            backlogIssueArr: projectArrCLone.backlogIssueArr
            // backlogIssueArr: projectArrCLone.backlogIssueArr
        });

        return { ...item }


    }
)




export const addIssueBacklogToBoardFunc = createAsyncThunk(
    'project/addIssueBacklogToBoardFunc',
    async (item: { obj: IssuesType, projectName: string }) => {

        debugger

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === item.projectName) {
                console.log(projectArrCLone.projectArr[i].board.boardArr[0].boardIssue)
                projectArrCLone.projectArr[i].board.boardArr[0].boardIssue.push(item.obj)
                console.log(projectArrCLone.projectArr[i].board.boardArr[0].boardIssue)

                projectArrCLone.projectArr[i].backlogSecIssueArr.map((val, ind) => {

                    if (val.uniqId === item.obj.uniqId) {

                        projectArrCLone.projectArr[i].backlogSecIssueArr.splice(ind, 1)
                    }
                })
            }
        }


        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,

            backlogIssueArr: projectArrCLone.backlogIssueArr
        });

        return { ...item }


    }
)



export const addIssueToBacklogArr = createAsyncThunk(
    'project/addIssueToBacklogArr',
    async (item: { str: string, obj: IssuesType }) => {

        debugger

        let collectionRef = await getDocs(collection(db, 'project'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))


        const docRef = doc(db, 'project', 'FDtYtw4whVGSnhx9TPIm');



        let projectArrCLone: InitialStateType = { ...data[0] }

        for (let i in projectArrCLone.projectArr) {
            if (projectArrCLone.projectArr[i].name === item.str) {
                projectArrCLone.projectArr[i].backlogSecIssueArr.push(item.obj)

                projectArrCLone.projectArr[i].backlogSecIssueArr.map((val1, ind1) => {
                    val1.id = Number(ind1) + 1
                })
            }
        }



        await updateDoc(docRef, {
            projectArr: projectArrCLone.projectArr,
            getBoardIssueItem: projectArrCLone.getBoardIssueItem
        });

        return { ...item }


    }
)


