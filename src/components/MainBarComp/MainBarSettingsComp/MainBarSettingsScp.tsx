import React from 'react'
import styles from './MainBarSettingsStl.module.css'
import { Col, Dropdown, MenuProps, Row, Space } from 'antd'
import { FaArrowUpRightFromSquare, FaAtlassian, FaBoxTissue, FaCircleNotch, FaCircleUser, FaDesktop, FaFile, FaFingerprint, FaGear, FaGrip, FaRegBuilding, FaRegFolderClosed, FaUsers } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const MainBarSettingsComp: React.FC<OwnProps> = () => {

    const settingsArr = [
        {
            id: 0,
            icon: <FaUsers />,
            title: 'User management',
            text: 'Add users, groups , and manage access requests',
            link: ''
        },
        {
            id: 1,
            icon: <FaRegBuilding />,
            title: 'Billing',
            text: 'Update your billing details,manage your subsriptions and more',
            link: ''
        },
    ]

    const settingsSecArr = [
        {
            id: 0,
            icon: <FaDesktop />,
            title: 'System',
            text: 'Manage your general configuration.global permissions,loog and feel and more',
            link: ''
        },
        {
            id: 1,
            icon: <FaFile />,
            title: 'Products',
            text: 'Manage your Jira products settings and integrations',
            link: ''
        },
        {
            id: 2,
            icon: <FaRegFolderClosed />,
            title: 'Projects',
            text: 'Manage your projects settings,categories and more.',
            link: ''
        },
        {
            id: 3,
            icon: <FaBoxTissue />,
            title: 'Issues',
            text: 'Configure your issues types,workflows,screens,custom fields and more',
            link: ''
        },
        {
            id: 4,
            icon: <FaCircleNotch />,
            title: 'Apps',
            text: 'Add and maange Jira Marketpalce apps',
            link: ''
        },
    ]
    const settingsprsnlArr = [
        {
            id: 0,
            icon: <FaAtlassian />,
            title: 'Atlassian account settings',
            text: 'Manage your language,time zone,and other profile information.',
            link: ''
        },
        {
            id: 1,
            icon: <FaCircleUser />,
            title: 'Personal Jira settings',
            text: 'Manage your email notifications and other Jira settings',
            link: ''
        },
    ]




    const settingsItems: MenuProps['items'] = [
        {
            label: (
                <div className={styles.main_bar_right_cnt_title}>
                    Settings
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div className={styles.main_bar_sttngs_itm_title}>
                    ATLASSIAN ADMIN
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div className={styles.main_bar_sttngs_itm_admin_content}>
                    {
                        settingsArr.map((val) => {
                            return (
                                <NavLink to={'/'} className={styles.main_bar_sttngs_itm_admin_contentsec_ovrl}>
                                    <Row className={styles.main_bar_sttngs_itm_admin_contentsec_row}>
                                        <Col span={16}>
                                            <Row className={styles.main_bar_sttngs_itm_admin_contentsec_f_col}>
                                                <Col span={3} className={styles.main_bar_sttngs_itm_admin_contentsec_f_col_title}>
                                                    {val.icon}
                                                </Col>
                                                <Col span={21}>
                                                    <div className={styles.main_bar_sttngs_itm_admin_content_1_item}>
                                                        {val.title}
                                                    </div>
                                                    <div className={styles.main_bar_sttngs_itm_admin_content_2_item}>
                                                        {val.text}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className={styles.main_bar_sttngs_itm_admin_contentsec_col} span={8}>
                                            <FaArrowUpRightFromSquare />
                                        </Col>
                                    </Row>
                                </NavLink>
                            )
                        })
                    }
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <div className={styles.main_bar_sttngs_itm_title}>
                    JIRA SETTINGS
                </div>
            ),
            key: '3',
        },
        {
            label: (
                <div className={styles.main_bar_sttngs_itm_admin_content}>
                    {
                        settingsSecArr.map((val) => {
                            return (
                                <NavLink to={'/'} className={styles.main_bar_sttngs_itm_admin_contentsec_ovrl}>
                                    <Row className={styles.main_bar_sttngs_itm_admin_contentsec_row}>
                                        <Col span={16}>
                                            <Row className={styles.main_bar_sttngs_itm_admin_contentsec_f_col}>
                                                <Col span={3} className={styles.main_bar_sttngs_itm_admin_contentsec_f_col_title_sec}>
                                                    {val.icon}
                                                </Col>
                                                <Col span={21}>
                                                    <div className={styles.main_bar_sttngs_itm_admin_content_1_item}>
                                                        {val.title}
                                                    </div>
                                                    <div className={styles.main_bar_sttngs_itm_admin_content_2_item}>
                                                        {val.text}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className={styles.main_bar_sttngs_itm_admin_contentsec_col} span={8}>
                                            <FaArrowUpRightFromSquare />
                                        </Col>
                                    </Row>
                                </NavLink>
                            )
                        })
                    }
                </div>
            ),
            key: '4',
        },
        {
            label: (
                <div className={styles.main_bar_sttngs_itm_title}>
                    PERSONAL SETTINGS
                </div>
            ),
            key: '5',
        },
        {
            label: (
                <div className={styles.main_bar_sttngs_itm_admin_content}>
                    {
                        settingsprsnlArr.map((val) => {
                            return (
                                <NavLink to={'/'} className={styles.main_bar_sttngs_itm_admin_contentsec_ovrl}>
                                    <Row className={styles.main_bar_sttngs_itm_admin_contentsec_row}>
                                        <Col span={16}>
                                            <Row className={styles.main_bar_sttngs_itm_admin_contentsec_f_col}>
                                                <Col span={3} className={styles.main_bar_sttngs_itm_admin_contentsec_f_col_title_sec}>
                                                    {val.icon}
                                                </Col>
                                                <Col span={21}>
                                                    <div className={styles.main_bar_sttngs_itm_admin_content_1_item}>
                                                        {val.title}
                                                    </div>
                                                    <div className={styles.main_bar_sttngs_itm_admin_content_2_item}>
                                                        {val.text}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className={styles.main_bar_sttngs_itm_admin_contentsec_col} span={8}>
                                            <FaArrowUpRightFromSquare />
                                        </Col>
                                    </Row>
                                </NavLink>
                            )
                        })
                    }
                </div>
            ),
            key: '6',
        },
    ]



    return (
        <Dropdown
            rootClassName={styles.main_bar_sub_right_bar_content_2_itm} menu={{ items: settingsItems }} trigger={['click']}>
            <div>
                <Space >
                    <FaGear className={styles.main_bar_sub_right_bar_content_2_itm_icon} />
                </Space>
            </div>
        </Dropdown>
    )
}


export default MainBarSettingsComp

type OwnProps = {}