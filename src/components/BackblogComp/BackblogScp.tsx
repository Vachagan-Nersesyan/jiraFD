import React, { useState, useEffect } from 'react'
import styles from './BackblogStl.module.css'
import secStyles from '../TimelineComp/TimelineStl.module.css'

import { Breadcrumb, Button, Checkbox, Col, Collapse, Dropdown, Input, InputNumber, Modal, Row, Select, Space } from 'antd'
import { FaAddressBook, FaAirbnb, FaAlgolia, FaAlignJustify, FaAmazon, FaAnchorCircleXmark, FaChartBar, FaChartLine, FaEllipsis, FaEye, FaLink, FaLockOpen, FaPlus, FaRegThumbsUp, FaShareNodes, FaUser, FaUserLarge, FaUserPlus } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider'
import { FilterRightBarThirdSecItemComp, FilterRightBarThirdThirdItemComp } from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FIlterRightBarThirdInSItem/FIlterRightBarThirdInSItemScp'
import { FilterRightBarNavBarForthItemComp } from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FilterRightBarThirdInFItemComp/FilterRightBarThirdInFItemSCp'
import { FilterRightBarThirdItemComp } from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FIlterRightBarThirdInSItem/FilterRigthBarThirdItemComp/FilterRigthBarThirdItemScp'
import FilterRightBarComp from '../FilterComp/FilterRightBarComp/FilterRightBarScp'
import { IssueInCntComp } from '../IssuesComp/IssuesScp'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { BoardArrType, ProjectType, projectSlice } from '../../redux/projectReducer'
import { IssuesType } from '../../redux/issuesReducer'
import { AddIssueFlagFuncArgsType, DeleteIssueFuncArgsType } from '../BoardComp/BoardScp'
import { filterBacklogUtFunc, filterBoardUtFunc } from '../../utils/helperScp'
import BacklogCreateIssueComp from './BacklogCreateIssueComp/BacklogCreateIssueScp'
import BacklogSecCreateIssueComp from './BacklogSecCreateIssueComp/BacklogSecCreateIssueScp'


let backlogBoardIssuesArr: Array<IssuesType> = []

