import React, { useState } from 'react'
import styles from './BackblogStl.module.css'
import secStyles from '../TimelineComp/TimelineStl.module.css'

import { Breadcrumb, Button, Checkbox, Col, Collapse, Dropdown, Input, InputNumber, Modal, Row, Select, Space } from 'antd'
import { FaAddressBook, FaAirbnb, FaAlgolia, FaAlignJustify, FaAmazon, FaAnchorCircleXmark, FaChartBar, FaChartLine, FaEllipsis, FaEye, FaLink, FaLockOpen, FaPlus, FaRegThumbsUp, FaShareNodes, FaUser, FaUserLarge, FaUserPlus } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Sider from 'antd/es/layout/Sider'
import { FilterRightBarThirdSecItemComp, FilterRightBarThirdThirdItemComp } from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FIlterRightBarThirdInSItem/FIlterRightBarThirdInSItemScp'
import { FilterRightBarNavBarForthItemComp } from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FilterRightBarThirdInFItemComp/FilterRightBarThirdInFItemSCp'
import { FilterRightBarThirdItemComp } from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FIlterRightBarThirdInSItem/FilterRigthBarThirdItemComp/FilterRigthBarThirdItemScp'

const BackblogComp: React.FC<OwnProps> = () => {


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
                <div>
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
            key: '6',
            label: (
                <div>
                    Split issueF
                </div>
            ),
        },
        {
            key: '7',
            label: (
                <div>
                    Delete
                </div>
            ),
        }
    ]



    const collapseItems = [
        {
            key: '1',
            label: (
                <div className={styles.timeline_content_in_third_section_in_first_collapse}>
                    <Row>
                        <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_1_col}>
                            <span>Backblog</span> (1 issue)
                        </Col>
                        <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_2_col}>
                            <div className={styles.timeline_content_in_third_section_in_1_item}>
                                0
                            </div>
                            <div className={styles.timeline_content_in_third_section_in_2_item}>
                                0
                            </div>
                            <div className={styles.timeline_content_in_third_section_in_3_item}>
                                0
                            </div>
                            <Button >Create sprint</Button>
                            <Button>
                                <Dropdown menu={{
                                    items: [
                                        {
                                            label: (
                                                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                                    Edit sprint
                                                </a>
                                            ),
                                            key: '0',
                                        },
                                        {
                                            label: (
                                                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                                    Delete sprint
                                                </a>
                                            ),
                                            key: '1',
                                        },
                                    ]
                                }}
                                    className={styles.timeline_content_in_third_section_in_5_item}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <FaEllipsis />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Button>
                        </Col>
                    </Row>
                </div>
            ),
            children: (
                <div>
                    {
                        colapseIssueItems.map((val) => {
                            return (
                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item}>
                                    {
                                        colapseIssueItems.map((val) => {
                                            return (
                                                <div>
                                                    <Row className={styles.timeline_content_in_third_section_in_first_collapse_in_item_row}>
                                                        <Col span={12} >
                                                            <Checkbox>
                                                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_1_item}>
                                                                    {val.issuePic}
                                                                </div>
                                                                <div onClick={() => setCollapsedbackblog(!collapsedbackblog)} className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_2_item}>
                                                                    {val.issueName}
                                                                </div>
                                                            </Checkbox>
                                                        </Col>
                                                        <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col}>
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
                                                            <Button>
                                                                <Dropdown menu={{
                                                                    items: [
                                                                        {
                                                                            key: '0',
                                                                            label: (
                                                                                <div>
                                                                                    IN PROGRESS <FaAirbnb />
                                                                                </div>
                                                                            )
                                                                        },
                                                                        {
                                                                            key: '0',
                                                                            label: (
                                                                                <div>
                                                                                    TO DO <FaAirbnb />
                                                                                </div>
                                                                            )
                                                                        },
                                                                        {
                                                                            key: '0',
                                                                            label: (
                                                                                <div>
                                                                                    DONE <FaAirbnb />
                                                                                </div>
                                                                            )
                                                                        }
                                                                    ]
                                                                }} trigger={['click']}>
                                                                    <a onClick={(e) => e.preventDefault()}>
                                                                        <Space>
                                                                            TO DO
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
                                                    <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_crt_iss_item}>
                                                        <Button >
                                                            <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_crt_iss_item_ic}>
                                                                <FaPlus />
                                                            </div>
                                                            <div>
                                                                Create issue
                                                            </div>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            ),
        }
    ]

    const [collapsedbackblog, setCollapsedbackblog] = useState(true);



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
                            <Input placeholder="Basic usage" />
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
                                                                    0
                                                                </div>
                                                                <div className={styles.timeline_content_in_third_section_in_2_item}>
                                                                    0
                                                                </div>
                                                                <div className={styles.timeline_content_in_third_section_in_3_item}>
                                                                    0
                                                                </div>
                                                                <Button >Complete sprint</Button>
                                                                <Button>
                                                                    <Dropdown menu={{
                                                                        items: [
                                                                            {
                                                                                label: (
                                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                                                                        Edit sprint
                                                                                    </a>
                                                                                ),
                                                                                key: '0',
                                                                            },
                                                                            {
                                                                                label: (
                                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                                                                        Delete sprint
                                                                                    </a>
                                                                                ),
                                                                                key: '1',
                                                                            },
                                                                        ]
                                                                    }}
                                                                        className={styles.timeline_content_in_third_section_in_5_item}
                                                                    >
                                                                        <a onClick={(e) => e.preventDefault()}>
                                                                            <Space>
                                                                                <FaEllipsis />
                                                                            </Space>
                                                                        </a>
                                                                    </Dropdown>
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                ),
                                                children: (
                                                    <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item}>
                                                        {
                                                            colapseIssueItems.map((val) => {
                                                                return (
                                                                    <div>
                                                                        <Row className={styles.timeline_content_in_third_section_in_first_collapse_in_item_row}>
                                                                            <Col span={12} >
                                                                                <Checkbox>
                                                                                    <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_1_item}>
                                                                                        {val.issuePic}
                                                                                    </div>
                                                                                    <div onClick={() => setCollapsedbackblog(!collapsedbackblog)} className={styles.timeline_content_in_third_section_in_first_collapse_in_item_in_2_item}>
                                                                                        {val.issueName}
                                                                                    </div>
                                                                                </Checkbox>
                                                                            </Col>
                                                                            <Col span={12} className={styles.timeline_content_in_third_section_in_first_collapse_in_item_sec_col}>
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
                                                                                <Button>
                                                                                    <Dropdown menu={{
                                                                                        items: [
                                                                                            {
                                                                                                key: '0',
                                                                                                label: (
                                                                                                    <div>
                                                                                                        IN PROGRESS <FaAirbnb />
                                                                                                    </div>
                                                                                                )
                                                                                            },
                                                                                            {
                                                                                                key: '0',
                                                                                                label: (
                                                                                                    <div>
                                                                                                        TO DO <FaAirbnb />
                                                                                                    </div>
                                                                                                )
                                                                                            },
                                                                                            {
                                                                                                key: '0',
                                                                                                label: (
                                                                                                    <div>
                                                                                                        DONE <FaAirbnb />
                                                                                                    </div>
                                                                                                )
                                                                                            }
                                                                                        ]
                                                                                    }} trigger={['click']}>
                                                                                        <a onClick={(e) => e.preventDefault()}>
                                                                                            <Space>
                                                                                                TO DO
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
                                                                        <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_crt_iss_item}>
                                                                            <Button >
                                                                                <div className={styles.timeline_content_in_third_section_in_first_collapse_in_item_crt_iss_item_ic}>
                                                                                    <FaPlus />
                                                                                </div>
                                                                                <div>
                                                                                    Create issue
                                                                                </div>
                                                                            </Button>
                                                                        </div>
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
                    </div>

                    <div>
                        <Collapse items={collapseItems} defaultActiveKey={['1']} />
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
                    <div className="demo-logo-vertical" />
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

                    </div>

                </Sider>



            </div>
        </div>
    )
}


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

export default BackblogComp


type OwnProps = {}

type BackblogandBoardFOwnProps = {}