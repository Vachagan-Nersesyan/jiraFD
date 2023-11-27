import React, { useState } from 'react'
import styles from './ProjectPageStl.module.css'
import secStyles from '../../DevelopmentComp/ui/DevelopmentStl.module.css'
import { Breadcrumb, Button, Col, Row, Tabs } from 'antd'
import { FaRegCompass, FaRegFileLines, FaRegRectangleList, FaRoad, FaTurnUp, FaUserGroup } from 'react-icons/fa6'
import firstPic from '../images/1.svg'
import { OwnProps } from './ProjectTs.interface'
import { NavLink } from 'react-router-dom'


const ProjectPageComp: React.FC<OwnProps> = (props) => {

    const projectPageArr = [
        {
            id: 0,
            icon: <FaRegFileLines />,
            title: 'Blank page',
            text: 'Start a page from scratch.',
            pic: '/pictures/projectPageImages/1.svg'
        },
        {
            id: 1,
            icon: <FaRegRectangleList />,
            title: 'Product requirements',
            text: ' Define,track and scope requirements for your product or feature.',
            pic: '/pictures/projectPageImages/2.svg'
        },
        {
            id: 2,
            icon: <FaRoad />,
            title: 'Design decision',
            text: 'Record important project decisions and communciate them with your team.',
            pic: '/pictures/projectPageImages/3.svg'
        },
        {
            id: 3,
            icon: <FaUserGroup />,
            title: 'Meeting notes',
            text: 'Set meeting agendas,take notes, and share action items with your team.',
            pic: '/pictures/projectPageImages/4.svg'
        },
        {
            id: 4,
            icon: <FaTurnUp />,
            title: 'Retrospective',
            text: 'What went well? What could have gone better ? Crowdsource imporvements with your team.',
            pic: '/pictures/projectPageImages/5.svg'
        },
        {
            id: 5,
            icon: <FaRegCompass />,
            title: 'Explore more templates',
        },
    ]

    const [picLink, setPicLink] = useState<string | undefined>(firstPic)


    return (
        <div className={secStyles.development_page_content_overlay}>
            <Row>
                <Col span={18} className={styles.development_page_content_overlay_first_col}>
                    <div className={secStyles.development_page_content_in_1_sect}>
                        <Breadcrumb
                            items={[
                                {
                                    title: <NavLink to={'/jiraItems/allProjects'}>Home</NavLink>,
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.project_page_content_in_1_sect_title}>
                        Project pages <span>TRY</span>
                    </div>
                    <div className={styles.project_page_content_in_1_sect_2_item}>
                        Capture your team's knowledge and improve the way you get work done.
                    </div>
                    <div className={styles.project_page_content_in_1_sect_2_item_picture_overlay}>
                        <div className={styles.project_page_content_in_1_sect_2_item_picture}>
                            <img src={picLink} />
                        </div>
                    </div>

                </Col>
                <Col span={6} className={secStyles.development_page_content_overlay_sec_col}>
                    <div className={styles.project_page_content_in_1_sect_3_item_content_1_item}>
                        <div className={styles.project_page_content_in_1_sect_3_item_content_1_item_1_item}>
                            Preview templates
                        </div>
                        <div className={styles.project_page_content_in_1_sect_3_item_content_1_item_2_item}>
                            POPULAR WITH TEAMS LIKE YOURS
                        </div>
                    </div>
                    <div className={styles.project_page_content_in_1_sect_3_item_content}>

                        <Tabs
                            tabPosition='right'
                            tabBarStyle={{
                                paddingLeft: '0',
                                overflow: 'hidden'
                            }}
                            className={styles.project_page_content_in_1_sect_3_item_content_tab}
                            items={
                                projectPageArr.map((val) => {
                                    return (
                                        {
                                            label: (
                                                <div className={styles.project_page_content_in_tab_content_overlay} onClick={() => setPicLink(val.pic)}>
                                                    <div className={styles.project_page_content_in_tab_content_overlay_icon}>
                                                        {val.icon}
                                                    </div>
                                                    <div className={styles.project_page_content_in_tab_content}>
                                                        <div className={styles.project_page_content_in_tab_content_1_item}>
                                                            {val.title}
                                                        </div>
                                                        <div className={styles.project_page_content_in_tab_content_2_item}>
                                                            {val.text}
                                                        </div>
                                                    </div>
                                                </div>

                                            ),
                                            key: `${val.id}`,

                                        }
                                    )
                                }
                                )}


                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectPageComp

