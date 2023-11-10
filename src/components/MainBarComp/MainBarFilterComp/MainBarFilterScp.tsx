import React from 'react'
import styles from './MainBarFilterStl.module.css'
import { Dropdown, MenuProps, Space } from 'antd'
import { FaAngleDown, FaJs } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const MainBarFilterComp: React.FC<OwnProps> = () => {

    const filterItmsArr = [
        {
            id: 0,
            filterName: 'Resolved recently',
        },
        {
            id: 1,
            filterName: 'Reported by me',
        },
        {
            id: 2,
            filterName: 'Done issues',
        },
        {
            id: 3,
            filterName: 'Created recently',
        },
        {
            id: 4,
            filterName: 'Open issues',
        },
    ]

    const filterItems: MenuProps['items'] = [

        {
            label: (
                <div className={styles.menu_work_content_1_item}>
                    <div className={styles.menu_work_content_1_item_1_title}>
                        RECENT
                    </div>

                    <div className={styles.menu_work_content_1_item_2_itm}>
                        {
                            filterItmsArr.map((val) => {
                                return (
                                    <NavLink to={`/jiraItems/filter/${val.id}`} className={styles.menu_work_content_1_item_2_itm_flt}> 
                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                            <FaJs />
                                        </div>
                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                {val.filterName}
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
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
                    <NavLink to={'/'}>
                        View all filters
                    </NavLink>
                </div>
            ),
            key: '2',
        },
        {
            label: (

                <div className={styles.menu_work_content}>
                    <NavLink to={'/jiraItems/filter/-1'}>
                        View all issues
                    </NavLink>
                </div>
            ),
            key: '3',
        }
    ]


    return (
        <Dropdown
            rootClassName={styles.main_bar_itms_stl} menu={{ items: filterItems }} trigger={['click']}>
            <div>
                <Space >
                    Filters <FaAngleDown />
                </Space>
            </div>
        </Dropdown>
    )
}

export default MainBarFilterComp

type OwnProps = {}