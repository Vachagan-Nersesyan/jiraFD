import React, { useState, useEffect } from 'react'
import secStyles from './TeamDeveloperStyle.module.css'
import { useParams } from 'react-router-dom'
import { AppStateType } from 'entities/store/redux-store'
import { useSelector } from 'react-redux'
import { DeveloperInfoType, ProjectType } from 'entities/project/projectReducerTs.interface'
import { OwnProps } from './TeamDeveloperTs.interface'
import { Button, Col, Row } from 'antd'

import styles from '../../TeamComp/ui/TeamPageStyle.module.css'

import pic from '../../TeamComp/images/1.svg'
import secpic from '../images/1.svg'


const TeamDeveloperPage: React.FC<OwnProps> = () => {

    const { id } = useParams()


    const projectTeamPgArr = useSelector((state: AppStateType) => state.project.projectArr)

    const [developerHkInfo, setDeveloperHkInfo] = useState<DeveloperInfoType | undefined>(undefined)

    console.log(developerHkInfo)

    useEffect(() => {
        projectTeamPgArr.map((val) => {
            val.team?.teamPeaoples.map((val1) => {
                if (val1.uniqId === id) {
                    setDeveloperHkInfo(val1)
                }
            })
        })
    }, [id])


    return (

        <div className={styles.team_page_content}>
            <div className={secStyles.team_page_content_headsec_picture}>

            </div>
            <div className={styles.team_page_content_container}>
                <Row>
                    <Col span={7} className={styles.team_second_col_aft_1_content}>
                        <div className={styles.team_second_col_aft_1_content_picture}>
                            <img src={developerHkInfo?.picture} />
                        </div>
                        <div className={styles.team_page_content_title}>
                            {developerHkInfo?.name}
                        </div>
                        <div className={styles.team_second_col_aft_1_content_teamname}>
                            {developerHkInfo?.teamName}
                        </div>
                    </Col>
                    <Col span={17}>

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

                        <div className={styles.team_second_col_2_content}>
                            <div className={styles.team_second_col_2_content_title}>
                                Places they work in
                            </div>
                            <div className={styles.team_second_col_2_content_section}>
                                <div className={styles.team_second_col_2_content_txt_content_1_item}>
                                    <img src={secpic} />
                                </div>
                                <div className={styles.team_second_col_2_content_txt_content_2_item}>
                                    <div className={styles.team_second_col_2_content_txt_content_2_item_1_item}>
                                        We don’t have places to show here yet
                                    </div>
                                    <div className={styles.team_second_col_2_content_txt_content_2_item_2_item}>
                                        va hasn’t worked in any projects or spaces in the last 90 days.
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


export default TeamDeveloperPage


