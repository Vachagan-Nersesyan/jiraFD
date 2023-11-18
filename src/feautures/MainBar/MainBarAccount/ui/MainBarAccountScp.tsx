import React from 'react'
import styles from './MainBarAccountStl.module.css'
import { Dropdown, MenuProps, Space } from 'antd'
import { FaAngleRight, FaCheckDouble, FaCircleUser, FaGrip, FaMedapps } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../../../firebase'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../../entities/store/redux-store'

const MainBarAccountComp: React.FC<OwnProps> = ({ setLocalStorageHook }) => {

    const userInfo = useSelector((state: AppStateType) => state.user.info)

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {
                localStorage.removeItem("user")
                setLocalStorageHook(false)
            })
            .catch(error => console.log(error))
    }

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
                        <img src={`${userInfo.picture}`} />
                    </div>
                    <div className={styles.main_bar_user_cntn_user_content_2_item}>
                        <div className={styles.main_bar_user_cntn_user_content_2_item_1_item}>
                            {userInfo.name}
                        </div>
                        <div className={styles.main_bar_user_cntn_user_content_2_item_2_item}>
                            {userInfo.email}
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
                <NavLink to={'/jiraItems/userPage'} className={styles.main_bar_user_cntn_link}>
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
                <div onClick={() => handleSignOut()} className={styles.main_bar_user_cntn_link}>
                    Log out
                </div>
            ),
            key: '9',
        },
    ]



    return (
        <Dropdown
            rootClassName={styles.main_bar_sub_right_bar_user_content} menu={{ items: userItems }} trigger={['click']}>

            <Space>
                <div className={styles.main_bar_sub_right_bar_user_content_pic}>
                    <img src={`${userInfo.picture}`} />
                    {/* <FaCircleUser className={styles.main_bar_sub_right_bar_content_2_itm_icon} /> */}

                </div>
            </Space>
        </Dropdown>
    )
}

export default MainBarAccountComp

type OwnProps = {
    setLocalStorageHook: (type: boolean) => void

}