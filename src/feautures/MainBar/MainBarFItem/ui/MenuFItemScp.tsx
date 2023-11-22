import React, { useState } from 'react'
import { Dropdown, MenuProps, Space } from 'antd'
import { FaCompass, FaCheckDouble, FaRegSun, FaGrip, FaJira, FaJs, FaMedapps, FaArrowUpRightFromSquare, FaSlack, FaGear, FaEarthAsia } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import styles from './MenuFItemStl.module.css'

import firstPic from '../images/1.svg'
import secondPic from '../images/2.svg'
import thirdPic from '../images/3.svg'
import fivthPic from '../images/5.svg'
import sixthPic from '../images/6.svg'
import { OwnProps } from './MenuFItemTs.interface'



const MenuFItemComp: React.FC<OwnProps> = (props) => {

    const [isOtherDrpdwnItmOpen, setIsOtherDrpdwnItmOpen] = useState(false);


    const items: MenuProps['items'] = [
        {
            label: (
                <div className={styles.menu_1_itm_content}>
                    <div className={styles.menu_1_itm_content_1_itm}>
                        Switch to
                    </div>
                    <div className={styles.menu_1_itm_content_2_itm}>
                        <NavLink to={'/'}>
                            Atlassian Start <FaArrowUpRightFromSquare />
                        </NavLink>
                    </div>
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm}>
                            <img src={firstPic} />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            Jira Software
                        </div>
                    </NavLink>
                </div>
            ),
            key: '1',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm}>
                            <img src={secondPic} />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            <div className={styles.menu_1_itm_1_content_2_itm_1_sub}>
                                Jira Work Management <span>NEW</span>
                            </div>
                            <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm}>
                                Manage business projects,freewith Jira Software
                            </div>
                        </div>
                    </NavLink>
                </div>
            ),
            key: '2',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_in}>
                            <FaGear />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            Administration
                        </div>
                    </NavLink>
                </div>
            ),
            key: '3',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content}>
                    RECOMMENDED FOR YOUR TEAM
                </div>
            ),
            key: '4',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_sec_tp_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_uniq}>
                            <img src={thirdPic} />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            <div className={styles.menu_1_itm_1_content_2_itm_1_sub}>
                                Jira Work Management <span>NEW</span>
                            </div>
                            <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm}>
                                Manage business projects,freewith Jira Software
                            </div>
                        </div>
                    </NavLink>
                    <div className={styles.menu_1_itm_1_drpdwn_cnt}>
                        <Dropdown
                            onOpenChange={(open: boolean): void => {
                                setIsOtherDrpdwnItmOpen(!isOtherDrpdwnItmOpen)
                            }}
                            menu={{
                                items: [
                                    {
                                        label: (
                                            <NavLink to={'/'} className={styles.menu_1_itm_1_drpdwn_cnt_nvlnk}>
                                                Not interested
                                            </NavLink>
                                        ),
                                        key: '0',
                                    },
                                    {
                                        label: (
                                            <NavLink to={'/'} className={styles.menu_1_itm_1_drpdwn_cnt_nvlnk}>
                                                Why am I seeing this?
                                            </NavLink>
                                        ),
                                        key: '1',
                                    },
                                ]
                            }} trigger={['hover']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm_in_drpd}>
                                        ...
                                    </div>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            ),
            key: '5',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_sec_tp_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_uniq_itm}>
                            <FaJira />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            <div className={styles.menu_1_itm_1_content_2_itm_1_sub}>
                                Jira Work Management <span>NEW</span>
                            </div>
                            <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm}>
                                Manage business projects,freewith Jira Software
                            </div>
                        </div>
                    </NavLink>
                    <div className={styles.menu_1_itm_1_drpdwn_cnt}>
                        <Dropdown
                            onOpenChange={(open: boolean): void => {
                                setIsOtherDrpdwnItmOpen(!isOtherDrpdwnItmOpen)
                            }}
                            menu={{
                                items: [
                                    {
                                        label: (
                                            <NavLink to={'/'} className={styles.menu_1_itm_1_drpdwn_cnt_nvlnk}>
                                                Not interested
                                            </NavLink>
                                        ),
                                        key: '0',
                                    },
                                    {
                                        label: (
                                            <NavLink to={'/'} className={styles.menu_1_itm_1_drpdwn_cnt_nvlnk}>
                                                Why am I seeing this?
                                            </NavLink>
                                        ),
                                        key: '1',
                                    },
                                ]
                            }} trigger={['hover']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm_in_drpd}>
                                        ...
                                    </div>

                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            ),
            key: '6',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_sec_tp_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_uniq}>
                            <img src={fivthPic} />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            <div className={styles.menu_1_itm_1_content_2_itm_1_sub}>
                                Jira Work Management <span>NEW</span>
                            </div>
                            <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm}>
                                Manage business projects,freewith Jira Software
                            </div>
                        </div>
                    </NavLink>
                    <div className={styles.menu_1_itm_1_drpdwn_cnt}>
                        <Dropdown
                            onOpenChange={(open: boolean): void => {
                                setIsOtherDrpdwnItmOpen(!isOtherDrpdwnItmOpen)
                            }}
                            menu={{
                                items: [
                                    {
                                        label: (
                                            <NavLink to={'/'} className={styles.menu_1_itm_1_drpdwn_cnt_nvlnk}>
                                                Not interested
                                            </NavLink>
                                        ),
                                        key: '0',
                                    },
                                    {
                                        label: (
                                            <NavLink to={'/'} className={styles.menu_1_itm_1_drpdwn_cnt_nvlnk}>
                                                Why am I seeing this?
                                            </NavLink>
                                        ),
                                        key: '1',
                                    },
                                ]
                            }} trigger={['hover']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm_in_drpd}>
                                        ...
                                    </div>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            ),
            key: '7',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_sec_tp_content}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_uniq_slck_itm}>
                            <FaSlack />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            <div className={styles.menu_1_itm_1_content_2_itm_1_sub}>
                                Jira Work Management <span>NEW</span>
                            </div>
                            <div className={styles.menu_1_itm_1_content_2_itm_2_sub_itm}>
                                Manage business projects,freewith Jira Software
                            </div>
                        </div>
                    </NavLink>
                </div>
            ),
            key: '8',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content_slck_itm}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_in}>
                            <FaCompass />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            More Atlassian products
                        </div>
                    </NavLink>
                </div>
            ),
            key: '9',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content}>
                    MORE
                </div>
            ),
            key: '10',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content_slck_itm}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_container}>
                        <div className={styles.menu_1_itm_1_content_1_itm_earth_in}>
                            <FaEarthAsia />
                        </div>
                        <div className={styles.menu_1_itm_1_content_2_itm}>
                            Jira
                        </div>
                    </NavLink>
                </div>
            ),
            key: '11',
        },
        {
            label: (
                <div className={styles.menu_1_itm_1_content_lst}>
                    <NavLink to={'/'} className={styles.menu_1_itm_1_content_lst_btns_cnt}>
                        Manage list
                    </NavLink>
                </div>
            ),
            key: '12',
        }
    ];

    return (
        <>
            <Dropdown

                overlayClassName={styles.main_bar_switch_content}
                menu={{ items }}
                trigger={['click']}
                destroyPopupOnHide={false}

            >
                <NavLink to={'/'} onClick={(e) => e.preventDefault()}>
                    <Space className={styles.main_bar_switch_content_txt}>
                        <FaGrip />
                    </Space>
                </NavLink>
            </Dropdown>
        </>
    )
}

export default MenuFItemComp