const BackblogComp: React.FC<OwnProps & MapDispatchToPropsType & MapStateToPropsType> = ({ deleteFlagToBacklogIssueFunc, addFlagToBacklogIssueFunc, addIssueBacklogToBoardFunc, boardArr, backlogSecIssueArr, addIssueToBacklogArr, addingIssueInBacklogFunc, getBoardIssueItem, currentProjectName, backlogIssueArr, setBacklogIssueArr, changeGetBoardIssueItemFunc, deleteIssueFunc, addIssueFlagFunc }) => {

    useEffect(() => {

        backlogBoardIssuesArr = []

        boardArr.map((val) => {
            val.boardIssue.map((val2) => {
                backlogBoardIssuesArr.push(val2)
            })
        })

        setBacklogIssueArr(backlogBoardIssuesArr)


    }, [boardArr])



    const sprintArr = [
        {
            id: 0,
            sprintTitle: 'P2 Sprint fff',
            sprintIssueCount: 1,
            sprintDate: '12 Oct - 9 Nov'
        }
    ]

    const colapseIssueItems = [
        {
            id: 0,
            issueName: 'P2-1 bag 1',
            issuePic: '',
            issueType: 'IN PROGRESS',
            issueSubItems: 0,
            issueAssigne: 'Vachagan'
        }
    ]

    const backblogEpicArr = [
        {
            id: 0,
            epicName: 'epic name ff',
            link: ''
        }
    ]

    const backlogSettingsParenArr = [
        {
            id: 0,
            title: 'P2 - 4 dsafasdf'
        }
    ]

    const backblogSettingsItmArr = [
        {
            key: '1',
            label: (
                <div>
                    Move to
                </div>
            ),
            children: [
                {
                    key: '1-1',
                    label: (
                        <div>
                            P2 Spring asdf
                        </div>
                    ),
                },
                {
                    key: '1-2',
                    label: (
                        <div>
                            P2 Spring asdf
                        </div>
                    ),
                },
                {
                    type: 'divider',
                },
                {
                    key: '1-3',
                    label: (
                        <div>
                            Top of backlog
                        </div>
                    ),
                },
                {
                    key: '1-4',
                    label: (
                        <div>
                            Move up
                        </div>
                    ),
                },
                {
                    key: '1-5',
                    label: (
                        <div>
                            Move down
                        </div>
                    ),
                },
                {
                    key: '1-6',
                    label: (
                        <div>
                            Bottom of backlog
                        </div>
                    ),
                }
            ],
        },

        {
            key: '2',
            label: (
                <div>
                    Copy issue link
                </div>
            )
        },
        {
            key: '3',
            label: (
                <div>
                    Copy issue key
                </div>
            )
        },

        {
            key: '4',
            label: (
                <div onClick={() => addIssueFlagFunc({ id: getBoardIssueItem.id, boardName: getBoardIssueItem.issueStatus })}>
                    Add flag
                </div>
            )
        },
        {
            key: '5',
            label: 'Assignee',
            children: [
                {
                    key: '5-1',
                    label: (
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            tokenSeparators={[',']}
                            options={[
                                {
                                    value: '123',
                                    key: '1'
                                },
                                {
                                    value: 'vbxcv',
                                    key: '2'
                                },
                                {
                                    value: 'adsds',
                                    key: '3'
                                },
                            ]}
                        />
                    ),
                }
            ],
        },
        {
            key: '6',
            label: 'Parent',
            disabled: true,
            children: [
                backlogSettingsParenArr.map((val, ind) => {
                    return (
                        {
                            key: `6 - ${ind}`,
                            label: (
                                val.title
                            )
                        }
                    )
                })
            ],
        },
        {
            key: '7',
            label: 'Story point estimate',
            children: [
                {
                    key: '7-1',
                    label: (
                        <InputNumber min={1} max={10} defaultValue={3} />
                    )
                },
            ],
        },
        {
            key: '8',
            label: (
                <div>
                    Split issue
                </div>
            ),
        },
        {
            key: '9',
            label: (
                <div onClick={() => deleteIssueFunc({ id: getBoardIssueItem.id, boardName: getBoardIssueItem.issueStatus })}>
                    Delete
                </div>
            ),
        }
    ]

    const backblogSettingsSecItmArr = [
        {
            key: '1',
            label: (
                <div onClick={() => addFlagToBacklogIssueFunc('')}>
                    Add flag
                </div>
            )
        },
        {
            key: '1',
            label: (
                <div onClick={() => deleteFlagToBacklogIssueFunc()}>
                    Delete Issue
                </div>
            )
        },
    ]




    const [collapsedbackblog, setCollapsedbackblog] = useState(true);


    // backlog filter

    const [initialBoardInfo, setInitialBoardInfo] = useState<Array<IssuesType>>(backlogIssueArr)
    const [initialSecBacklogBoardInfo, setInitialSecBacklogBoardInfo] = useState<Array<IssuesType>>(backlogSecIssueArr)

    const [filterVal, setFilterVal] = useState<string>('')


    const filterBacklogCompSrcvlFunc: (str: string, board: Array<IssuesType>, tparr: string) => void = (str: string, board: Array<IssuesType>, tparr: string) => {
        if (tparr === 'firstboard') {
            setInitialBoardInfo(filterBacklogUtFunc(str, board))

        } else {
            setInitialSecBacklogBoardInfo(filterBacklogUtFunc(str, board))

        }

        console.log(initialBoardInfo, initialSecBacklogBoardInfo)
    }


    useEffect(() => {


        setInitialBoardInfo(filterBacklogUtFunc(filterVal, backlogIssueArr))



        console.log(initialBoardInfo, initialSecBacklogBoardInfo)


    }, [backlogIssueArr])

    useEffect(() => {
        setInitialSecBacklogBoardInfo(filterBacklogUtFunc(filterVal, backlogSecIssueArr))

    }, [backlogSecIssueArr])



    const backlogCreateIssueCompFunc = (obj: IssuesType) => {
        // addIssueToBoardsFunc({ obj, uniqtext })
        addingIssueInBacklogFunc(obj)
    }

    const backlogSecCreateIssueCompFunc = (str: string, obj: IssuesType) => {
        // addIssueToBoardsFunc({ obj, uniqtext })
        addIssueToBacklogArr({ str, obj })
    }


    const addIssueBacklogToBoardCompFunc = (obj: IssuesType, projectName: string) => {
        // addIssueToBoardsFunc({ obj, uniqtext })
        addIssueBacklogToBoardFunc({ obj, projectName })
    }

    const collapseItems = [
        {
            key: '1',
            label: (
                <div className={styles.timeline_content_in_third_section_in_first_collapse}>
                    <Row>
                        <Col span={24} className={styles.timeline_content_in_third_section_in_first_collapse_1_col}>
                            <span>Backblog</span> ({backlogSecIssueArr.length})
                        </Col>
                    </Row>
                </div>
            ),
            children: (
                <div>
                    {

                        initialSecBacklogBoardInfo.map((val) => {
                            return (
                                <div onClick={() => changeGetBoardIssueItemFunc(val)}>
                                    <Row className={styles.timeline_content_in_third_section_in_first_collapse_in_item_row}>
                                        <Col span={12} onClick={() => setCollapsedbackblog(!collapsedbackblog)}>
                                            <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_1_item}>
                                                <img src={val.issueTypePic} />
                                            </div>
                                            <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_2_item}>
                                                {val.summary}
                                            </div>
                                        </Col>
                                        <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col}>

                                            <Button type='primary' onClick={() => addIssueBacklogToBoardCompFunc(val, currentProjectName)}>
                                                Add to board
                                            </Button>

                                            <Button>
                                                <Dropdown menu={{
                                                    items: backblogEpicArr.map((val, ind) => {
                                                        return (
                                                            {
                                                                label: (
                                                                    <div>
                                                                        {val.epicName}
                                                                    </div>
                                                                ),
                                                                key: `${ind}`,
                                                            }
                                                        )
                                                    })
                                                }} trigger={['click']}>
                                                    <a onClick={(e) => e.preventDefault()}>
                                                        <Space>
                                                            Epic
                                                        </Space>
                                                    </a>
                                                </Dropdown>
                                            </Button>

                                            <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col_in_item}>
                                                {/* <FaAlgolia /> */}
                                                <InputNumber min={1} max={10} defaultValue={3} />
                                            </div>
                                            <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col_in_item}>
                                                <Select
                                                    defaultValue="lucy"
                                                    style={{ width: 120 }}
                                                    options={[
                                                        { value: 'jack', label: 'Jack' },
                                                        { value: 'lucy', label: 'Lucy' },
                                                        { value: 'Yiminghe', label: 'yiminghe' },
                                                        { value: 'disabled', label: 'Disabled', disabled: true },
                                                    ]}
                                                />
                                            </div>
                                            <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col_in_item}>
                                                <Button>
                                                    <Dropdown menu={{ items: backblogSettingsSecItmArr }}>
                                                        <a onClick={(e) => e.preventDefault()}>
                                                            <Space>
                                                                <FaEllipsis />
                                                            </Space>
                                                        </a>
                                                    </Dropdown>
                                                </Button>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            )
                        })

                    }

                </div>
            ),
        }
    ]




    return (
        <div className={secStyles.timeline_content}>
            <div className={secStyles.timeline_content_in_title}>
                <Breadcrumb
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">Application Center</a>,
                        },
                        {
                            title: <a href="">Application List</a>,
                        },
                        {
                            title: 'An Application',
                        },
                    ]}
                />
            </div>
            <div className={secStyles.timeline_content_in_sec_section}>
                <Row>
                    <Col span={8} className={secStyles.timeline_content_in_sec_section_title}>
                        Backblog
                    </Col>
                    <Col span={16} className={secStyles.timeline_content_in_sec_section_sec_part}>
                        <Button>
                            <Dropdown menu={{
                                items: [
                                    {
                                        label: <a href="https://www.antgroup.com">1st menu item</a>,
                                        key: '0',
                                    },
                                    {
                                        label: <a href="https://www.aliyun.com">2nd menu item</a>,
                                        key: '1',
                                    },
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className={secStyles.timeline_content_in_sec_section_sec_part_in_overlay_1_item}>
                                        <FaEllipsis />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={secStyles.timeline_content_in_third_section}>
                <Row>
                    <Col span={16} className={secStyles.timeline_content_in_third_section_first_col}>
                        <div className={secStyles.timeline_content_in_third_section_in_1_item}>
                            <Input onChange={(e) => {
                                filterBacklogCompSrcvlFunc(e.target.value, backlogIssueArr, 'firstboard')
                                filterBacklogCompSrcvlFunc(e.target.value, backlogSecIssueArr, 'secondboard')

                                setFilterVal(e.target.value)
                            }} placeholder="Basic usage" />
                        </div>
                        <div className={secStyles.timeline_content_in_third_section_in_2_item}>
                            <Button ><FaUser /></Button>
                        </div>
                        <div className={secStyles.timeline_content_in_third_section_in_2_item}>
                            <BackblogandBoardModal />
                        </div>
                    </Col>
                    <Col span={8} className={styles.timeline_content_in_third_section_sec_col}>
                        <div className={styles.timeline_content_in_third_section_sec_col_in_item}>
                            <Button>
                                <FaAddressBook /> Insights
                            </Button>
                        </div>

                    </Col>
                </Row>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '100%' }}>
                    <div className={secStyles.timeline_content_in_third_section}>
                        {
                            sprintArr.map((val) => {
                                return (
                                    <Collapse
                                        items={[
                                            {
                                                key: '1',
                                                label: (
                                                    <div className={styles.timeline_content_in_third_section_in_first_collapse}>
                                                        <Row>
                                                            <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_1_col}>
                                                                <span>{val.sprintTitle}</span> {val.sprintDate} {val.sprintIssueCount}
                                                            </Col>
                                                            <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_2_col}>
                                                                <div className={styles.timeline_content_in_third_section_in_1_item}>
                                                                    {
                                                                        backlogIssueArr.filter((val) => val.issueStatus === 'todo').length
                                                                    }
                                                                </div>
                                                                <div className={styles.timeline_content_in_third_section_in_2_item}>
                                                                    {
                                                                        backlogIssueArr.filter((val) => val.issueStatus === 'inprogress').length
                                                                    }
                                                                </div>
                                                                <div className={styles.timeline_content_in_third_section_in_3_item}>
                                                                    {
                                                                        backlogIssueArr.filter((val) => val.issueStatus === 'done').length
                                                                    }
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                ),
                                                children: (
                                                    <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item}>
                                                        {
                                                            initialBoardInfo.map((val) => {
                                                                return (
                                                                    <div style={{ backgroundColor: 'grey' }} onClick={() => changeGetBoardIssueItemFunc(val)}>
                                                                        <Row className={styles.timeline_content_in_third_section_in_first_collapse_in_item_row}>
                                                                            <Col span={15} onClick={() => setCollapsedbackblog(!collapsedbackblog)}>
                                                                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_1_item}>
                                                                                    <img src={val.issueTypePic} />
                                                                                </div>
                                                                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_2_item}>
                                                                                    {val.summary}
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={9} className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col}>
                                                                                <Button>
                                                                                    <Dropdown menu={{
                                                                                        items: backblogEpicArr.map((val, ind) => {
                                                                                            return (
                                                                                                {
                                                                                                    label: (
                                                                                                        <div>
                                                                                                            {val.epicName}
                                                                                                        </div>
                                                                                                    ),
                                                                                                    key: `${ind}`,
                                                                                                }
                                                                                            )
                                                                                        })
                                                                                    }} trigger={['click']}>
                                                                                        <a onClick={(e) => e.preventDefault()}>
                                                                                            <Space>
                                                                                                Epic
                                                                                            </Space>
                                                                                        </a>
                                                                                    </Dropdown>
                                                                                </Button>
                                                                                <div>
                                                                                    {val.issueStatus}
                                                                                </div>
                                                                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col_in_item}>
                                                                                    <Select
                                                                                        defaultValue={val.assignee}
                                                                                        style={{ width: 120 }}
                                                                                        options={[
                                                                                            { value: 'jack', label: 'Jack' },
                                                                                            { value: 'lucy', label: 'Lucy' },
                                                                                            { value: 'Yiminghe', label: 'yiminghe' },
                                                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                                                        ]}
                                                                                    />
                                                                                </div>
                                                                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col_in_item}>
                                                                                    <Button>
                                                                                        <Dropdown menu={{ items: backblogSettingsItmArr }}>
                                                                                            <a onClick={(e) => e.preventDefault()}>
                                                                                                <Space>
                                                                                                    <FaEllipsis />
                                                                                                </Space>
                                                                                            </a>
                                                                                        </Dropdown>
                                                                                    </Button>
                                                                                </div>

                                                                            </Col>
                                                                        </Row>

                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                ),
                                            }
                                        ]}
                                        defaultActiveKey={['1']}
                                    />
                                )
                            })
                        }
                        <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_crt_iss_item}>
                            <BacklogCreateIssueComp backlogCreateIssueCompFunc={backlogCreateIssueCompFunc} currentProjectName={currentProjectName} />
                        </div>
                    </div>

                    <div>
                        <Collapse items={collapseItems} defaultActiveKey={['1']} />
                        <BacklogSecCreateIssueComp backlogSecCreateIssueCompFunc={backlogSecCreateIssueCompFunc} currentProjectName={currentProjectName} />
                    </div>
                </div>



                <Sider
                    collapsedWidth='0'
                    width={600}
                    trigger={null}
                    collapsible
                    collapsed={collapsedbackblog}
                    className={styles.backblog_sider}
                >
                    {/* <div className="demo-logo-vertical" />
                    <div className={styles.backblog_sider_container}>
                        <div className={styles.backblog_sider_first_item}>
                            <Row>
                                <Col span={12}>
                                    <div className={styles.filter_right_bar_third_in_1_item_content_1_item}>
                                        <Breadcrumb
                                            items={[
                                                {
                                                    title: 'Home',
                                                },
                                                {
                                                    title: <a href="">Application Center</a>,
                                                },
                                                {
                                                    title: <a href="">Application List</a>,
                                                },
                                                {
                                                    title: 'An Application',
                                                },
                                            ]}
                                        />
                                    </div>
                                </Col>
                                <Col span={12} className={styles.backblog_sider_first_item_sec_col}>
                                    <Button ><FaLockOpen /></Button>
                                    <Button><FaEye /> 0 </Button>
                                    <Button ><FaRegThumbsUp /></Button>
                                    <Button><FaShareNodes /></Button>
                                    <Button>X</Button>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.backblog_sider_second_item}>
                            <div>
                                <div className={styles.filter_right_bar_third_in_1_item_content_2_item}>
                                    title
                                </div>
                                <div className={styles.filter_right_bar_third_in_1_item_content_3_item}>
                                    <Space className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content}>
                                        <Button ><FaLink /></Button>
                                        <Button><FaChartBar /></Button>
                                        <Button ><FaChartLine /></Button>
                                        <Button><FaEllipsis /></Button>
                                    </Space>
                                </div>
                            </div>
                            <div className={styles.filter_right_bar_third_in_1_item_content_4_item}>
                                Description
                                <Input placeholder="input with clear icon" allowClear />
                            </div>
                            <div className={styles.filter_right_bar_third_in_1_item_content_5_item}>
                                <FilterRightBarThirdSecItemComp />
                            </div>
                            <div className={styles.filter_right_bar_third_in_1_item_content_5_item}>
                                <FilterRightBarThirdItemComp />
                            </div>
                            <div>
                                <FilterRightBarThirdThirdItemComp />
                            </div>
                            <div>
                                <FilterRightBarNavBarForthItemComp />
                            </div>
                        </div>
                        <div className={styles.backblog_sider_last_item}>

                            <div className={styles.filter_right_bar_nav_bar_third_item_content}>
                                <div className={styles.filter_right_bar_nav_bar_third_item_content_1_item}>
                                    <FaUserLarge />
                                </div>
                                <div className={styles.filter_right_bar_nav_bar_third_item_content_2_item}>
                                    <Input placeholder="large size" />
                                </div>


                            </div>


                            <div className={styles.filter_right_bar_nav_bar_third_item_content_3_item}>
                                Pro tip: press M to comment
                            </div>

                        </div>

                    </div> */}
                    <IssueInCntComp />

                </Sider>



            </div>
        </div>
    )
}


