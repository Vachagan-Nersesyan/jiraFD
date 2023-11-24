import React from 'react'
import styles from './MainBarFilterStl.module.css'
import { Dropdown, MenuProps, Space } from 'antd'
import { FaAngleDown, FaJs, FaSignal } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { filterBoardByGlobalTypeUtFunc } from 'widgets/helpers/helperScp'
import { useDispatch } from 'react-redux'
import { changeActualFilterdCloneIssueArrFunc } from 'entities/issues/issuesReducer'
import { AppStateType } from 'entities/store/redux-store'
import { useSelector } from 'react-redux'
import { OwnProps } from './MainBarFilterTs.interface'

const MainBarFilterComp: React.FC<OwnProps> = () => {

    const dispatch = useDispatch()
    const filteredIssuesInitArr = useSelector((state: AppStateType) => state.issues.filteredIssuesInitArr)

    const chooseFilterNameCompFunc: (str: string) => void = (str: string) => {
        dispatch(changeActualFilterdCloneIssueArrFunc(filterBoardByGlobalTypeUtFunc(str, filteredIssuesInitArr)))
    }

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
        {
            id: 5,
            filterName: 'My open issues',
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
                                    <NavLink onClick={() => chooseFilterNameCompFunc(val.filterName)} to={`/jiraItems/filter/${val.id}`} className={styles.menu_work_content_1_item_2_itm_flt}>
                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                            <FaSignal />
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
                    <NavLink to={'/jiraItems/filter/-1'}>
                        View all issues
                    </NavLink>
                </div>
            ),
            key: '2',
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

