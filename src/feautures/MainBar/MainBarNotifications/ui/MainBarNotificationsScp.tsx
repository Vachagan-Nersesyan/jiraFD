import React from 'react'
import styles from './MainBarNorificationsStl.module.css'
import { Col, Dropdown, Row, Space, Switch, Tabs } from 'antd'
import { FaArrowUpRightFromSquare, FaCheckDouble, FaExclamation, FaFingerprint, FaGrip, FaGripVertical } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import type { MenuProps, TabsProps } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import pic from '../images/1.png'



const MainBarNotificationsComp: React.FC<OwnProps> = () => {

    const tabrightbarItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Direct',
            children: (
                <div className={styles.menu_notification_content}>
                    <div className={styles.menu_notification_content_in_2_item}>
                        <div className={styles.menu_notification_content_in_2_item_in_1_item}>
                            <img src={pic} />
                        </div>
                        <div className={styles.menu_notification_content_in_2_item_in_2_item}>
                            You have no notifications from the last 30 days.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Watching',
            children: (
                <div className={styles.menu_notification_content}>
                    <div className={styles.menu_notification_content_in_2_item}>
                        <div className={styles.menu_notification_content_in_2_item_in_1_item}>
                            <img src={pic} />
                        </div>
                        <div className={styles.menu_notification_content_in_2_item_in_2_item}>
                            You have no notifications from the last 30 days.
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const notificitems: MenuProps['items'] = [
        {
            label: (
                <Row className={styles.main_bar_notifications_bar}>
                    <Col span={3} className={styles.main_bar_notifications_bar_title}>
                        Notifications
                    </Col>
                    <Col span={21} className={styles.main_bar_notifications_sec_col}>
                        <Row>
                            <Col span={13} className={styles.main_bar_notifications_sec_col_1_item}>
                                Only show undread
                            </Col>
                            <Col span={4} className={styles.main_bar_notifications_sec_col_2_item}>
                                <Switch
                                    checkedChildren={<CheckOutlined />}
                                    unCheckedChildren={<CloseOutlined />}
                                    defaultChecked
                                    className={styles.main_bar_notifications_sec_col_2_item_chckd}
                                />
                            </Col>
                            <Col span={3} className={styles.main_bar_notifications_sec_col_2_item}>
                                <NavLink to={'/'}>
                                    <FaArrowUpRightFromSquare />
                                </NavLink>
                            </Col>
                            <Col span={3} className={styles.main_bar_notifications_sec_col_2_item}>
                                <Dropdown menu={{
                                    items: [

                                        {
                                            key: '1',
                                            label: (
                                                <NavLink to={'/'} className={styles.main_bar_rg_1_cnt_itm_lnk}>
                                                    <div className={styles.main_bar_rg_1_cnt_itm}>
                                                        <div className={styles.main_bar_rg_1_cnt_itm_1_item}>
                                                            <FaCheckDouble />
                                                        </div>
                                                        <div className={styles.main_bar_rg_1_cnt_itm_2_item}>
                                                            Switch to list view
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            ),
                                        },
                                        {
                                            key: '2',
                                            label: (
                                                <NavLink to={'/'} className={styles.main_bar_rg_1_cnt_itm_lnk}>
                                                    <div className={styles.main_bar_rg_1_cnt_itm}>
                                                        <div className={styles.main_bar_rg_1_cnt_itm_1_item}>
                                                            <FaGrip />
                                                        </div>
                                                        <div className={styles.main_bar_rg_1_cnt_itm_2_item}>
                                                            Give feedback
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            )
                                        }

                                    ]
                                }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <FaGripVertical />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ),
            key: '0'
        },
        {
            label: (
                <Tabs defaultActiveKey="1" items={tabrightbarItems} />
            ),
            key: '1',
        }
    ];


    return (
        <Dropdown
            overlayClassName={styles.main_bar_sub_right_bar_content_2_itm} menu={{ items: notificitems }} trigger={['click']}>
            <NavLink to={'/'} onClick={(e) => e.preventDefault()}>
                <Space >
                    <FaExclamation className={styles.main_bar_sub_right_bar_content_2_itm_icon} />
                </Space>
            </NavLink>
        </Dropdown>
    )
}


export default MainBarNotificationsComp

type OwnProps = {}