function mapStateToProps(state: AppStateType): MapStateToPropsType {

    let getCurrentProjectIndexNumber = state.project.currentProjectNumber

    return {
        boardArr: state.project.projectArr[getCurrentProjectIndexNumber].board.boardArr,
        getBoardIssueItem: state.project.getBoardIssueItem,
        backlogIssueArr: state.project.backlogIssueArr,
        currentProjectName: state.project.projectArr[getCurrentProjectIndexNumber].name,
        backlogSecIssueArr: state.project.projectArr[getCurrentProjectIndexNumber].backlogSecIssueArr
    }
}

const BackblogCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        addIssueFlagFunc: projectSlice.actions.addIssueFlagFunc,
        deleteIssueFunc: projectSlice.actions.deleteIssueFunc,
        changeGetBoardIssueItemFunc: projectSlice.actions.changeGetBoardIssueItemFunc,
        setBacklogIssueArr: projectSlice.actions.setBacklogIssueArr,
        addingIssueInBacklogFunc: projectSlice.actions.addingIssueInBacklogFunc,
        addIssueToBacklogArr: projectSlice.actions.addIssueToBacklogArr,
        addIssueBacklogToBoardFunc: projectSlice.actions.addIssueBacklogToBoardFunc,
        addFlagToBacklogIssueFunc: projectSlice.actions.addFlagToBacklogIssueFunc,
        deleteFlagToBacklogIssueFunc: projectSlice.actions.deleteFlagToBacklogIssueFunc
    })
)(BackblogComp)


type OwnProps = {}

type MapStateToPropsType = {
    boardArr: Array<BoardArrType>,
    getBoardIssueItem: IssuesType,
    backlogIssueArr: Array<IssuesType>,
    currentProjectName: string,
    backlogSecIssueArr: Array<IssuesType>
}

type MapDispatchToPropsType = {
    deleteIssueFunc: ({ id, boardName }: DeleteIssueFuncArgsType) => void,
    addIssueFlagFunc: ({ id, boardName }: AddIssueFlagFuncArgsType) => void,
    changeGetBoardIssueItemFunc: (obj: IssuesType) => void,
    setBacklogIssueArr: (arr: Array<IssuesType>) => void,
    addingIssueInBacklogFunc: (obj: IssuesType) => void,
    addIssueToBacklogArr: ({ str, obj }: AddIssueToBacklogArrArgsType) => void,
    addIssueBacklogToBoardFunc: ({ obj, projectName }: AddIssueBacklogToBoardFuncArgsType) => void,
    addFlagToBacklogIssueFunc: (str: string) => void,
    deleteFlagToBacklogIssueFunc: () => void
}

export type AddIssueBacklogToBoardFuncArgsType = {
    obj: IssuesType,
    projectName: string,
}


export type AddIssueToBacklogArrArgsType = {
    str: string,
    obj: IssuesType
}


