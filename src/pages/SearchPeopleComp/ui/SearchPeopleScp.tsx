import React, { useEffect, useState } from "react";

import styles from './SearchPeopleStl.module.css'

import { Col, Result, Row, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Card } from 'antd';
import { Button, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { FaAddressBook, FaPeopleGroup, FaSistrix } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { AppStateType } from "entities/store/redux-store";
import { DeveloperInfoType, TeamType } from "entities/project/projectReducerTs.interface";
import { OwnProps } from "./SearchPeopleTs.interface";




const SearchPeopleComp: React.FC<OwnProps> = () => {

    const { Meta } = Card;

    const projectSearchPeopleCompArr = useSelector((state: AppStateType) => state.project.projectArr)

    const [prjdvlrpSearchPage, setPrjdvlrpSearchPage] = useState<Array<DeveloperInfoType> | undefined>(undefined)
    const [prjdvlrprojectSearchPage, setPrjdvlrprojectpSearchPage] = useState<Array<TeamType> | undefined>(undefined)

    const userInfo = useSelector((state: AppStateType) => state.user.info)


    useEffect(() => {

        let prjdvlrprojectSearchPageClone: Array<TeamType> = []
        let prjdvlrpSearchPageClone: Array<DeveloperInfoType> = []

        projectSearchPeopleCompArr.map((val) => {
            if (val.team) {
                prjdvlrprojectSearchPageClone.push(val.team)

                val.team.teamPeaoples.map((val1) => {
                    prjdvlrpSearchPageClone.push(val1)
                })
            }
        })

        setPrjdvlrprojectpSearchPage(prjdvlrprojectSearchPageClone)
        setPrjdvlrpSearchPage(prjdvlrpSearchPageClone)

    }, [projectSearchPeopleCompArr])


    return (
        <div className={styles.search_people_content_container}>
            <div className={styles.search_people_content}>
                <div className={styles.search_people_content_in_1_item}>
                    <Row>
                        <Col span={24} className={styles.search_people_content_in_1_item_title}>
                            People and teams
                        </Col>
                    </Row>

                </div>
                <div className={styles.search_people_content_in_2_item}>
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        className={styles.search_people_content_in_2_item_slct}
                        options={
                            prjdvlrpSearchPage?.map((val) => {
                                return {
                                    value: val.name,
                                    label: (
                                        <NavLink className={styles.search_people_content_in_2_item_slct_item} to={`/jiraItems/teamDeveloper/${val.uniqId}`}>
                                            {val.name}
                                        </NavLink>
                                    )
                                }
                            })}
                    />
                </div>
                <div className={styles.search_people_content_in_3_item}>
                    <div className={styles.search_people_content_in_3_item_1_item}>
                        <Row>
                            <Col span={24} className={styles.search_people_content_in_3_item_title}>
                                People
                            </Col>
                        </Row>
                    </div>
                </div>
                <Row className={styles.search_people_content_in_3_item_2_item_ovrly}>
                    {/* <div className={styles.search_people_content_in_3_item_2_item}> */}
                    {
                        prjdvlrpSearchPage?.map((val) => {
                            return (
                                <Col span={6} className={styles.search_people_content_in_3_item_2_item_content}>
                                    <NavLink to={`/jiraItems/teamDeveloper/${val.uniqId}`}>
                                        <div className={styles.search_people_content_in_3_item_2_item_content_1_item}>
                                            <img src={val.picture} />
                                        </div>
                                        <div className={styles.search_people_content_in_3_item_2_item_content_2_item}>
                                            {val.name}
                                        </div>
                                        <div className={styles.search_people_content_in_3_item_2_item_content_3_item}>
                                            {val.teamName}
                                        </div>
                                    </NavLink>
                                </Col>
                            )
                        })
                    }
                    {/* </div> */}
                    <Col span={6} className={styles.search_people_content_in_3_item_2_item_content}>
                        <NavLink to={'/jiraItems/userPage'}>
                            {/* userrr  */}
                            <div className={styles.search_people_content_in_3_item_2_item_content_1_item}>
                                <img src={`${userInfo.picture}`} />
                            </div>
                            <div className={styles.search_people_content_in_3_item_2_item_content_2_item}>
                                {userInfo.name}
                            </div>
                            <div className={styles.search_people_content_in_3_item_2_item_content_3_item}>
                                {userInfo.email}
                            </div>
                        </NavLink>
                    </Col>
                </Row>
                <div className={styles.search_people_content_in_4_item}>
                    <div className={styles.search_people_content_in_3_item_title}>
                        Your teams
                    </div>
                    <div className={styles.search_people_content_in_4_item_txt_content}>
                        {
                            prjdvlrprojectSearchPage?.length === 0
                                ?
                                <div className={styles.search_people_content_in_4_item_txt_content_isnt_team}>
                                    <div className={styles.search_people_content_in_4_item_txt_content_isnt_team_1_item}>
                                        <FaPeopleGroup />
                                    </div>
                                    <div className={styles.search_people_content_in_4_item_txt_content_isnt_team_2_item}>
                                        Create a team now or learn <NavLink to={'/'}>how you can collaborate with teams</NavLink>
                                    </div>
                                    <Button type="primary" key="console">
                                        Create team
                                    </Button>
                                </div>
                                :
                                <Row className={styles.search_people_content_in_4_item_txt_team_content_overlay}>
                                    {
                                        prjdvlrprojectSearchPage?.map((val) => {
                                            return (
                                                <Col span={6} className={styles.search_people_content_in_4_item_txt_team_content}>
                                                    <NavLink to={`/jiraItems/team/${val.id}`}>
                                                        <div className={styles.search_people_content_in_4_item_txt_team_content_in_item}>
                                                            {val.teamName}
                                                        </div>
                                                    </NavLink>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>


                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPeopleComp

