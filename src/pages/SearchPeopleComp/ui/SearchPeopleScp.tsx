import React from "react";

import styles from './SearchPeopleStl.module.css'

import { Col, Result, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Card } from 'antd';
import { Button, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { FaAddressBook, FaSistrix } from "react-icons/fa6";



const SearchPeopleComp: React.FC<OwnProps> = () => {

    const { Meta } = Card;

    return (
        <div className={styles.search_people_content_container}>
            <div className={styles.search_people_content}>
                <div className={styles.search_people_content_in_1_item}>
                    <Row>
                        <Col span={12} className={styles.search_people_content_in_1_item_title}>
                            People and teams
                        </Col>
                        <Col span={12} className={styles.search_people_content_in_1_item_sec_col}>
                            <Button>Manage users</Button>
                            <Button>Create team</Button>
                            <Button type="primary">Add people</Button>
                        </Col>
                    </Row>

                </div>
                <div className={styles.search_people_content_in_2_item}>
                    <Input size="large" placeholder="large size" prefix={<FaSistrix />} />

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
                            [{
                                id: 0,
                                pic: '',
                                name: '',
                                subtitle: ''
                            }].map((val) => {
                                return (
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                    >
                                        <Meta title="Europe Street beat" description={<div><Button type="primary">Primary Button</Button></div>} />
                                    </Card>
                                )
                            })
                        }
                    </div>
                    <div className={styles.search_people_content_in_3_item_2_item}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
                </div>
                <div className={styles.search_people_content_in_4_item}>
                    <div className={styles.search_people_content_in_3_item_title}>
                        Your teams
                    </div>
                    <div className={styles.search_people_content_in_4_item_txt_content}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPeopleComp

type OwnProps = {}