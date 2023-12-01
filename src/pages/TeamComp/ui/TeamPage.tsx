import React, { useState, useEffect } from 'react'
import styles from './TeamPageStyle.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { ProjectType, TeamType } from 'entities/project/projectReducerTs.interface'
import { OwnProps } from './TeamTs.interface'
import { Button, Col, Row } from 'antd'
import { IssuesType } from 'entities/issues/issuesReducerTs.interface'
import pic from '../images/1.svg'
// import { changeGetBoardIssueItemFunc } from 'entities/project/projectReducer'
import { useDispatch } from 'react-redux'
import { changeGetBoardIssueItemFunc, fetchProjects } from 'entities/project/projectReducerThunks'


let issueTeamArrClone: Array<IssuesType> = []

const TeamPage: React.FC<OwnProps> = () => {


    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()

    const { id } = useParams()

    const projectTeamPgArr = useSelector((state: AppStateType) => state.project.projectArr)

    const [activeTeam, setActiveTeam] = useState<ProjectType | undefined>(undefined)

    const [issueTeamArr, setIssueTeamArr] = useState<Array<IssuesType>>([])



    useEffect(() => {

        projectTeamPgArr.map((val) => {

            if (val.team?.id === id) {
                setActiveTeam(val)
            }
        })
    }, [id, projectTeamPgArr])


    useEffect(() => {

        issueTeamArrClone = []

        projectTeamPgArr.map((val) => {
            if (val.name === activeTeam?.name) {
                val.board.boardArr.map((val1) => {
                    val1.boardIssue.map((val2) => {
                        issueTeamArrClone.push(val2)
                    })
                })
            }
        })

        setIssueTeamArr(issueTeamArrClone)

    }, [activeTeam, projectTeamPgArr])



    console.log(id)

    return (
        <div className={styles.team_page_content}>
            <div className={styles.team_page_content_head_picture}>

            </div>
            <div className={styles.team_page_content_container}>
                <Row>
                    <Col span={7} className={styles.team_second_col_aft_1_content}>
                        <div className={styles.team_second_col_aft_1_content_teamname}>
                            {activeTeam?.name}
                        </div>
                        <div className={styles.team_page_content_title}>
                            {activeTeam?.team?.teamName}
                        </div>
                        <div className={styles.team_page_content_developers}>
                            {
                                activeTeam?.team?.teamPeaoples.length === 0
                                    ?
                                    <div className={styles.team_page_content_developers_txt}>
                                        There isnt developers in this team
                                    </div>
                                    :
                                    <div className={styles.team_page_content_developers_content}>
                                        {
                                            activeTeam?.team?.teamPeaoples.map((val) => {
                                                return (
                                                    <div className={styles.team_page_content_developers_info_content}>
                                                        <NavLink to={`/jiraItems/teamDeveloper/${val.uniqId}`}>
                                                            <div className={styles.team_page_content_developers_info_content_1_item}>
                                                                <img src={val.picture} />
                                                            </div>
                                                            <div className={styles.team_page_content_developers_info_content_2_item}>
                                                                <div className={styles.team_page_content_developers_info_content_2_item_1_item}>
                                                                    {val.name}
                                                                </div>
                                                                <div className={styles.team_page_content_developers_info_content_2_item_2_item}>
                                                                    {val.teamName}
                                                                </div>
                                                            </div>

                                                        </NavLink>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                            }
                        </div>
                    </Col>
                    <Col span={17}>
                        <div className={styles.team_second_col_1_content}>
                            <div className={styles.team_second_col_2_content_title}>
                                Team activity
                            </div>
                            <div className={styles.team_second_col_1_content_issue_section}>
                                {
                                    issueTeamArr.length === 0
                                        ?
                                        <div className={styles.team_page_content_developers_txt}>
                                            There isnt any issue
                                        </div>
                                        :
                                        issueTeamArr.map((val) => {
                                            return (
                                                <div className={styles.team_second_col_1_content_1_issue_content_overlay}>
                                                    <NavLink className={styles.team_second_col_1_content_1_issue_content} onClick={async () => {
                                                        await aDispatch(changeGetBoardIssueItemFunc(val))
                                                        await aDispatch(fetchProjects())
                                                    }} to={`/jiraItems/issues/${val.id}`}>
                                                        <div className={styles.team_second_col_1_content_1_issue_content_1_item} >
                                                            <img src={val.issueTypePic} />
                                                        </div>
                                                        <div className={styles.team_second_col_1_content_1_issue_content_2_item}>
                                                            <div className={styles.team_second_col_1_content_1_issue_content_2_item_1_item}>
                                                                {val.summary}
                                                            </div>
                                                            <div className={styles.team_second_col_1_content_1_issue_content_2_item_2_item}>
                                                                {val.issuesProject} . {val.currentDate}
                                                            </div>
                                                        </div>

                                                    </NavLink>
                                                </div>
                                            )
                                        })
                                }
                            </div>

                        </div>
                        <div className={styles.team_second_col_2_content}>
                            <div className={styles.team_second_col_2_content_title}>
                                Contributing to
                            </div>
                            <div className={styles.team_second_col_2_content_section}>
                                <div className={styles.team_second_col_2_content_txt_content_1_item}>
                                    <img src={pic} />
                                </div>
                                <div className={styles.team_second_col_2_content_txt_content_2_item}>
                                    <div className={styles.team_second_col_2_content_txt_content_2_item_1_item}>
                                        See the status of what cajnca is working on
                                    </div>
                                    <div className={styles.team_second_col_2_content_txt_content_2_item_2_item}>
                                        Help teammates see a summary of what your team works on, the current status and the goals it contributes to.
                                    </div>
                                    <div className={styles.team_second_col_2_content_txt_content_2_item_3_item}>
                                        <Button className={styles.team_second_col_2_content_txt_content_2_item_3_item_f}>Get Atlas free</Button>
                                        <Button type='primary'>Learn more</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.team_second_col_3_content}>
                            <div className={styles.team_second_col_2_content_txt_content_2_item_2_item}>
                                Tell us about your experience with profiles and search within this directory.
                            </div>
                            <div className={styles.team_second_col_3_content_2_item}>
                                <Button>Send Atlassian feedback</Button>
                            </div>
                        </div>


                    </Col>
                </Row>


            </div>

        </div>
    )
}


export default TeamPage

