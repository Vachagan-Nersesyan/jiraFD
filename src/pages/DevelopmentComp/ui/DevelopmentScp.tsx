import React from 'react'
import styles from './DevelopmentStl.module.css'
import { Breadcrumb, Button, Col, Dropdown, List, Row, Space } from 'antd'
import { FaAlignCenter, FaAlignLeft, FaEllipsis, FaSistrix, FaVolumeHigh } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import firstPic from '../images/1.svg'
import secondPic from '../images/2.svg'
import thirdPic from '../images/3.svg'
import forthPic from '../images/4.png'
import fivthPic from '../images/5.svg'

import sixthPic from '../images/6.png'
import seventhPic from '../images/7.png'
import eightPic from '../images/8.png'
import { OwnProps } from './DevelopmentTs.interface'



const DevelopmentComp: React.FC<OwnProps> = (props) => {

    const developPageInfoArr = [
        {
            id: 0,
            pic: `${secondPic}`,
            title: 'Collaborate on code with the right context',
            text: 'Manage your entire development workflow, from code to deployment. Get the context your team needs to ship better software with a first-in-class Jira integration.'
        },
        {
            id: 1,
            pic: `${thirdPic}`,
            title: 'Simply copy & paste issue keys to start work in Jira Software',
            text: 'Use issue keys to link development tools to issues. Include an issue key in any branches, commit messages, or pull requests you create sending data back in to your Jira projects.'
        },
        {
            id: 2,
            pic: `${forthPic}`,
            title: 'Connect your entire workflow with automation',
            text: 'Make multiple updates with one action. Streamline your teams workflow by better tracking of productivity, code writing, reviews and testing.'
        },
    ]


    const developPageMarketplaceContentArr = [
        {
            id: 0,
            pic: `${sixthPic}`,
            title: 'as[ifhda[soh fda',
            text: 'zxcvzxcvasd f ewef wfw',
            installCount: '36.5 installs'
        },
        {
            id: 1,
            pic: `${seventhPic}`,
            title: 'as[ifhda[soh fda',
            text: 'zxcvzxcvasd f ewef wfw',
            installCount: '36.5 installs'
        },
        {
            id: 2,
            pic: `${eightPic}`,
            title: 'as[ifhda[soh fda',
            text: 'zxcvzxcvasd f ewef wfw',
            installCount: '36.5 installs'
        },
    ]


    return (
        <div className={styles.development_page_content_overlay}>
            <div className={styles.development_page_content_in_1_sect}>
                <Breadcrumb
                    items={[
                        {
                            title: <NavLink to={'/jiraItems/allProjects'}>Home</NavLink>,
                        },
                    ]}
                />
            </div>
            <div className={styles.development_page_content_in_2_sect}>
                <Row>
                    <Col span={12} className={styles.development_page_content_in_2_sect_title}>
                        Code
                    </Col>
                    <Col span={12} className={styles.development_page_content_in_2_sect_sec_col_content}>
                        <Button ><FaVolumeHigh /> Give feedback</Button>
                        <Button>
                            <Dropdown menu={{
                                items: [
                                    {
                                        label: (
                                            <div>
                                                Manage project features
                                            </div>
                                        ),
                                        key: '0',
                                    },
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <FaEllipsis />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.development_page_content_in_3_sect}>
                <Row className={styles.development_page_content_in_3_sect_row}>
                    <Col span={12}>
                        <img src={firstPic} />
                    </Col>
                    <Col span={12} className={styles.development_page_content_in_3_sect_sec_col}>
                        <div className={styles.development_page_content_in_3_sect_sec_col_1_item}>
                            Get visibility into your team's work, from issue to code
                        </div>
                        <div className={styles.development_page_content_in_3_sect_sec_col_2_item}>
                            Create an automated DevOps workflow and minimize context switching between Jira Software and <span>Bitbucket, GitHub, GitLab,</span> and other source code management tools.
                        </div>
                    </Col>
                </Row>
                <div className={styles.development_page_content_in_3_sect_row_oth}>
                    <div className={styles.development_page_content_in_3_sect_sec_col_1_item}>
                        Release 14% more often with Jira and Bitbucket
                    </div>
                    <div className={styles.development_page_content_in_3_sect_sec_col_2_item}>
                        Teams that integrate Jira Software with Bitbucket release versions 14% more often
                        than those who don't.
                    </div>
                </div>
                <div>
                    {
                        developPageInfoArr.map((val, ind) => {
                            if (ind % 2 === 1) {
                                return (
                                    <Row className={styles.development_page_content_in_3_sect_row}>
                                        <Col span={12}>
                                            <img src={`${val.pic}`} />
                                        </Col>
                                        <Col span={12} className={styles.development_page_content_in_3_sect_sec_col}>
                                            <div className={styles.development_page_content_in_3_sect_sec_col_1_item}>
                                                {val.title}
                                            </div>
                                            <div className={styles.development_page_content_in_3_sect_sec_col_2_item}>
                                                {val.text}
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return (
                                    <Row className={styles.development_page_content_in_3_sect_row}>
                                        <Col span={12} className={styles.development_page_content_in_3_sect_sec_col}>
                                            <div className={styles.development_page_content_in_3_sect_sec_col_1_item}>
                                                {val.title}
                                            </div>
                                            <div className={styles.development_page_content_in_3_sect_sec_col_2_item}>
                                                {val.text}
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <img src={`${val.pic}`} />
                                        </Col>

                                    </Row>
                                )
                            }
                        })
                    }
                </div>
                <div className={styles.development_page_content_in_5_sect_row_oth}>
                    <div className={styles.development_page_content_in_5_sect_row_oth_first_item}>
                        <img src={fivthPic} />

                    </div>

                    <div className={styles.development_page_content_in_5_sect_row_oth_sec_item}>
                        {
                            developPageMarketplaceContentArr.map((val) => {
                                return (
                                    <div className={styles.development_page_content_in_5_sect_row_oth_sec_item_in_content}>
                                        <div className={styles.development_page_content_in_5_sect_row_oth_sec_item_in_content_1_item}>
                                            <img src={`${val.pic}`} />
                                        </div>
                                        <div className={styles.development_page_content_in_5_sect_row_oth_sec_item_in_content_2_item}>
                                            {val.title}
                                        </div>
                                        <div className={styles.development_page_content_in_5_sect_row_oth_sec_item_in_content_3_item}>
                                            {val.text}
                                        </div>
                                        <div className={styles.development_page_content_in_5_sect_row_oth_sec_item_in_content_4_item}>
                                            {val.installCount}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.development_page_content_in_6_sect}>
                    <NavLink to={'/'}>
                        Browse the Atlassian Marketplace for more code integrations <FaAlignLeft />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default DevelopmentComp


