import React, { useEffect, useState } from 'react'
import styles from './FIlterRightBarThirdInSItemStl.module.css'
import { Row, type CollapseProps, Col, Button, Dropdown, Space, Collapse, Select } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import { FaAngleDown, FaAngleUp, FaEllipsis, FaEye, FaFlag, FaGear, FaLockOpen, FaRegShareFromSquare, FaRegSun, FaRegThumbsUp, FaRegUser, FaShareFromSquare, FaShareNodes, FaUser, FaUserAstronaut } from 'react-icons/fa6'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { IssuesType } from 'entities/issues/issuesReducerTs.interface'
import { changeGetBoardIssueItemFunc, changeIssueAssigneeFunc, projectSlice } from 'entities/project/projectReducer'
import { BoardArrType, InitialStateBoardOverlayType, ProjectType } from 'entities/project/projectReducerTs.interface'


import { AddDesctiptionIssFuncType, AddIssueFlagFuncArgsType, DeleteIssueFuncArgsType } from 'pages/BoardComp/ui/BoardTs.interface'
import { FilterRightBarThirdItemComp } from '../../FilterH/ui/FilterRigthBarThirdItemScp'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FilterRightBarThirdSecItemCompType, MapDispatchToPropsType, MapStateToPropsType, OwnProps } from './FilterRightBarThirdInSItemTs.interface'


