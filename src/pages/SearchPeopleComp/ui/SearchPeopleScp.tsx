import React, { useEffect, useState } from "react";

import styles from './SearchPeopleStl.module.css'

import { Col, Result, Row, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Card } from 'antd';
import { Button, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { FaAddressBook, FaSistrix } from "react-icons/fa6";
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

    }, [prjdvlrpSearchPage, prjdvlrprojectSearchPage])


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
                        options={
                            prjdvlrpSearchPage?.map((val) => {
                                return {
                                    value: val.name,
                                    label: val.name,
                                }
                            })}
                    />
                </div>
                <div className={styles.search_people_content_in_3_item}>
                    <div className={styles.search_people_content_in_3_item_1_item}>
                        <Row>
                            <Col span={12} className={styles.search_people_content_in_3_item_title}>
                                People
                            </Col>
                            <Col span={12} className={styles.search_people_content_in_3_item_sec_col}>
                                <NavLink to={'/'}>
                                    More search options with Atlas <FaAddressBook />
                                </NavLink>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={styles.search_people_content_in_3_item_2_item_ovrly}>
                    <div className={styles.search_people_content_in_3_item_2_item}>
                        {
                            prjdvlrpSearchPage?.map((val) => {
                                return (
                                    <NavLink to={`/jiraItems/teamDeveloper/${val.uniqId}`}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                        >
                                            <Meta title="Europe Street beat" description={<div><Button type="primary">Primary Button</Button></div>} />
                                        </Card>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className={styles.search_people_content_in_3_item_2_item}>
                        <NavLink to={'/jiraItems/userPage'}>
                            {/* userrr  */}
                            <div>
                                <img src={`${userInfo.picture}`} />
                            </div>
                            <div>
                                {userInfo.name}
                            </div>
                            <div>
                                {userInfo.email}
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.search_people_content_in_4_item}>
                    <div className={styles.search_people_content_in_3_item_title}>
                        Your teams
                    </div>
                    <div className={styles.search_people_content_in_4_item_txt_content}>
                        {
                            prjdvlrprojectSearchPage?.length === 0
                                ?
                                <Result
                                    status="success"
                                    title="Share pages or mention teams rather than individual members"
                                    subTitle={
                                        <div>
                                            Create a team now or learn <a href="#">how you can collaborate with teams</a>
                                        </div>
                                    }
                                    extra={[
                                        <Button type="primary" key="console">
                                            Create team
                                        </Button>
                                    ]}
                                />
                                :
                                prjdvlrprojectSearchPage?.map((val) => {
                                    return (
                                        <div>
                                            <NavLink to={`/jiraItems/team/${val.id}`}>
                                                {val.teamName}
                                            </NavLink>

                                        </div>
                                    )
                                })

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPeopleComp

