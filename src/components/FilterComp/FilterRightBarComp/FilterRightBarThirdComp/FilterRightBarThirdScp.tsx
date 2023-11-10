import React, { useEffect, useState } from 'react'
import styles from './FilterRightBarThirdStl.module.css'
import { Avatar, Breadcrumb, Button, Col, Collapse, Dropdown, Input, List, Row, Space } from 'antd';
import { FaAngleDown, FaFileExcel, FaFileWord, FaShareFromSquare } from 'react-icons/fa6';
import type { CollapseProps } from 'antd'
import { NavLink } from 'react-router-dom';
import FilterRightBarThirdInFItemComp from './FilterRightBarThirdInFItemComp/FilterRightBarThirdInFItemSCp';
import FilterRightBarThirdInSItemComp from './FIlterRightBarThirdInSItem/FIlterRightBarThirdInSItemScp';
import { InitialStateType, IssuesType, changeActualFilterdIssuesArrFunc, issuesSlice } from '../../../../redux/issuesReducer';
import { IssueInCntComp } from '../../../IssuesComp/IssuesScp';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/redux-store';
import { compose } from 'redux';
import { BoardArrType, InitialStateBoardOverlayType, projectSlice } from '../../../../redux/projectReducer';
import { ProjectType } from '../../../../redux/projectReducer';
import { AddingBoardToProjectArgsType } from '../../../BoardComp/BoardScp';
import FilterSecondBarInFirstComp, { FilterObjType } from '../FilterSeconBarInSecondComp/FilterSecondBarInSecondScp';
import { filterBoardByGlobalTypeUtFunc, filterBoardByProjectUtFunc, filterBoardByStatusUtFunc, filterBoardByTextUtFunc, filterBoardByTypeUtFunc } from '../../../../utils/helperScp';