const FilterRightBarThirdInSItemComp: React.FC<OwnProps & MapDispatchToPropsType & MapStateToPropsType> = ({ currentProjectCm, allProjectsIssueArr, currentBoard, changeAllBoardItems, changeBoardIssueProjectFunc, addDesctiptionIssFunc, getBoardIssueItem, boardArr, addIssueFlagFunc, deleteIssueFunc, changeIssueBoardFunc }) => {


    const projectArr = useSelector((state: AppStateType) => state.project.projectArr)

    let currentIssueStatusesArr = projectArr.map((val) => {

        if (val.board.boardUniqName.includes(getBoardIssueItem.issuesProject)) {


            return (
                val.board.boardArr.map((val2) => {

                    return val2
                })
            )


        }
    })
    currentIssueStatusesArr = currentIssueStatusesArr.filter((val) => val)




    const deleteIssueCompFunc: (id: number, boardName: string) => void = (id: number, boardName: string) => {
        deleteIssueFunc({ id, boardName })
    }

    const addFlagCompFunc: (id: number, boardName: string) => void = (id: number, boardName: string) => {
        addIssueFlagFunc({ id, boardName })
    }

    const settingsfltArr = [
        {
            id: 0,
            title: (
                <div onClick={() => addFlagCompFunc(getBoardIssueItem.id, getBoardIssueItem.issueStatus)}>
                    {
                        getBoardIssueItem.flag
                            ?
                            'Remove flag'
                            :
                            'Add flag'
                    }
                </div>
            ),
            link: ''
        },
        {
            id: 1,
            title: 'Connect Slack channel',
            link: ''
        },
        {
            id: 2,
            title: 'Change parent',
            link: ''
        },
        {
            id: 3,
            title: 'Move',
            link: ''
        },
        {
            id: 4,
            title: 'Clone',
            link: ''
        },
        {
            id: 5,
            title: (
                <div onClick={() => deleteIssueCompFunc(getBoardIssueItem.id, getBoardIssueItem.issueStatus)}>
                    Delete
                </div>
            ),
            link: ''
        },
        {
            id: 6,
            title: 'Print',
            link: ''
        },
        {
            id: 7,
            title: 'Export XML',
            link: ''
        },
        {
            id: 8,
            title: 'Export Word',
            link: ''
        },
        {
            id: 9,
            title: 'Configure',
            link: ''
        },
    ]


    const location = useLocation()

    const changeIssueBorderCompFunc: (id: number, boardName: string) => void = (id: number, boardName: string) => {
        // debugger
        if (location.pathname.includes('/jiraItems/board/')) {
            changeIssueBoardFunc({ id, boardName })

        } else {
            changeIssueBoardFunc({ id, boardName })

            changeBoardIssueProjectFunc({ board: boardName, id, status: getBoardIssueItem.issueStatus, project: getBoardIssueItem.issuesProject })

        }
    }



    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        changeIssueBorderCompFunc(getBoardIssueItem.id, value.value)
    }

    const SelectSection = () => {
        return (
            <Select
                labelInValue
                defaultValue={{
                    value: getBoardIssueItem.issueStatus, label: (
                        // <div>
                        //     {
                        //         currentIssueStatusesArr[0]?.map((val) => val.uniqText === getBoardIssueItem.issueStatus ? val.title : null)
                        //     }
                        // </div>
                        <div>
                            {getBoardIssueItem.issueStatus}
                        </div>
                    )
                }}
                className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item}
                style={{ width: 120 }}
                onChange={handleChange}
                options={
                    currentIssueStatusesArr[0]?.map((val) => {
                        return (
                            {
                                value: val.uniqText,
                                label: val.title,
                            }
                        )
                    })
                }
            />
        )
    }

    return (
        <div className={styles.filter_rg_br_rg_prt_content_container}>

            <div className={styles.filter_rg_br_rg_prt_sec_content}>
                <Row>
                    <Col span={12}>
                    </Col>
                    <Col span={12} className={styles.filter_rg_br_rg_prt_cnt_col_sec}>
                        <div className={styles.filter_rg_br_rg_prt_cnt_col_sec_ic_stl}><FaEye /> 1 </div>
                        <div className={styles.filter_rg_br_rg_prt_cnt_col_sec_ic_stl}><FaRegThumbsUp /></div>
                        <div className={styles.filter_rg_br_rg_prt_cnt_col_sec_ic_stl}><FaRegShareFromSquare /></div>
                        <div className={styles.filter_rg_br_rg_prt_cnt_col_sec_ic_stl}>
                            <Dropdown
                                rootClassName={styles.filter_rg_br_rg_prt_cnt_col_dropdown_cont}
                                menu={{
                                    items: [
                                        {
                                            label: (
                                                settingsfltArr.map((val) => {
                                                    return (
                                                        <div className={styles.filter_rg_br_rg_prt_cnt_col_dropdown_cont_item} onClick={() => console.log(val.title)}>
                                                            {val.title}
                                                        </div>
                                                    )
                                                })

                                            ),
                                            key: '0'
                                        },

                                    ],

                                }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <FaEllipsis />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item}>
                {/* <Select
                    labelInValue
                    defaultValue={{
                        value: getBoardIssueItem.issueStatus, label: (
                            // <div>
                            //     {
                            //         currentIssueStatusesArr[0]?.map((val) => val.uniqText === getBoardIssueItem.issueStatus ? val.title : null)
                            //     }
                            // </div>
                            <div>
                                {getBoardIssueItem.issueStatus}
                            </div>
                        )
                    }}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={
                        currentIssueStatusesArr[0]?.map((val) => {
                            return (
                                {
                                    value: val.uniqText,
                                    label: val.title,
                                }
                            )
                        })
                    }
                /> */}

                <div className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item_1_item}>
                    <SelectSection />
                </div>

                <div className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item_2_item}>
                    {
                        getBoardIssueItem.flag
                            ?
                            <div className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item_2_item_1_item}>
                                <div className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item_2_item_1_item_1_item}>
                                    <FaFlag />
                                </div>
                                <div className={styles.filter_rg_br_rg_prt_sec_content_insclt_3efb_item_2_item_1_item_2_item}>
                                    Flagged
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>

            <div>
                <FilterRightBarThirdSecItemComp currentProjectCm={currentProjectCm} getBoardIssueItem={getBoardIssueItem} />
            </div>

            <div className={styles.filter_rg_br_rg_prt_forth_content}>
                <FilterRightBarThirdItemComp />
            </div>

            <div>
                <FilterRightBarThirdThirdItemComp />
            </div>
        </div>
    )
}






