import React, { useEffect, useState } from 'react'
import styles from './FilterSecondBarInSecondStl.module.css'
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import { Button, Checkbox, Col, Dropdown, Input, Menu, Row, Select, Space } from 'antd';
import { FaArrowDownShortWide } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../entities/store/redux-store';
import { IssuesType } from '../../../../entities/issues/issuesReducer';
import { BoardArrType } from '../../../../entities/project/projectReducer';

let filterObj: FilterObjType = {
    projectFilter: [],
    typeFilter: [],
    statusFilter: [],
    textFilter: ''
}

const FilterRightBarNavBarSecComp: React.FC<FilterRightBarNavBarSecCompType> = ({ filterIssueByProjectCompFunc }) => {



    const currentProjectIndex = useSelector((state: AppStateType) => state.project.currentProjectNumber)
    const projectsArr = useSelector((state: AppStateType) => state.project.projectArr)
    const currentBoard = useSelector((state: AppStateType) => state.project.projectArr[currentProjectIndex].board)


    const { Search } = Input;


    const projectsFilterArr = [
        {
            id: 0,
            title: 'My Kanban Project (KAN)',
            link: ''
        },
        {
            id: 1,
            title: 'project 1 (P1)',
            link: ''
        },
    ]

    const projectTypeFilterArr = [
        {
            id: 0,
            typeTitle: 'All Standard Issues Types',
            typeLink: ''
        },
        {
            id: 1,
            typeTitle: 'All Sub-Task Issue Types',
            typeLink: ''
        }
    ]

    const projectStandarTpArr = [
        {
            id: 0,
            pic: '',
            title: 'Bug',
            link: ''
        },
        {
            id: 1,
            pic: '',
            title: 'Epic',
            link: ''
        },
        {
            id: 2,
            pic: '',
            title: 'Story',
            link: ''
        },
        {
            id: 3,
            pic: '',
            title: 'Task',
            link: ''
        },
    ]

    const projectSubTaskTpArr = [
        {
            id: 0,
            pic: '',
            title: 'Subtask',
            link: ''
        },
    ]

    const [projectStatusStrOvrkArr, setProjectStatusStrOvrkArr] = useState<Array<BoardArrType>>([])


    useEffect(() => {

        debugger
        let projectStatusArr: Array<BoardArrType> = []
        let projectStatusStrArr: Array<string> = []


        for (let i in currentBoard.boardArr) {
            if (!projectStatusStrArr.includes(currentBoard.boardArr[i].uniqText)) {
                projectStatusStrArr.push(currentBoard.boardArr[i].uniqText)

                projectStatusArr.push(currentBoard.boardArr[i])
            }
        }

        for (let i in projectsArr) {
            if (currentBoard.boardUniqName === projectsArr[i].board.boardUniqName) {
                continue
            }
            for (let j in projectsArr[i].board.boardArr) {

                if (!projectStatusStrArr.includes(projectsArr[i].board.boardArr[j].uniqText)) {
                    projectStatusStrArr.push(projectsArr[i].board.boardArr[j].uniqText)

                    projectStatusArr.push(projectsArr[i].board.boardArr[j])
                }

            }
        }
        setProjectStatusStrOvrkArr(projectStatusArr)
    }, [])




    const projectUserArr = [
        {
            id: 0,
            title: 'Current User',
            pic: '',
            link: ''
        },
        {
            id: 1,
            title: 'Unassigned',
            pic: '',
            link: ''
        }
    ]

    const projectSuggstdUserTpArr = [
        {
            id: 0,
            title: 'Vachagan',
            pic: '',
            link: ''
        },
    ]

    const projectSuggstdGroupTpArr = [
        {
            id: 0,
            title: 'org-admins',
            pic: '',
            link: ''
        },
    ]



    const handleChange = (value: Array<string>) => {



        filterObj.projectFilter = value
        filterIssueByProjectCompFunc(filterObj)
    };


    const typeHandleChange = (value: Array<string>) => {

        filterObj.typeFilter = value
        filterIssueByProjectCompFunc(filterObj)

    };

    const statusHandleChange = (value: Array<string>) => {

        filterObj.statusFilter = value

        filterIssueByProjectCompFunc(filterObj)

    };

    const [filterInpVal, setFilterInpVal] = useState<string>('')

    const textHandleChange = (str: string) => {

        filterObj.textFilter = str

        filterIssueByProjectCompFunc(filterObj)

    };

    return (
        <Row>
            <Col span={16}>
                <div className={styles.filter_sec_part_content}>
                    <div className={styles.filter_sec_part_content_in_item} >
                        {/* <Dropdown menu={{
                            items: [
                                {
                                    label: (
                                        <Search placeholder="input search text" />
                                    ),
                                    key: '0',
                                },
                                {
                                    label: (


                                        <div>
                                            <Select
                                                mode="tags"
                                                style={{ width: '100%' }}
                                                onChange={handleChange}
                                                tokenSeparators={[',']}
                                                options={
                                                    projectsArr.map((val) => {
                                                        return (
                                                            {
                                                                value: val.name,
                                                                label: (
                                                                    <div>
                                                                        {val.name}
                                                                    </div>
                                                                ),
                                                            }

                                                        )
                                                    })
                                                }
                                            />

                                        </div>


                                    ),
                                    key: '1',
                                }
                            ]
                        }} trigger={['hover']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className={styles.filter_itm}>
                                    Project: All
                                </Space>
                            </a>
                        </Dropdown>
                         */}

                        <Select
                            mode="tags"
                            style={{ width: '10em' }}
                            onChange={handleChange}
                            tokenSeparators={[]}
                            options={
                                projectsArr.map((val) => {
                                    return (
                                        {
                                            value: val.name,
                                            label: (
                                                <div>
                                                    {val.name}
                                                </div>
                                            ),
                                        }

                                    )
                                })
                            }
                        />



                    </div>
                    <div>
                        {/* <Dropdown menu={{
                            items: [
                                {
                                    label: (
                                        <Search placeholder="Find Issues Types..." />
                                    ),
                                    key: '0',
                                },
                                {
                                    label: (

                                        projectTypeFilterArr.map((val) => {
                                            return (
                                                <div>
                                                    <Checkbox onChange={(e: CheckboxChangeEvent) => {
                                                        console.log(`checked = ${e.target.checked} - ${val.typeTitle}`);
                                                    }}>
                                                        {val.typeTitle}
                                                    </Checkbox>

                                                </div>
                                            )
                                        })

                                    ),
                                    key: '1',
                                },
                                {
                                    label: (
                                        <div>
                                            Standard Issue Types
                                        </div>
                                    ),
                                    key: '2'
                                },
                                {
                                    label: (

                                        projectStandarTpArr.map((val) => {
                                            return (
                                                <div>
                                                    <Checkbox onChange={(e: CheckboxChangeEvent) => {
                                                        console.log(`checked = ${val.title}`);
                                                    }}>
                                                        {val.title}
                                                    </Checkbox>

                                                </div>
                                            )
                                        })

                                    ),
                                    key: '3',
                                },
                                {
                                    label: (
                                        <div>
                                            Sub-Task Issue Types
                                        </div>
                                    ),
                                    key: '4'
                                },
                                {
                                    label: (

                                        projectSubTaskTpArr.map((val) => {
                                            return (
                                                <div>
                                                    <Checkbox onChange={(e: CheckboxChangeEvent) => {
                                                        console.log(`checked = ${val.title}`);
                                                    }}>
                                                        {val.title}
                                                    </Checkbox>

                                                </div>
                                            )
                                        })

                                    ),
                                    key: '3',
                                },
                            ]
                        }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className={styles.filter_itm_othr}>
                                    Type : All
                                </Space>
                            </a>
                        </Dropdown> */}
                        <div>
                            <Select
                                mode="tags"
                                style={{ width: '10em' }}
                                onChange={typeHandleChange}
                                tokenSeparators={[]}
                                options={[
                                    ...projectTypeFilterArr.map((val) => {
                                        return (
                                            {
                                                value: val.typeTitle,
                                                label: (
                                                    <div>
                                                        {val.typeTitle}
                                                    </div>
                                                ),
                                            }
                                        )
                                    }),
                                    ...projectStandarTpArr.map((val) => {
                                        return (
                                            {
                                                value: val.title,
                                                label: (
                                                    <div>
                                                        {val.title}
                                                    </div>
                                                ),
                                            }
                                        )
                                    }),
                                    ...projectSubTaskTpArr.map((val) => {
                                        return (
                                            {
                                                value: val.title,
                                                label: (
                                                    <div>
                                                        {val.title}
                                                    </div>
                                                ),
                                            }
                                        )
                                    })
                                ]
                                }
                            />

                        </div>
                    </div>
                    <div>
                        {/* <Dropdown menu={{
                            items: [
                                {
                                    label: (
                                        <Search placeholder="input search text" />
                                    ),
                                    key: '0',
                                },
                                {
                                    label: (

                                        projectStatusArr.map((val) => {
                                            return (
                                                <div>
                                                    <Checkbox onChange={(e: CheckboxChangeEvent) => {
                                                        console.log(`checked = ${e.target.checked}---${val.title}`);
                                                    }}>
                                                        {val.title}
                                                    </Checkbox>

                                                </div>
                                            )
                                        })

                                    ),
                                    key: '1',
                                }
                            ]
                        }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className={styles.filter_itm_othr}>
                                    Status: All
                                </Space>
                            </a>
                        </Dropdown> */}
                        <Select
                            mode="tags"
                            style={{ width: '10em' }}
                            onChange={statusHandleChange}
                            tokenSeparators={[]}
                            options={
                                projectStatusStrOvrkArr.map((val) => {

                                    return (
                                        {
                                            value: val.uniqText,
                                            label: (
                                                <div>
                                                    {val.title}
                                                </div>
                                            ),
                                        }
                                    )
                                })
                            }
                        />

                    </div>
                    <div className={styles.filter_inp_itm}>
                        <Input placeholder="Basic usage" onChange={(e) => setFilterInpVal(e.target.value)} />

                    </div>
                    <div>
                        <Button onClick={() => textHandleChange(filterInpVal)} type="primary">Search</Button>
                    </div>
                </div>

            </Col>
            <Col span={8} className={styles.filter_sec_col}>
                <Dropdown menu={{
                    items: [
                        {
                            label: (
                                <div className={styles.fitler_rg_bar_views_content}>
                                    Views
                                </div>
                            ),
                            key: 'views',
                        },
                        {
                            label: (
                                <div onClick={() => alert('viewsf')}>
                                    Detail View
                                </div>
                            ),
                            key: 'viewsf',
                        },
                        {
                            label: (
                                <div onClick={() => alert('viewsf')}>
                                    List View
                                </div>
                            ),
                            key: 'viewss',
                        },
                    ]
                }}
                    trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space className={styles.filter_sec_col_content}>
                            <FaArrowDownShortWide />
                        </Space>
                    </a>
                </Dropdown>
            </Col>
        </Row >
    )
}


type FilterRightBarNavBarSecCompType = {
    filterIssueByProjectCompFunc: (obj: FilterObjType) => void,


}

const FilterSecondBarInFirstComp: React.FC<OwnProps> = ({ filterIssueByProjectCompFunc }) => {




    return (
        <FilterRightBarNavBarSecComp filterIssueByProjectCompFunc={filterIssueByProjectCompFunc} />

    )
}

export default FilterSecondBarInFirstComp

type OwnProps = {
    filterIssueByProjectCompFunc: (obj: FilterObjType) => void,
}


export type FilterObjType = {
    projectFilter: Array<string>,
    typeFilter: Array<string>
    statusFilter: Array<string>
    textFilter: string
}