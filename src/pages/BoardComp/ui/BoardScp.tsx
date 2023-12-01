import React, { useState, useEffect } from 'react'
import styles from './BoardStl.module.css'
import secStyles from '../../TimelineComp/ui/TimelineStl.module.css'
import { Breadcrumb, Button, Card, Col, Dropdown, Input, InputNumber, Modal, RadioChangeEvent, Row, Select, SelectProps, Space } from 'antd'
import { FaAddressBook, FaAlignJustify, FaAngleDown, FaCheck, FaEllipsis, FaMinus, FaPen, FaPlus, FaUser, FaUsers, FaXmark } from 'react-icons/fa6';
import { NavLink, NavigateFunction, Params, useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";


import { IssueInCntComp } from '../../IssuesComp/ui/IssuesScp'
import { BackblogandBoardModal } from '../../BackblogComp/ui/BackblogScp';
import { compose } from 'redux';
import { AppStateType, useAppDispatch } from 'entities/store/redux-store';
import { connect, useSelector } from 'react-redux';
// import { InitialStateBoardOverlayType, boardSlice, changeAllBoardItems } from '../../redux/projectReducer';
import { InitialStateBoardOverlayType } from 'entities/project/projectReducerTs.interface';


import { projectSlice } from 'entities/project/projectReducer';
import { ProjectType } from 'entities/project/projectReducerTs.interface';


import { issuesSlice } from 'entities/issues/issuesReducer';
import { IssuesType } from 'entities/issues/issuesReducerTs.interface';


import BoardIssueComp from 'feautures/Board/BoardB/ui/BoardIssueScp';
import BoardCreateIssueComp from 'feautures/Board/BoardA/ui/BoardCreateIssueScp'
import { BoardArrType } from 'entities/project/projectReducerTs.interface';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { filterBoardUtFunc } from '../../../widgets/helpers/helperScp';
import { useDispatch } from 'react-redux';
import { MapDispatchToPropsType, MapStateToPropsType, OwnProps, PropsWithRouter } from './BoardTs.interface';
import { addBoardFunc, addIssueToBoardsFunc, changeBoardLimitFunc, deleteBoardFunc, fetchProjects, updateChangedBoardArrFunc } from 'entities/project/projectReducerThunks';


function withRouter<T extends PropsWithRouter>(Component: React.FC<T>):
    React.FC<Omit<T, 'router'>> {
    function ComponentWithRouterProp(props: T) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp as React.FC<Omit<T, 'router'>>;
}

// const BoardComp: React.FC<OwnProps & MapStateToPropsType & MapDispatchToPropsType> = ({ router, boardAllItem, addingBoardToProject, getBoardIssueItem, getBoardIssueFunc, changeBoardLimitFunc, deleteBoardFunc, addIssueFlagFunc, deleteIssueFunc, updateChangedBoardArrFunc, addBoardFunc, boardArr, issuesArr, addIssueToBoardsFunc, projectsArr, addDesctiptionIssFunc, changeIssNameFunc }) => {

const BoardComp: React.FC<OwnProps & MapStateToPropsType & MapDispatchToPropsType> = ({ router, boardArr, getBoardIssueItem, projectsArr }) => {



    const currentProject = projectsArr[Number(router.params.id)]

    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()


    console.log(currentProject)



    const cc = useSelector((state: AppStateType) => state.project.currentBoard)

    const userInfo = useSelector((state: AppStateType) => state.user.info)


    const [initialBoardInfo, setInitialBoardInfo] = useState<Array<BoardArrType>>(currentProject.board.boardArr)

    const currentsecProject = useSelector((state: AppStateType) => state.project.currentBoard)

    useEffect(() => {

        setInitialBoardInfo(currentProject.board.boardArr)
    }, [currentProject])


    const [filterVal, setFilterVal] = useState<string>('')
    const [limit, setLimit] = useState<string>('')


    // ashxatel

    const changeProjectCompFunc: (projectName: string, board: InitialStateBoardOverlayType) => void = (projectName: string, board: InitialStateBoardOverlayType) => {
        // addingBoardToProject({ projectName, board })
    }
    let location = useLocation();


    useEffect(() => {


        // debugger

        setInitialBoardInfo(filterBoardUtFunc(filterVal, currentProject.board.boardArr))

        console.log('board changed', currentProject)
        // dispatch(addingCurrentBoardToProject(boar))
        // changeProjectCompFunc(currentProject.boardUniqName, boardAllItem)


    }, [currentProject.board.boardArr])





    const filterBoardCompSrcvlFunc: (str: string, board: Array<BoardArrType>) => void = (str: string, board: Array<BoardArrType>) => {
        setInitialBoardInfo(filterBoardUtFunc(str, currentProject.board.boardArr))
    }



    const foo = async (obj: IssuesType, uniqtext: string) => {
        await aDispatch(addIssueToBoardsFunc({ obj, uniqtext }))
        await aDispatch(fetchProjects())
    }

    const [addBoardBtn, setAddBoardBtn] = useState<boolean>(true)
    const [boardName, setBoardName] = useState<string>('')

    const [isColumnLimitModalOpen, setIsColumnLimitModalOpen] = useState<boolean>(false)
    const [columnLimitBoardName, setColumnLimitBoardName] = useState<string>('')



    const inputColumnLimitFunc = async (num: string, boardName: string) => {
        await aDispatch(changeBoardLimitFunc({ num, boardName }))
        await aDispatch(fetchProjects())

    };


    // ddd


    const updateBoardIssArrCompFunc = async (str: string, arr: Array<IssuesType>, boardClone: null | Array<BoardArrType>) => {

        debugger

        await aDispatch(updateChangedBoardArrFunc({ str, arr, boardClone }))
        await aDispatch(fetchProjects())

        // await fo()

        // debugger
        // console.log(boardArr,'boardArrboardArrboardArr')
    }


    const reorder = (list: Array<IssuesType>, startIndex: number, endIndex: number, boardInfo: BoardArrType) => {


        const result = [...list]

        let fInd: string | number = 0
        let secInd: string | number = 0

        for (let i in list) {
            if (list[i].id === startIndex) {
                fInd = i
            }

            if (list[i].id === endIndex) {
                secInd = i
            }
        }

        console.log(fInd)

        const [removed] = result.splice(+fInd, 1)
        result.splice(+secInd, 0, removed)
        // console.log(result, 'result',boardInfo)

        updateBoardIssArrCompFunc(boardInfo.uniqText, result, null)
        return result
    }

    const remove = async (list: Array<IssuesType>, index: number, boardInfo: BoardArrType) => {



        let fInd: string | number = 0
        for (let i in list) {
            if (list[i].id === index) {
                fInd = i
            }

        }


        const result = [...list]
        result.splice(+fInd, 1)

        debugger
        console.log(initialBoardInfo)




        let fastArr = []

        for (let i in initialBoardInfo) {

            if (initialBoardInfo[i].uniqText === boardInfo.uniqText) {
                initialBoardInfo[i].boardIssue = []


                for (let j in result) {
                    let o = { ...result[j] }
                    o.issueStatus = boardInfo.uniqText
                    o.id = Number(j) + 1
                    fastArr.push(o)
                }

                initialBoardInfo[i].boardIssue = fastArr

                break
            }
        }


        // updateBoardIssArrCompFunc(boardInfo.uniqText, result)
        console.log(result)

        // return result
    }

    const appendAt = (list: Array<IssuesType>, index: number, issueItem: IssuesType, boardInfo: BoardArrType) => {
        debugger

        let fInd: string | number = 0
        for (let i in list) {
            if (list[i].id === index) {
                fInd = i
            }
        }

        const result = [...list]
        result.splice(index, 0, { ...issueItem })

        debugger
        updateBoardIssArrCompFunc(boardInfo.uniqText, result, initialBoardInfo)

        console.log(result)

        return result
    }

    const handleDragEnd = (result: DropResult) => {
        const src = result.source
        const dest = result.destination

        if (!dest) {
            return
        }



        if (src.droppableId === dest.droppableId) {
            // debugger
            // console.log(boardArr[+src.droppableId], 'src.droppableId')

            // poxancel board i uniq text y popoxutyunnery pahpanelu hamar



            const items = reorder(
                [...boardArr[+src.droppableId].boardIssue],
                src.index,
                dest.index,
                boardArr[+src.droppableId]
            )


        } else {

            const srcItems = remove(currentProject.board.boardArr[+src.droppableId].boardIssue, src.index, currentProject.board.boardArr[+src.droppableId])



            for (let i in currentProject.board.boardArr[+src.droppableId].boardIssue) {
                if (currentProject.board.boardArr[+src.droppableId].boardIssue[i].id === src.index) {
                    debugger

                    appendAt(currentProject.board.boardArr[+dest.droppableId].boardIssue, dest.index, currentProject.board.boardArr[+src.droppableId].boardIssue[+i], currentProject.board.boardArr[+dest.droppableId])
                    break
                }

            }



        }

        console.log(currentProject)


    }




    return (
        <div className={secStyles.timeline_content}>
            <div className={secStyles.timeline_content_in_title}>
                <Breadcrumb
                    items={[
                        {
                            title: <NavLink to={'/jiraItems/allProjects'}>Projects</NavLink>,
                        }
                    ]}
                />
            </div>
            <div className={secStyles.timeline_content_in_sec_section}>
                <Row>
                    <Col span={8} className={secStyles.timeline_content_in_sec_section_title}>
                        {currentProject.name}
                    </Col>
                    <Col span={16} className={secStyles.timeline_content_in_sec_section_sec_part}>
                        <Button>Complete sprint</Button>
                        <Button>
                            <Dropdown menu={{
                                items: [
                                    {
                                        label: <a href="https://www.antgroup.com">Edit sprint</a>,
                                        key: '0',
                                    },
                                    {
                                        label: <a href="https://www.aliyun.com">Manage workflow</a>,
                                        key: '1',
                                    },
                                    {
                                        label: <a href="https://www.aliyun.com">Manage custom filters</a>,
                                        key: '2',
                                    },
                                    {
                                        label: <a href="https://www.aliyun.com">Configure board</a>,
                                        key: '4',
                                    },
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className={secStyles.timeline_content_in_sec_section_sec_part_in_overlay_1_item}>
                                        <FaEllipsis />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={secStyles.timeline_content_in_third_section}>
                <Row>
                    <Col span={16} className={secStyles.timeline_content_in_third_section_first_col}>
                        <div className={secStyles.timeline_content_in_third_section_in_1_item}>
                            <Input onChange={(e) => {
                                filterBoardCompSrcvlFunc(e.target.value, initialBoardInfo)
                                setFilterVal(e.target.value)
                            }} placeholder="Search issue" />
                        </div>
                        <div className={secStyles.timeline_content_in_third_section_in_2_item}>
                            <NavLink to={'/jiraItems/userPage'}>
                                <img style={{ width: '20%' }} src={`${userInfo.picture}`} />
                            </NavLink>
                        </div>
                        {
                            !currentProject.team
                                ?
                                null
                                :
                                <NavLink to={`/jiraItems/team/${currentProject.team?.id}`} className={styles.timeline_content_in_third_section_in_2_item_team_content_overlay}>
                                    <div className={styles.timeline_content_in_third_section_in_2_item_team_content}>
                                        <div className={styles.timeline_content_in_third_section_in_2_item_team_content_1_item}>
                                            <FaUsers />
                                        </div>
                                        <div className={styles.timeline_content_in_third_section_in_2_item_team_content_2_item}>
                                            {currentProject.team?.teamName}
                                        </div>
                                    </div>
                                </NavLink>
                        }
                    </Col>
                    <Col span={8} className={styles.timeline_content_in_third_section_sec_col}>
                        <div className={styles.timeline_content_in_third_section_sec_col_title}>
                            GROUP BY
                        </div>
                        <Button>
                            <Dropdown menu={{
                                items: [{
                                    label: <a href="https://www.antgroup.com">None</a>,
                                    key: '0',
                                },
                                {
                                    label: <a href="https://www.aliyun.com">Assignee</a>,
                                    key: '1',
                                },
                                {
                                    label: <a href="https://www.aliyun.com">Epic</a>,
                                    key: '2',
                                },
                                {
                                    label: <a href="https://www.aliyun.com">Subtask</a>,
                                    key: '3',
                                },
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        None <FaAngleDown />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.timeline_content_in_forth_card_section}>
                <DragDropContext
                    onDragEnd={handleDragEnd}
                >
                    {
                        initialBoardInfo.map((val, ind) => {


                            return (
                                <Droppable droppableId={val.id + ''} >
                                    {
                                        (provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <Card className={styles.timeline_content_in_forth_card_section_in_card}
                                                    title={
                                                        <div className={styles.timeline_content_in_forth_card_section_in_card_title} style={{ color: val.boardIssue.length > val.boardLimit ? '#C9372C' : '#626F86' }}>
                                                            {val.title}

                                                            {
                                                                val.boardIssue.length > val.boardLimit
                                                                    ?
                                                                    <span>MAX {val.boardIssue.length - val.boardLimit}</span>
                                                                    :
                                                                    null
                                                            }



                                                        </div>
                                                    }

                                                    extra={
                                                        <div>
                                                            <Dropdown menu={{
                                                                items: [
                                                                    {
                                                                        label: (
                                                                            <div onClick={() => {
                                                                                setIsColumnLimitModalOpen(true)
                                                                                setColumnLimitBoardName(val.uniqText)
                                                                            }
                                                                            }>
                                                                                Set column limit
                                                                            </div>
                                                                        ),
                                                                        key: '0',
                                                                    },
                                                                    {
                                                                        label: (
                                                                            <div onClick={async () => {
                                                                                await aDispatch(deleteBoardFunc({ str: val.uniqText }))
                                                                                await aDispatch(fetchProjects())
                                                                            }}>
                                                                                Delete
                                                                            </div>
                                                                        ),
                                                                        key: '1',
                                                                    }
                                                                ]
                                                            }}>
                                                                <a onClick={(e) => e.preventDefault()}>
                                                                    <Space className={styles.timeline_content_in_forth_card_section_in_item_2_item_title_elps}>
                                                                        <FaEllipsis />
                                                                    </Space>
                                                                </a>
                                                            </Dropdown>
                                                            <Modal
                                                                title="Set column limit"
                                                                className={styles.timeline_content_in_forth_card_section_in_item_2_item_column_limit}
                                                                open={isColumnLimitModalOpen} onOk={() => {

                                                                    setIsColumnLimitModalOpen(false)
                                                                    inputColumnLimitFunc(limit, columnLimitBoardName)
                                                                }} onCancel={() => setIsColumnLimitModalOpen(false)}>
                                                                <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_column_limit_in_content}>
                                                                    <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_column_limit_in_content_1_item}>
                                                                        Column limit
                                                                    </div>
                                                                    <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_column_limit_in_content_2_item}>
                                                                        We'll highlight this column if the number of issues in it passes this limit.
                                                                    </div>
                                                                    <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_column_limit_in_content_3_item}>
                                                                        Maximum issues
                                                                    </div>
                                                                    <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_column_limit_in_content_4_item}>
                                                                        <input type='number' min={1} max={50} onChange={(e) => setLimit(e.target.value)} />

                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    }
                                                    style={{ width: 300 }}

                                                >
                                                    {


                                                        val.boardIssue.map((val2) => {
                                                            // if (val.uniqText === val2.issueStatus) {
                                                            //     debugger
                                                            return <BoardIssueComp getBoardIssueItem={getBoardIssueItem} boardArr={initialBoardInfo} valueInd={val2.id} val={val} currentProject={currentProject} val2={val2} />
                                                            // }
                                                        })
                                                    }
                                                    <BoardCreateIssueComp boardArr={initialBoardInfo} boardIssueArr={val.boardIssue} foo={foo} status={val.uniqText} currentProject={currentProject} />
                                                </Card>


                                            </div>
                                        )
                                    }

                                </Droppable>
                            )
                        })

                    }
                </DragDropContext>

                <div className={styles.timeline_content_in_fivth_add_card_section}>
                    {/* onClick={() => addBoardFunc()} */}
                    {
                        addBoardBtn
                            ?
                            <div onClick={() => setAddBoardBtn(false)} className={styles.timeline_content_in_fivth_add_card_section_1_item}>
                                <FaPlus />
                            </div>
                            :
                            <div className={styles.timeline_content_in_fivth_add_card_section_2_item}>
                                <div className={styles.timeline_content_in_fivth_add_card_section_2_item_1_item}>
                                    <input placeholder="Board name" onChange={(e) => setBoardName(e.target.value)} />

                                </div>
                                <div className={styles.timeline_content_in_fivth_add_card_section_2_item_2_item}>
                                    <div onClick={() => setAddBoardBtn(true)} className={styles.timeline_content_in_fivth_add_card_section_2_item_2_item_1_item}>
                                        <FaXmark />
                                    </div>
                                    <div onClick={async () => {
                                        await aDispatch(addBoardFunc({ str: boardName }))
                                        await aDispatch(fetchProjects())

                                        setAddBoardBtn(true)
                                    }} className={styles.timeline_content_in_fivth_add_card_section_2_item_2_item_1_item}>
                                        <FaCheck />
                                    </div>
                                </div>
                            </div>
                    }

                </div>

            </div>




        </div>
    )
}


function mapStateToProps(state: AppStateType): MapStateToPropsType {

    let currentProjectNumberfst = state.project.currentProjectNumber



    return {

        projectsArr: state.project.projectArr,
        // issuesArr: state.issues.filteredIssuesArr,
        boardArr: state.project.projectArr[currentProjectNumberfst].board.boardArr,
        getBoardIssueItem: state.project.getBoardIssueItem,
        // boardAllItem: state.boards.boardItem
    }
}

const BoardCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        // addDesctiptionIssFunc: projectSlice.actions.addDesctiptionIssFunc,
        // addIssueToBoardsFunc: projectSlice.actions.addIssueToBoardsFunc,
        // addBoardFunc: projectSlice.actions.addBoardFunc,
        // updateChangedBoardArrFunc: projectSlice.actions.updateChangedBoardArrFunc,
        // changeIssNameFunc: projectSlice.actions.changeIssNameFunc,
        // addIssueFlagFunc: projectSlice.actions.addIssueFlagFunc,
        // deleteIssueFunc: projectSlice.actions.deleteIssueFunc,
        // deleteBoardFunc: projectSlice.actions.deleteBoardFunc,
        // changeBoardLimitFunc: projectSlice.actions.changeBoardLimitFunc,
        // getBoardIssueFunc: projectSlice.actions.getBoardIssueFunc,
        // addingBoardToProject: projectSlice.actions.addingBoardToProject
    }),
    withRouter
)(BoardComp)

export default BoardCompCont




