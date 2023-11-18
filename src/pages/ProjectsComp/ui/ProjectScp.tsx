import React, { useEffect } from "react";

import styles from './ProjectsStl.module.css'

import { Avatar, Col, List, Result, Row } from 'antd';

import { Tabs, Dropdown, Space, Button } from 'antd';

import type { TabsProps } from 'antd';
import { NavLink } from "react-router-dom";
import { FaAlignCenter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../entities/store/redux-store";
import { IssuesType } from "../../../entities/issues/issuesReducer";
import { useDispatch } from "react-redux";
import { changeGetBoardIssueItemFunc, setCurrentProject } from "../../../entities/project/projectReducer";

let allProjectsWorkCompArr: Array<IssuesType> = []
let allProjectsWorkCompAssigneArr: Array<IssuesType> = []



const ProjectsComp: React.FC<OwnProps> = () => {

    const allProjectsWorkComp = useSelector((state: AppStateType) => state.project.projectArr)

    const dispatch = useDispatch()

    useEffect(() => {

        allProjectsWorkCompArr = []
        allProjectsWorkCompAssigneArr = []

        allProjectsWorkComp.map((val) => {
            val.board.boardArr.map((val1) => {
                val1.boardIssue.map((val2) => {
                    allProjectsWorkCompArr.push(val2)

                    if (val2.assignee === 'Vachagan') {
                        allProjectsWorkCompAssigneArr.push(val2)
                    }

                })
            })
        })
    }, [allProjectsWorkComp])

    const projInfoArr = [
        {
            id: 0,
            title: 'My Kanban Project',
            subtitle: 'Team-managed software',
            openIs: 0,
            doneIs: 0,
            pic: '',
            boardName: ['Kanb']
        },
        {
            id: 1,
            title: 'My Project 2',
            subtitle: 'Team-managed software',
            openIs: 0,
            doneIs: 0,
            pic: '',
            boardName: ['P2 board']

        },
    ]

    const projectWorkedItmArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
        {
            id: 2,
            title: 'epic',
            subtitle: 'P2 - 4 . Project 1'
        },
    ]

    const projectWorkedItmLstWkArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
    ]

    const projectWorkedTdItmArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
        {
            id: 2,
            title: 'epic',
            subtitle: 'P2 - 4 . Project 1'
        },
    ]

    const projectWorkedYstdItmLstWkArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
    ]

    const projectWorkedInPrgItmArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        }
    ]

    const starredData = [
        {
            id: 1,
            title: 'Project',
            link: '/jiraItems/allProjects'
        },
        {
            id: 2,
            title: 'Search People',
            link: 'jiraItems/searchPeople'
        },
        {
            id: 3,
            title: 'Dashboard',
            link: 'jiraItems/dashboard'
        },
    ]



    const onChange = (key: string) => {
        console.log(key);
    };


    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Worked on',
            children: (
                <div>
                    <div className={styles.project_tab_content_title}>
                        IN THE LAST WEEK
                    </div>
                    {
                        allProjectsWorkCompArr.map((val) => {
                            return (
                                <NavLink onClick={() => dispatch(changeGetBoardIssueItemFunc(val))}  to={`/jiraItems/issues/${val.id}`}>
                                    <div>
                                        <div>
                                            <img src={val.issueTypePic} />
                                        </div>
                                        <div>
                                            {val.summary}
                                        </div>
                                        <div>
                                            {val.issuesProject}
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }

                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div>
                    Assigned to me <span>{allProjectsWorkCompAssigneArr.length}</span>
                </div>
            ),
            children: (

                allProjectsWorkCompAssigneArr.map((val) => {
                    return (
                        <NavLink onClick={() => dispatch(changeGetBoardIssueItemFunc(val))}  to={`/jiraItems/issues/${val.id}`}>
                            <div>
                                <div>
                                    <img src={val.issueTypePic} />
                                </div>
                                <div>
                                    {val.summary}
                                </div>
                                <div>
                                    {val.issuesProject}
                                </div>
                            </div>
                        </NavLink>
                    )
                })

            ),
        },
        {
            key: '3',
            label: 'Starred',
            children: (
                <div>
                    <Result
                        status="success"
                        title="Successfully Purchased Cloud Server ECS!"
                        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                        extra={
                            starredData.map((val) => {
                                return (
                                    <NavLink to={`/${val.link}`}>
                                        <Button type="primary" key="console" className={styles.project_tab_last_item}>
                                            {val.title}
                                        </Button>
                                    </NavLink>
                                )
                            })
                        }
                    />
                </div>
            )
        }
    ];



    return (
        <div className={styles.project_content_container}>
            <div className={styles.project_content_title}>
                Your work
            </div>
            <div className={styles.project_content_sec_item}>
                <Row>
                    <Col span={12} className={styles.project_content_sec_item}>
                        Recent projects
                    </Col>
                    <Col className={styles.sect_item} span={12}>
                        <NavLink to={'/jiraItems/allProjects'}>
                            View all projects
                        </NavLink>
                    </Col>
                </Row>
            </div>
            <div className={styles.project_content_third_item}>
                {
                    allProjectsWorkComp.map((item) => {
                        return (
                            <div  className={styles.project_content_third_item_content_in_txt_content}>
                                <div className={styles.project_content_third_item_content_in_txt_content_1_item}>
                                    <FaAlignCenter />
                                </div>
                                <div className={styles.project_content_third_item_content_in_txt_content_2_item}>
                                    <div className={styles.project_content_third_item_content_in_txt_content_2_item_1_item}>
                                        {item.name}
                                    </div>
                                    <div className={styles.project_content_third_item_content_in_txt_content_2_item_2_item}>
                                        QUICK LINKS
                                    </div>
                                    <div className={styles.project_content_third_item_content_in_txt_content_2_item_3_item}>

                                        <NavLink onClick={() => dispatch(setCurrentProject(item.id))} to={`/jiraItems/board/${item.id}`} className={styles.project_content_third_item_content_in_txt_content_2_item_2_item}>
                                            {item.boardUniqName}
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
            </div>
        </div>
    )
}


export default ProjectsComp

type OwnProps = {}