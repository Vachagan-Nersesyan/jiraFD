import React, { useState } from 'react';

import styles from './FilterStl.module.css'


import { Layout, Menu, Button, theme } from 'antd';
import FilterRightBarComp from '../../../feautures/Filter/FilterA/ui/FilterRightBarScp';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppStateType, useAppDispatch } from 'entities/store/redux-store';
import { filterBoardByGlobalTypeUtFunc } from 'widgets/helpers/helperScp';
import { OwnProps } from './FilterTs.interface';
import { addIssueFilterNameFunc, changeActualFilterdCloneIssueArrFunc, fetchIssues } from 'entities/issues/issuesReducerThunk';

const { Header, Sider, Content } = Layout;



const FilterComp: React.FC<OwnProps> = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [btnOnCollapsed, setBtnOnCollapsed] = useState(true)
    const [st, setst] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const otherItmsArr = [
        {
            id: 0,
            otherItmsTitle: 'My open issues',
            link: ''
        },
        {
            id: 1,
            otherItmsTitle: 'Reported by me',
            link: ''
        },
        {
            id: 2,
            otherItmsTitle: 'Open issues',
            link: ''
        },
        {
            id: 3,
            otherItmsTitle: 'Done issues',
            link: ''
        },
        {
            id: 6,
            otherItmsTitle: 'Created recently',
            link: ''
        },
        {
            id: 7,
            otherItmsTitle: 'Resolved recently',
            link: ''
        },
    ]

    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()

    const filteredIssuesInitArr = useSelector((state: AppStateType) => state.issues.filteredIssuesInitArr)

    const chooseFilterNameCompFunc: (str: string) => void = async (str: string) => {
        await aDispatch(addIssueFilterNameFunc({ str }))
        await aDispatch(fetchIssues())

        await aDispatch(changeActualFilterdCloneIssueArrFunc(filterBoardByGlobalTypeUtFunc(str, filteredIssuesInitArr)))
        await aDispatch(fetchIssues())

    }




    return (
        <>

            <div className='filter_content'>
                <Layout>
                    {/* <Sider style={{backgroundColor:'red'}} trigger={null} collapsible collapsed={collapsed}> */}
                    <div className={styles.filter_content_overl}>
                        <Sider
                            width={300}
                            onMouseOver={() => {

                                if (!st && collapsed) {

                                    setst(true)
                                    setCollapsed(false)
                                    setBtnOnCollapsed(false)

                                }

                            }
                            }

                            onMouseLeave={() => {
                                if (st && !collapsed) {

                                    setst(false)
                                    setCollapsed(true)
                                    setBtnOnCollapsed(true)

                                }


                            }
                            }


                            style={st ? { height: '100%', position: 'absolute', zIndex: '2' } : { height: '100%', zIndex: '2' }}

                            collapsedWidth="10"
                            className={styles.filter_sider}
                            trigger={null}
                            collapsed={collapsed}

                        >
                            <div className={styles.filter_content}>
                                <div className={styles.filter_left_bar_cnt}>
                                    Filters
                                </div>
                                <div onClick={() => chooseFilterNameCompFunc('Search issues')} className={styles.filter_left_bar_cnt_in_item_lnk}>
                                    <div className={styles.filter_left_bar_cnt_in_item}>
                                        Search issues
                                    </div>
                                </div>
                                <div className={styles.filter_left_bar_cnt}>
                                    OTHER
                                </div>
                                <div className={styles.filter_left_bar_cnt_sec_cont}>
                                    {
                                        otherItmsArr.map((val) => {
                                            return (
                                                <div onClick={() => chooseFilterNameCompFunc(val.otherItmsTitle)} className={styles.filter_left_bar_cnt_in_item_lnk}>
                                                    <div className={styles.filter_left_bar_cnt_in_item}>
                                                        {val.otherItmsTitle}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <NavLink to={'/'} className={styles.filter_left_bar_cnt_in_item_lnk}>
                                        <div className={styles.filter_left_bar_cnt_in_item}>
                                            View all filters
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </Sider>
                        {
                            btnOnCollapsed ?
                                <div className={styles.filter_sider_button_ovrl}>
                                    <Button
                                        type="text"
                                        icon={collapsed ? <FaAngleRight /> : <FaAngleLeft />}
                                        onClick={() => {
                                            setCollapsed(!collapsed)
                                        }}
                                        className={styles.filter_sider_button}
                                    />
                                </div>
                                : null
                        }

                    </div>
                    <Layout>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <FilterRightBarComp />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </>


    )

}

export default FilterComp

