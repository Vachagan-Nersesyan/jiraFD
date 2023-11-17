import React, { useState } from 'react';

import styles from './MainBarStl.module.css'

import { FaMinus, FaArrowUpRightFromSquare, FaMedapps, FaJs, FaCheckDouble, FaGrip, FaJira, FaAngleDown, FaSistrix, FaCircleUser, FaCircleQuestion, FaFingerprint, FaBullhorn, FaFile, FaAtlassian, FaComment, FaPhoneFlip, FaPaperPlane, FaDesktop, FaMobileButton } from "react-icons/fa6";

import { Switch, Layout, Dropdown, Space, MenuProps, Menu, Tabs, Button, Col, Row, Input, Modal, Select, Tooltip, Checkbox, List, Avatar } from 'antd';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import type { TabsProps } from 'antd';


import { NavLink } from 'react-router-dom';

// menu left side content

import MenuFItemComp from './MenuFItemComp/MenuFItemScp'
import MainBarWorkComp from './MainBarWorkComp/MainBarWorkScp'
import MainBarProjectsComp from './MainBarProjectsComp/MainBarProjectsScp'
import MainBarFilterComp from './MainBarFilterComp/MainBarFilterScp'
import DashboardComp from './MainDashboardComp/DashboardScp'
import MainBarTeamComp from './MainBarTeamComp/MainBarTeamScp'
import MainBarAppComp from './MainBarAppComp/MainBarAppScp'
import MainBarCreateIssueComp from './MainBarCreateIssueComp/MainBarCreateIssueScp'
import MainBarNotificationsComp from './MainBarNotificationsComp/MainBarNotificationsScp'
import MainBarSettingsComp from './MainBarSettingsComp/MainBarSettingsScp';
import MainBarAccountComp from './MainBarAccountComp/MainBarAccountScp'


const { Sider } = Layout;


