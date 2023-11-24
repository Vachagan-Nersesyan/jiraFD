import React, { useState } from 'react'
import styles from './DashboardStl.module.css'
import { Button, Col, Dropdown, Input, MenuProps, Modal, Row, Select, Space } from 'antd'
import { FaAngleDown, FaCheckDouble } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { OwnProps } from './DashboardTs.interface'

const DashboardComp: React.FC<OwnProps> = () => {

    const [isModalOpen, setIsModalOpen] = useState([false, false]);

    const toggleModal = (idx: number, target: boolean) => {
        setIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };


    const dashboardItems: MenuProps['items'] = [
        {
            label: (

                <div className={styles.menu_dashboard_item}>
                    <div className={styles.menu_dashboard_item_in_pic}>
                        <FaCheckDouble />
                    </div>
                    <div className={styles.menu_dashboard_item_in_2_item}>
                        Create a dashboard to track the status of your projects.
                    </div>
                    <div className={styles.menu_dashboard_item_in_3_item}>
                        <NavLink to={'/'}>
                            Learn more
                        </NavLink>
                    </div>
                </div>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div className={styles.menu_work_content}>
                    <NavLink to={'/jiraItems/dashboard'}>
                        View all dashboards
                    </NavLink>
                </div>
            ),
            key: '2',
        },
        {
            label: (

                <div onClick={() => toggleModal(0, true)} className={styles.menu_work_content}>

                    Create dashboard

                </div>
            ),
            key: '3',
        }
    ]

    return (
        <>
            <Dropdown rootClassName={styles.main_bar_itms_stl} menu={{ items: dashboardItems }} trigger={['click']}>
                <div>
                    <Space >
                        Dashboard <FaAngleDown />
                    </Space>
                </div>
            </Dropdown>

            <Modal
                open={isModalOpen[0]}
                onOk={() => toggleModal(0, false)}
                onCancel={() => toggleModal(0, false)}
                footer="Footer"
                className={styles.dashboard_modal}
                styles={{
                    header: {
                        borderRadius: 0,
                        paddingInlineStart: 5,
                    },
                    body: {
                        // display : 'flex',
                        borderRadius: 5,
                    },
                    mask: {
                        backdropFilter: 'blur(5px)',
                    },
                    footer: {
                        display: 'none'
                    },
                }}
            >
                <div className={styles.main_bar_dashboard_content}>
                    <div className={styles.main_bar_dashboard_content_in_1_item}>
                        Create dashboard
                    </div>
                    <div className={styles.main_bar_dashboard_content_in_2_item}>
                        Reqired fields are marked with an asterisk *
                    </div>
                    <div className={styles.main_bar_dashboard_content_in_3_item}>
                        <div className={styles.main_bar_dashboard_content_in_3_item_1_item}>
                            Name
                        </div>
                        <div className={styles.main_bar_dashboard_content_in_3_item_2_item}>
                            <Input className={styles.main_bar_dashboard_content_in_3_item_2_item_inp} placeholder="Basic usage" />
                        </div>
                    </div>
                    <div className={styles.main_bar_dashboard_content_in_3_item}>
                        <div className={styles.main_bar_dashboard_content_in_3_item_1_item}>
                            Description
                        </div>
                        <div className={styles.main_bar_dashboard_content_in_3_item_2_item}>
                            <Input placeholder="Basic usage" />
                        </div>
                    </div>
                    <div className={styles.main_bar_dashboard_content_in_4_item}>
                        <div className={styles.main_bar_dashboard_content_in_3_item_1_item}>
                            Viewers
                        </div>
                        <div className={styles.main_bar_dashboard_content_in_4_item_content}>
                            <Row className={styles.main_bar_dashboard_content_in_4_item_content_in_row}>
                                <Col span={12} className={styles.main_bar_dashboard_content_in_4_item_content_first_item}>
                                    <Select
                                        className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item}

                                        defaultValue={{ value: 'user1', label: 'user2' }}
                                        options={[
                                            {
                                                value: 'user1',
                                                label: (
                                                    <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item}>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_1}>
                                                            <FaCheckDouble />
                                                        </div>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_2}>
                                                            User Name
                                                        </div>
                                                    </div>
                                                ),
                                            },
                                            {
                                                value: 'user2',
                                                label: (
                                                    <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item}>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_1}>
                                                            <FaCheckDouble />
                                                        </div>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_2}>
                                                            User Name 2
                                                        </div>
                                                    </div>
                                                ),
                                            },
                                        ]}
                                    />
                                </Col>
                                <Col span={12} className={styles.main_bar_dashboard_content_in_4_item_content_sec_item}>
                                    <Button className={styles.main_bar_dashboard_content_in_4_item_content_in_2_item}>Add</Button>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.main_bar_dashboard_content_in_4_item_content}>
                            <Row className={styles.main_bar_dashboard_content_in_4_item_content_in_row_sec}>
                                <Col span={24}>
                                    <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_sec}>
                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_1}>
                                            <FaCheckDouble />
                                        </div>
                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_2}>
                                            Private
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.main_bar_dashboard_content_in_3_item_1_item}>
                            Editors
                        </div>
                        <div>
                            <Row>
                                <Col span={12}>
                                    <Select
                                        className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item}
                                        labelInValue
                                        defaultValue={{ value: 'user1', label: 'user2' }}
                                        options={[
                                            {
                                                value: 'user1',
                                                label: (
                                                    <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item}>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_1}>
                                                            <FaCheckDouble />
                                                        </div>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_2}>
                                                            User Name
                                                        </div>
                                                    </div>
                                                ),
                                            },
                                            {
                                                value: 'user2',
                                                label: (
                                                    <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item}>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_1}>
                                                            <FaCheckDouble />
                                                        </div>
                                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_2}>
                                                            User Name 2
                                                        </div>
                                                    </div>
                                                ),
                                            },
                                        ]}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Button>Add</Button>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.main_bar_dashboard_content_in_4_item_content}>
                            <Row className={styles.main_bar_dashboard_content_in_4_item_content_in_row_sec}>
                                <Col span={24}>
                                    <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_sec}>
                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_1}>
                                            <FaCheckDouble />
                                        </div>
                                        <div className={styles.main_bar_dashboard_content_in_4_item_content_in_1_item_slct_item_item_2}>
                                            Private
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <Row>
                            <Col span={24} className={styles.dashboard_modal_last_btn}>
                                <Button type="primary">Primary Button</Button>
                                <Button>Default Button</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default DashboardComp