export default BackblogCompCont





// other component



export const BackblogandBoardModal: React.FC<BackblogandBoardFOwnProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                <FaUserPlus />
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.timeline_content_in_third_section_modal_content}>
                    <div className={styles.timeline_content_in_third_section_modal_content_in_1_item}>
                        Add people
                    </div>
                    <div className={styles.timeline_content_in_third_section_modal_content_in_1_item_content}>
                        <div className={styles.timeline_content_in_third_section_modal_content_in_1_item_content_1_item}>
                            Name,email or group
                        </div>
                        <div className={styles.timeline_content_in_third_section_modal_content_in_1_item_content_2_item}>
                            <Select
                                mode="multiple"
                                placeholder="e.g. Maria,maria@company.com"
                                defaultValue={['a10', 'c12']}
                                style={{ width: '100%' }}
                                options={[
                                    {
                                        value: 'name',
                                        label: 'dfff',

                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className={styles.timeline_content_in_third_section_modal_content_in_1_item_content}>
                        <div className={styles.timeline_content_in_third_section_modal_content_in_1_item_content_1_item}>
                            Role
                        </div>
                        <div className={styles.timeline_content_in_third_section_modal_content_in_1_item_content_2_item}>
                            <Select
                                mode="multiple"
                                placeholder=""
                                defaultValue={['a10', 'c12']}
                                style={{ width: '100%' }}
                                options={[
                                    {
                                        value: 'name',
                                        label: 'dfff',

                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}




type BackblogandBoardFOwnProps = {}