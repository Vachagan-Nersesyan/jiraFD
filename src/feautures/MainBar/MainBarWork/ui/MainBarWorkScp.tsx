import React, { useEffect, useState } from 'react'
import styles from './MainBarWorkStl.module.css'
import { Dropdown, Space, Tabs, MenuProps } from 'antd'
import { FaAngleDown, FaJs, FaTableList } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import type { TabsProps } from 'antd';
import { useSelector } from 'react-redux'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { IssuesType } from 'entities/issues/issuesReducerTs.interface'
import { useDispatch } from 'react-redux'
// import { changeGetBoardIssueItemFunc } from 'entities/project/projectReducer'
import { BoardUserIssuesArrType, OwnProps } from './MainBarWorkTs.interface'
import { changeGetBoardIssueItemFunc, fetchProjects, setCurrentProject } from 'entities/project/projectReducerThunks'

let assigneeUserIssuesArr: Array<IssuesType> = []
let recentUserIssuesArrClone: Array<IssuesType> = []
let boardUserIssuesArr: Array<BoardUserIssuesArrType> = []




const MainBarWorkComp: React.FC<OwnProps> = () => {

    const projectCompArr = useSelector((state: AppStateType) => state.project.projectArr)
    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()

    const [recentUserIssuesArr, setRecentUserIssuesArr] = useState<Array<IssuesType>>(recentUserIssuesArrClone)
    const [assigneeUserIssuesHkArr, setAssigneeUserIssuesHkArr] = useState<Array<IssuesType>>(recentUserIssuesArrClone)

    useEffect(() => {
        // debugger

        assigneeUserIssuesArr = []
        recentUserIssuesArrClone = []

        boardUserIssuesArr = []
        // debugger

        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();

        projectCompArr.map((val, ind1) => {
            val.board.boardArr.map((val1) => {
                val1.boardIssue.map((val2) => {
                    if (val2.assignee === 'Vachagan') {
                        assigneeUserIssuesArr.push(val2)
                    }


                    if (val2.currentDate === cDate) {
                        recentUserIssuesArrClone.push(val2)
                    }
                })
            })
            boardUserIssuesArr.push({ id: ind1, boardName: val.board.boardUniqName })

        })

        setRecentUserIssuesArr(recentUserIssuesArrClone)
        setAssigneeUserIssuesHkArr(assigneeUserIssuesArr)
        console.log(projectCompArr)

    }, [projectCompArr])

    console.log(projectCompArr)


    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Assigned to me',
            children: (
                <div className={styles.menu_work_content}>
                    <div className={styles.menu_work_content_1_item}>
                        {
                            assigneeUserIssuesHkArr.length === 0
                                ?
                                <div className={styles.menu_work_content_1_item_not_issue}>
                                    Sorry there is not issue
                                </div>
                                :
                                <div>
                                    <div className={styles.menu_work_content_1_item_1_title}>
                                        IN PROGRESS
                                    </div>
                                    <div className={styles.menu_work_content_1_item_2_itm}>

                                        {assigneeUserIssuesArr.map((val) => {
                                            return (
                                                <NavLink onClick={async () => {
                                                    await aDispatch(changeGetBoardIssueItemFunc(val))
                                                    await aDispatch(fetchProjects())

                                                }} to={`/jiraItems/issues/${val.id}`}>
                                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                        <FaJs />
                                                    </div>
                                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                            {val.summary}
                                                        </div>
                                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                                            {val.issueShortName} . {val.issuesProject}
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            )
                                        })}


                                    </div>
                                    <div className={styles.menu_work_content_border}></div>
                                </div>
                        }
                    </div>

                    <div className={styles.menu_work_content}>
                        <NavLink to={'/jiraItems/projectsWork'}>
                            <div className={styles.menu_work_content_ovrl}>
                                Go to Your Work page
                            </div>
                        </NavLink>
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Recent',
            children: (
                <div className={styles.menu_work_content}>
                    <div className={styles.menu_work_content_1_item}>
                        <div className={styles.menu_work_content_1_item_1_title}>
                            WORKED ON
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm}>
                            {
                                recentUserIssuesArr.map((val) => {

                                    return (
                                        <div className={styles.menu_work_content_1_item_2_itm_overlay}>
                                            <NavLink onClick={async () => {
                                                await aDispatch(changeGetBoardIssueItemFunc(val))
                                                await aDispatch(fetchProjects())
                                            }} to={`/jiraItems/issues/${val.id}`}>
                                                <div className={styles.menu_work_content_1_item_2_itm_in_1_1_itm}>
                                                    <img src={val.issueTypePic} />
                                                </div>
                                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                        {val.summary}
                                                    </div>
                                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                                        {val.issueShortName} . {val.issuesProject}
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.menu_work_content_border}>

                    </div>
                    <div className={styles.menu_work_content}>
                        <NavLink to={'/jiraItems/projectsWork'}>
                            Go to Your Work page
                        </NavLink>
                    </div>
                </div>
            ),
        },
        {
            key: '3',
            label: 'Boards',
            children: (
                <div className={styles.menu_work_content}>
                    <div className={styles.menu_work_content_1_item}>
                        <div className={styles.menu_work_content_1_item_1_title}>
                            RECENT
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm}>
                            {
                                boardUserIssuesArr.map((val) => {

                                    return (
                                        <div className={styles.menu_work_content_1_item_2_itm_overlay}>
                                            <NavLink onClick={async () => {
                                                await aDispatch(setCurrentProject({ num: val.id }))
                                                await aDispatch(fetchProjects())
                                            }} to={`/jiraItems/board/${val.id}`}>
                                                <div className={styles.menu_work_content_1_item_2_itm_in_1_1_itm}>
                                                    <FaTableList />
                                                </div>
                                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                        {val.boardName}
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className={styles.menu_work_content_border}>

                    </div>
                    <div className={styles.menu_work_content}>
                        {/* anel */}
                        <NavLink to={'/'}>
                            View all boards
                        </NavLink>
                    </div>
                </div>
            )
        },
    ];

    const workItems: MenuProps['items'] = [
        {
            label: (
                <div className={styles.main_bar_work_title_tab_content}>
                    <Tabs className={styles.main_bar_work_title_tab_content_tab} defaultActiveKey="1" items={tabItems} />
                </div>
            ),
            key: '0',
        }
    ];

    return (
        <div>
            <Dropdown overlayClassName={styles.main_bar_itms_stl} menu={{ items: workItems }} trigger={['click']}>
                <div className={styles.main_bar_itms_stl_title}>
                    <Space >
                        Your work <FaAngleDown />
                    </Space>
                </div>
            </Dropdown>
        </div>
    )
}


export default MainBarWorkComp