const MainBarComp: React.FC<OwnProps> = ({setLocalStorageHook}) => {

    const [collapsed, setCollapsed] = useState(true);


    const mainbarLeftItems: MenuProps['items'] = [
        {
            label: (
                <MenuFItemComp />
            ),
            key: '1',

        },
        {
            label: (
                <div className={styles.main_bar_logo}>
                    <NavLink to={'/'}>
                        <FaJira /> Jira Software
                    </NavLink>
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <MainBarWorkComp />

            ),
            key: '3',
        },
        {
            label: (
                <MainBarProjectsComp />

            ),
            key: '4',
        },

        {
            label: (
                <MainBarFilterComp />
            ),
            key: '5',
        },

        {
            label: (
                <DashboardComp />
            ),
            key: '6',
        },
        {
            label: (
                <MainBarTeamComp />
            ),
            key: 'teamsitm',
        },
        {
            label: (
                <MainBarAppComp />
            ),
            key: 'appitm',
        },
        {
            label: (
                <MainBarCreateIssueComp />
            ),
            key: 'alipay',
        },
    ];



    // menu right part

    const siderTextArr = [
        {
            id: 0,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
        {
            id: 1,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
        {
            id: 2,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
        {
            id: 3,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
        {
            id: 4,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
        {
            id: 5,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
        {
            id: 6,
            title: 'Show or hide statuses from the board and backlog',
            text: 'Unassign statuses from columns to hide associated issues from the board and backlog.'
        },
    ]

    const siderHelpersArr = [
        {
            id: 0,
            helperPic: <FaBullhorn />,
            helperText: 'Find out whats changed in Jira',
            helperLink: '',
        },
        {
            id: 1,
            helperPic: <FaFile />,
            helperText: 'Browse complete documentation',
            helperLink: '',
        },
        {
            id: 2,
            helperPic: <FaAtlassian />,
            helperText: 'Learn with Atlassian University',
            helperLink: '',
        },
        {
            id: 3,
            helperPic: <FaComment />,
            helperText: 'Ask our community forum',
            helperLink: '',
        },
        {
            id: 4,
            helperPic: <FaPhoneFlip />,
            helperText: 'Contact support',
            helperLink: '',
        },
        {
            id: 5,
            helperPic: <FaPaperPlane />,
            helperText: 'Give feedback about Jira',
            helperLink: '',
        },
        {
            id: 6,
            helperPic: <FaDesktop />,
            helperText: 'Keyboard shortcuts',
            helperLink: '',
        },
        {
            id: 7,
            helperPic: <FaMobileButton />,
            helperText: 'Get Jira Mobile',
            helperLink: '',
        }
    ]

    const siderLinksArr = [
        {
            id: 0,
            title: 'About Jira',
            link: ''
        },
        {
            id: 1,
            title: 'Terms of use',
            link: ''
        },
        {
            id: 2,
            title: 'Privacy policy',
            link: ''
        }, {
            id: 3,
            title: 'Notice at collection',
            link: ''
        }
    ]




    const mainbarRightItems: MenuProps['items'] = [
        {
            label: (
                <Input size="large" placeholder="Search" prefix={<FaSistrix />} />
            ),
            key: '1',

        },
        {
            label: (
                <MainBarNotificationsComp />
            ),
            key: '2',
        },
        {
            label: (
                <div>
                    <Button
                        type="text"
                        onClick={() => setCollapsed(!collapsed)}

                    >
                        <FaCircleQuestion className={styles.main_bar_sub_right_bar_content_2_itm_icon} />
                    </Button>
                </div>
            ),
            key: '3',
        },
        {
            label: (
                <MainBarSettingsComp />
            ),
            key: '4',
        },
        {
            label: (
                <MainBarAccountComp setLocalStorageHook={setLocalStorageHook} />
            ),
            key: '5',
        },
    ]


    const menuItemFsFunc = (str: string) => {
        console.log(str)
    }

    const menuItemScFunc = (str: string) => {
        console.log(str)
    }





    return (
        <>
            <div className={styles.main_bar_container_overlay}>
                <Row className={styles.main_bar_container}>
                    <Col span={16}>
                        <Menu selectable={false} rootClassName={styles.menu} mode="horizontal" items={mainbarLeftItems} />

                    </Col>
                    <Col className={styles.main_bar_content} span={8}>
                        <Menu selectable={false} rootClassName={styles.sec_menu} mode="horizontal" items={mainbarRightItems} />

                    </Col>
                </Row>
            </div>

            {/* main bar help content */}

            <Sider
                className={styles.main_sider}
                collapsedWidth="0"
                trigger={null}
                width={350}
                collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <div className={styles.main_bar_help_sider_content}>
                    <div className={styles.main_sider_menu_in1_item}>
                        <div className={styles.main_bar_right_bar_help_content}>
                            <div className={styles.main_bar_right_bar_help_content_first_item}>
                                <div className={styles.main_bar_right_bar_help_content_title}>
                                    Help
                                </div>
                            </div>
                            <div className={styles.main_bar_right_bar_help_content_second_item}>
                                <Input size="large" placeholder="large size" prefix={<FaSistrix />} />
                            </div>

                        </div>
                    </div>

                    <div className={styles.main_sider_menu_in_3_cont_item}>
                        <div className={styles.main_sider_menu_in_3_cont_item_in_1_itm}>
                            {
                                siderTextArr.map((val) => {
                                    return (
                                        <div
                                            className={styles.main_sider_menu_in1_item}
                                            onClick={() => menuItemFsFunc(val.title)}
                                        >
                                            <div className={styles.main_sider_menu_in1_item_txt_item}>
                                                <div className={styles.main_sider_menu_in1_item_txt_item_1_itm}>
                                                    {val.title}
                                                </div>
                                                <div className={styles.main_sider_menu_in1_item_txt_item_2_itm}>
                                                    {val.text}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div className={styles.main_sider_menu_in_3_cont_item_in_2_itm}>
                            {
                                siderHelpersArr.map((val) => {
                                    return (
                                        <div
                                            className={styles.main_sider_menu_in_3_cont_item_in_2_itm_content}
                                            onClick={() => menuItemScFunc(val.helperText)}
                                        >
                                            <div className={styles.main_sider_menu_in_3_cont_item_in_2_itm_content_in_itm}>
                                                <div className={styles.main_sider_menu_in_3_cont_item_in_2_itm_content_in_itm_1_item}>
                                                    {val.helperPic}
                                                </div>
                                                <div className={styles.main_sider_menu_in_3_cont_item_in_2_itm_content_in_itm_2_item}>
                                                    {val.helperText}
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.main_sider_menu_in1_item_container}
                    >
                        <div className={styles.main_sider_menu_in1_item_container_in_item}>
                            {
                                siderLinksArr.map((val) => {
                                    return (
                                        <NavLink to={'/'} >
                                            {val.title}
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </Sider>





        </>

    )
}

export default MainBarComp

type OwnProps = {
    setLocalStorageHook: (type: boolean) => void
}