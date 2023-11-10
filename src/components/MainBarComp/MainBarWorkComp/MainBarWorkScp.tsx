import React from 'react'
import styles from './MainBarWorkStl.module.css'
import { Dropdown, Space, Tabs, MenuProps } from 'antd'
import { FaAngleDown, FaJs } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import type { TabsProps } from 'antd';


const MainBarWorkComp: React.FC<OwnProps> = () => {
    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Assigned to me',
            children: (
                <div className={styles.menu_work_content}>
                    <div className={styles.menu_work_content_1_item}>
                        <div className={styles.menu_work_content_1_item_1_title}>
                            IN PROGRESS
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm}>
                            <NavLink to={'/'}>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <FaJs />
                                </div>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                        bag 1
                                    </div>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                        P1-2 . project 1
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.menu_work_content_border}></div>
                    <div className={styles.menu_work_content}>
                        <NavLink to={'/jiraItems/projectsWork'}>
                            <div className={styles.menu_work_content_ovrl}>
                                Go to Your Work page
                            </div>
                        </NavLink>
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Recent',
            children: (
                <div className={styles.menu_work_content}>
                    <div className={styles.menu_work_content_1_item}>
                        <div className={styles.menu_work_content_1_item_1_title}>
                            WORKED ON
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm}>
                            <NavLink to={'/'}>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <FaJs />
                                </div>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                        bag 1
                                    </div>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                        P1-2 . project 1
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.menu_work_content_1_item}>
                        <div className={styles.menu_work_content_1_item_1_title}>
                            VIEWED
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm}>
                            <NavLink to={'/'}>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <FaJs />
                                </div>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                        bag 1
                                    </div>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                        P1-2 . project 1
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.menu_work_content_border}>

                    </div>
                    <div className={styles.menu_work_content}>
                        <NavLink to={'/jiraItems/projectsWork'}>
                            Go to Your Work page
                        </NavLink>
                    </div>
                </div>
            ),
        },
        {
            key: '3',
            label: 'Boards',
            children: (
                <div className={styles.menu_work_content}>
                    <div className={styles.menu_work_content_1_item}>
                        <div className={styles.menu_work_content_1_item_1_title}>
                            RECENT
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm}>
                            <NavLink to={'/'}>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <FaJs />
                                </div>
                                <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                        bag 1
                                    </div>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                        P1-2 . project 1
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.menu_work_content_border}>

                    </div>
                    <div className={styles.menu_work_content}>
                        {/* anel */}
                        <NavLink to={'/'}>
                            View all boards
                        </NavLink>
                    </div>
                </div>
            )
        },
    ];

    const workItems: MenuProps['items'] = [
        {
            label: (
                <div className={styles.main_bar_work_title_tab_content}>
                    <Tabs className={styles.main_bar_work_title_tab_content_tab} defaultActiveKey="1" items={tabItems} />
                </div>
            ),
            key: '0',
        }
    ];

    return (
        <div>
            <Dropdown overlayClassName={styles.main_bar_itms_stl} menu={{ items: workItems }} trigger={['click']}>
                <div className={styles.main_bar_itms_stl_title}>
                    <Space >
                        Your work <FaAngleDown />
                    </Space>
                </div>
            </Dropdown>
        </div>
    )
}


export default MainBarWorkComp

type OwnProps = {}