export const FilterRightBarThirdSecItemComp: React.FC<FilterRightBarThirdSecItemCompType> = ({ currentProjectCm, getBoardIssueItem }) => {

    const [assigneeBtn, setAssigneeBtn] = useState<boolean>(false)

    const dispatch = useDispatch()

    // useEffect(() => {

    // })


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Your pinned fields',
            children: (
                <div>
                    <div className={styles.filt_rig_s_itm_content_ovrl}>
                        <Row>
                            <Col span={12} className={styles.filt_rig_s_itm_content}>
                                Reporter
                            </Col>
                            <Col span={12}>
                                <div className={styles.filt_rig_s_itm_sec_cont}>
                                    <div className={styles.filt_rig_s_itm_sec_cont_1_item}>
                                        <FaRegUser />
                                    </div>
                                    <div className={styles.filt_rig_s_itm_sec_cont_2_item}>
                                        {getBoardIssueItem.reporter}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.filt_rig_s_itm_content_ovrl}>
                        <Row>
                            <Col span={12} className={styles.filt_rig_s_itm_content}>
                                Assignee
                            </Col>
                            <Col span={12}>
                                <div className={styles.filt_rig_s_itm_sec_cont}>
                                    <div className={styles.filt_rig_s_itm_sec_cont_1_item}>
                                        <FaRegUser />
                                    </div>
                                    <div>
                                        {
                                            assigneeBtn
                                                ?
                                                <div>
                                                    <Select
                                                        className={styles.main_bar_create_iss_modal_content_3_item_slct}

                                                        showSearch
                                                        placeholder="Search to Select"
                                                        optionFilterProp="children"
                                                        options={
                                                            currentProjectCm.team?.teamPeaoples.map((val) => {
                                                                return {
                                                                    value: val.name,
                                                                    label: (
                                                                        <div
                                                                            onClick={() => {
                                                                                dispatch(changeIssueAssigneeFunc(val.name))
                                                                                setAssigneeBtn(false)
                                                                            }}
                                                                        >
                                                                            {val.name}
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    />
                                                </div>
                                                :
                                                <div onClick={() => setAssigneeBtn(true)} className={styles.filt_rig_s_itm_sec_cont_2_item}>
                                                    {
                                                        getBoardIssueItem.assignee === ''
                                                            ?
                                                            <span>
                                                                Unassigned
                                                            </span>
                                                            :
                                                            getBoardIssueItem.assignee
                                                    }
                                                </div>

                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }
    ];


    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return <Collapse items={items} defaultActiveKey={[]} onChange={onChange} />;

}


export const FilterRightBarThirdThirdItemComp: React.FC<{}> = () => {
    return (
        <div className={styles.filter_rg_br_rg_itm_footer_content_container}>
            <Row className={styles.filter_rg_br_rg_itm_footer_content_container_row}>
                <Col span={18}>
                    <div className={styles.filter_rg_br_rg_itm_footer_cnt}>
                        Created last week
                    </div>
                    <div className={styles.filter_rg_br_rg_itm_footer_cnt}>
                        Updated 4 days ago
                    </div>
                </Col>
                <Col span={6} className={styles.filter_rg_br_rg_itm_footer_content_container_sec_col}>
                    <div className={styles.filter_rg_br_rg_itm_footer_content_container_sec_col_iefqc_item}>
                        <FaRegSun /> Configure
                    </div>
                </Col>
            </Row>
        </div>
    )

}

function mapStateToProps(state: AppStateType): MapStateToPropsType {

    let currentProjectNumberfst = state.project.currentProjectNumber


    return {
        getBoardIssueItem: state.project.getBoardIssueItem,
        boardArr: state.project.projectArr[currentProjectNumberfst].board.boardArr,
        currentBoard: state.project.currentBoard,
        allProjectsIssueArr: state.project.allProjectsIssueArr,
        currentProjectCm: state.project.projectArr[currentProjectNumberfst]

    }
}



const FilterRightBarThirdInSItemCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        changeIssueBoardFunc: projectSlice.actions.changeIssueBoardFunc,
        deleteIssueFunc: projectSlice.actions.deleteIssueFunc,
        addIssueFlagFunc: projectSlice.actions.addIssueFlagFunc,
        addDesctiptionIssFunc: projectSlice.actions.addDesctiptionIssFunc,
        changeBoardIssueProjectFunc: projectSlice.actions.changeBoardIssueProjectFunc,
        changeAllBoardItems: projectSlice.actions.changeAllBoardItems
    })
)(FilterRightBarThirdInSItemComp)

export default FilterRightBarThirdInSItemCompCont
