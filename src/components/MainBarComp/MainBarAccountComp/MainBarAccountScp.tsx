import React from 'react'
import styles from './MainBarAccountStl.module.css'
import { Dropdown, MenuProps, Space } from 'antd'
import { FaAngleRight, FaCheckDouble, FaCircleUser, FaGrip, FaMedapps } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const MainBarAccountComp: React.FC<OwnProps> = () => {


    const userItems: MenuProps['items'] = [
        {
            label: (
                <div className={styles.main_bar_user_cntn_title}>
                    ACCOUNT
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div className={styles.main_bar_user_cntn_user_content}>
                    <div className={styles.main_bar_user_cntn_user_content_1_item}>
                        <FaCircleUser />
                    </div>
                    <div className={styles.main_bar_user_cntn_user_content_2_item}>
                        <div className={styles.main_bar_user_cntn_user_content_2_item_1_item}>
                            Vachagan
                        </div>
                        <div className={styles.main_bar_user_cntn_user_content_2_item_2_item}>
                            vach.nersesyan@bk.ru
                        </div>
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
                <div className={styles.main_bar_user_cntn_title}>
                    UPGRADE
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <NavLink to={'/'} className={styles.main_bar_user_cntn_link}>
                    Try the Standard plan <span>FREE 14-DAY TRIAL</span>
                </NavLink>
            ),
            key: '3',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div className={styles.main_bar_user_cntn_title}>
                    JIRA
                </div>
            ),
            key: '5',
        },
        {
            label: (
                <NavLink to={'/'} className={styles.main_bar_user_cntn_link}>
                    Profile
                </NavLink>
            ),
            key: '6',
        },
        {
            label: (
                <NavLink to={'/'} className={styles.main_bar_user_cntn_link}>
                    Personal settings
                </NavLink>
            ),
            key: '7',
        },
        {
            label: (
                <Dropdown menu={{
                    items: [
                        {
                            label: (
                                <div className={styles.main_bar_theme_chng_itm}>
                                    <div className={styles.main_bar_theme_chng_itm_1_item}>
                                        <FaGrip />
                                    </div>
                                    <div className={styles.main_bar_theme_chng_itm_2_item}>
                                        Light
                                    </div>
                                </div>
                            ),
                            key: '0',
                        },
                        {
                            label: (
                                <div className={styles.main_bar_theme_chng_itm}>
                                    <div className={styles.main_bar_theme_chng_itm_1_item}>
                                        <FaMedapps />
                                    </div>
                                    <div className={styles.main_bar_theme_chng_itm_2_item}>
                                        Dark
                                    </div>
                                </div>
                            ),
                            key: '1',
                        },
                    ]
                }}>
                    <div onClick={(e) => e.preventDefault()} className={styles.main_bar_user_cntn_link}>
                        <Space className={styles.main_bar_user_cntn_link_ovrl}>
                            <div>
                                Theme
                            </div>
                            <div>
                                <FaAngleRight />
                            </div>
                        </Space>
                    </div>
                </Dropdown>
            ),
            key: '8',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <NavLink to={'/'} className={styles.main_bar_user_cntn_link}>
                    Log out
                </NavLink>
            ),
            key: '9',
        },
    ]



    return (
        <Dropdown
            rootClassName={styles.main_bar_sub_right_bar_user_content} menu={{ items: userItems }} trigger={['click']}>
            <div>
                <Space >
                    <FaCircleUser className={styles.main_bar_sub_right_bar_content_2_itm_icon} />
                </Space>
            </div>
        </Dropdown>
    )
}

export default MainBarAccountComp

type OwnProps = {}