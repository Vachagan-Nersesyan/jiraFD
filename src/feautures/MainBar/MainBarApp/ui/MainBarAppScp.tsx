import React from 'react'
import styles from './MainBarAppStl.module.css'
import { Dropdown, MenuProps, Space } from 'antd'
import { FaAngleDown, FaJs } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

import firstPic from '../images/1.png'
import secondPic from '../images/2.png'
import thirdPic from '../images/3.png'


const MainBarAppComp: React.FC<OwnProps> = () => {

    const appItemsArr = [
        {
            id: 0,
            appName: 'Slack',
            appPic: firstPic,
            appLink: '/'
        },
        {
            id: 1,
            appName: 'Zendesk(Support)',
            appPic: secondPic,
            appLink: '/'
        },
        {
            id: 2,
            appName: 'Asset Management (Asset Tracking)',
            appPic: thirdPic,
            appLink: '/'
        },
    ]

    const appItems: MenuProps['items'] = [

        {
            label: (
                <div className={styles.menu_work_content_1_item_1_title}>
                    RECOMMENDED FOR YOUR TEAM
                </div>
            ),
            key: '0',
        },
        {
            label: (
                <div className={styles.menu_work_content_1_item_1_sub_title}>
                    Ship faster with marketplace apps that integrate your
                    teams tools with Jira
                </div>
            ),
            key: '1',
        },
        {
            label: (

                <div className={styles.menu_work_content_1_item_2_itm}>
                    {
                        appItemsArr.map((val) => {
                            return (
                                <NavLink to={'/'}>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                        <img src={`${val.appPic}`} />
                                    </div>
                                    <div className={styles.menu_work_content_1_item_2_itm_in_2_itm}>
                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                            {val.appName}
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            ),
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div className={styles.menu_work_content}>
                    <NavLink to={'/'}>
                        Explore more apps
                    </NavLink>
                </div>
            ),
            key: '3',
        },
        {
            label: (

                <div className={styles.menu_work_content}>
                    <NavLink to={'/'}>
                        Manage more apps
                    </NavLink>
                </div>
            ),
            key: '4',
        },
        {
            label: (

                <div className={styles.menu_work_content}>
                    <NavLink to={'/'}>
                        View app requests
                    </NavLink>
                </div>
            ),
            key: '5',
        },
    ]


    return (
        <Dropdown
            rootClassName={styles.main_bar_itms_stl} menu={{ items: appItems }} trigger={['click']}>
            <div>
                <Space >
                    Apps <FaAngleDown />
                </Space>
            </div>
        </Dropdown>
    )
}


export default MainBarAppComp

type OwnProps = {}