const FilterRightBarThirdComp: React.FC<OwnProps & MapDispatchToPropsType & MapStateToPropsType> = ({ allProjectsIssueArr, setAllProjectsIssuesArr, issueFilterType, changeActualFilterdIssuesArrFunc, boardArr, board, projectArr, currentBoard, addingBoardToProject, changeGetBoardIssueItemFunc }) => {




    const listUserArr = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    debugger

    const [boardsSecAllIssuefFilter, setBoardsSecAllIssuefFilter] = useState<Array<IssuesType>>(allProjectsIssueArr)

    const [boardsAllIssuefFilter, setBoardsAllIssuefFilter] = useState<Array<IssuesType>>(allProjectsIssueArr)


    const changeProjectCompFunc: (projectName: string, board: InitialStateBoardOverlayType) => void = (projectName: string, board: InitialStateBoardOverlayType) => {
        addingBoardToProject({ projectName, board })
    }


    console.log(boardsAllIssuefFilter)



    useEffect(() => {

        changeProjectCompFunc(currentBoard.boardUniqName, board)
    }, [])


    useEffect(() => {
        let boardsAllIssuefFilterClone: Array<IssuesType> = []

        for (let t in projectArr) {
            for (let i in projectArr[t].board.boardArr) {
                for (let j in projectArr[t].board.boardArr[i].boardIssue) {
                    boardsAllIssuefFilterClone.push(projectArr[t].board.boardArr[i].boardIssue[j])

                }
            }
        }

        setAllProjectsIssuesArr(boardsAllIssuefFilterClone)

        // setBoardsAllIssuefFilter(boardsAllIssuefFilterClone)
        // setBoardsSecAllIssuefFilter(boardsAllIssuefFilterClone)

        // changeActualFilterdIssuesArrFunc(boardsAllIssuefFilterClone)

    }, [projectArr])

    useEffect(() => {

        console.log(allProjectsIssueArr)
        setBoardsAllIssuefFilter(allProjectsIssueArr)
        setBoardsSecAllIssuefFilter(allProjectsIssueArr)
        changeActualFilterdIssuesArrFunc(allProjectsIssueArr)


    }, [allProjectsIssueArr])


    useEffect(() => {
        for (let i in boardArr) {
            if (boardArr[i].boardIssue.length !== 0) {
                changeGetBoardIssueItemFunc(boardArr[i].boardIssue[0])
                break
            }
        }
    }, [])




    const filterIssueByProjectCompFunc = (filterObj: FilterObjType) => {
        // console.log(arr,';arrarrarrarr')

        let o = filterBoardByProjectUtFunc(filterObj.projectFilter, boardsSecAllIssuefFilter)
        setBoardsAllIssuefFilter(o)


        o = filterBoardByTypeUtFunc(filterObj.typeFilter, o)
        setBoardsAllIssuefFilter(o)

        o = filterBoardByStatusUtFunc(filterObj.statusFilter, o)
        setBoardsAllIssuefFilter(o)

        o = filterBoardByTextUtFunc(filterObj.textFilter, o)

        setBoardsAllIssuefFilter(o)


        // o = filterBoardByGlobalTypeUtFunc(issueFilterType.filterIssueName, o)
        // setBoardsAllIssuefFilter(o)



        // debugger
        // o = filterBoardByGlobalTypeUtFunc(issueFilterType, o)

        // setBoardsAllIssuefFilter(o)

    }


    useEffect(() => {

        setBoardsAllIssuefFilter(issueFilterType.filteredIssuesArr)
        setBoardsSecAllIssuefFilter(issueFilterType.filteredIssuesArr)

    }, [issueFilterType.filteredIssuesArr])



    return (
        <>
            <FilterSecondBarInFirstComp filterIssueByProjectCompFunc={filterIssueByProjectCompFunc} />


            <Row className={styles.filter_right_bar_third_part_content}>
                <Col span={6} className={styles.filter_first_col}>
                    <div className={styles.filter_first_col_title}>
                        <div className={styles.filter_first_col_title_1_item}>
                            Order by Created <FaShareFromSquare />
                        </div>
                        <div className={styles.filter_first_col_title_2_item}>
                            <FaAngleDown />
                        </div>
                    </div>
                    <div>

                        {
                            boardsAllIssuefFilter.length === 0
                                ?
                                <div>
                                    There isnt issue
                                </div>

                                :
                                boardsAllIssuefFilter.map((val) => {
                                    return (
                                        <div onClick={() => changeGetBoardIssueItemFunc(val)} className={styles.filter_right_bar_third_part_content_issue_item}>
                                            <div className={styles.filter_right_bar_third_part_content_issue_item_in_item_1}>
                                                <img src={val.issueTypePic} />
                                            </div>
                                            <div className={styles.filter_right_bar_third_part_content_issue_item_in_item_2}>
                                                <div className={styles.filter_right_bar_third_part_content_issue_item_in_item_2_1_item}>
                                                    {val.issuesProject}
                                                </div>
                                                <div className={styles.filter_right_bar_third_part_content_issue_item_in_item_2_2_item}>
                                                    {val.summary}
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })

                        }

                        {/* <List
                        itemLayout="horizontal"
                        dataSource={listUserArr}
                        renderItem={(item, index) => (
                            <List.Item
                                className={styles.filter_first_col_title_1_item_list_item}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    /> */}
                    </div>
                </Col>
                <Col span={18}>
                    {
                        boardsAllIssuefFilter.length === 0
                            ?
                            <div>
                                There isnt issueeee
                            </div>
                            :
                            <IssueInCntComp />

                    }
                    {/* <Row>
                    <Col span={16} className={styles.filter_second_col}>
                        <FilterRightBarThirdInFItemComp />
                    </Col>
                    <Col span={8}>
                        <FilterRightBarThirdInSItemComp />

                    </Col>
                </Row> */}
                </Col>

            </Row>
        </>

    )
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {

    let currentProjectNumberfst = state.project.currentProjectNumber


    return {
        boardArr: state.project.projectArr[currentProjectNumberfst].board.boardArr,
        projectArr: state.project.projectArr,
        currentBoard: state.project.currentBoard,
        board: state.project.projectArr[currentProjectNumberfst].board,
        issueFilterType: state.issues,
        allProjectsIssueArr: state.project.allProjectsIssueArr
    }
}


const FilterRightBarThirdCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        changeGetBoardIssueItemFunc: projectSlice.actions.changeGetBoardIssueItemFunc,
        addingBoardToProject: projectSlice.actions.addingBoardToProject,
        changeActualFilterdIssuesArrFunc: issuesSlice.actions.changeActualFilterdIssuesArrFunc,
        setAllProjectsIssuesArr: projectSlice.actions.setAllProjectsIssuesArr

    })
)(FilterRightBarThirdComp)




export default FilterRightBarThirdCompCont

type OwnProps = {
}

type MapStateToPropsType = {
    boardArr: Array<BoardArrType>,
    projectArr: Array<ProjectType>,
    currentBoard: InitialStateBoardOverlayType,
    board: InitialStateBoardOverlayType,
    issueFilterType: InitialStateType,
    allProjectsIssueArr: Array<IssuesType>
}

type MapDispatchToPropsType = {
    changeGetBoardIssueItemFunc: (obj: IssuesType) => void,
    addingBoardToProject: ({ projectName, board }: AddingBoardToProjectArgsType) => void
    changeActualFilterdIssuesArrFunc: (arr: Array<IssuesType>) => void,
    setAllProjectsIssuesArr: (arr: Array<IssuesType>) => void
}