import React, { useState } from 'react'
import styles from './MainBarCreateIssueStl.module.css'
import { Avatar, Button, Checkbox, Col, Dropdown, Input, List, Modal, Row, Select, Space } from 'antd'
import { FaAngleDown, FaArrowUpRightFromSquare, FaCircleUser, FaJs, FaRegEye, FaRegSquarePlus, FaUpRightAndDownLeftFromCenter, FaWindowMinimize } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store';
import { IssuesType, issuesSlice } from '../../../redux/issuesReducer';
import { ProjectType, projectSlice } from '../../../redux/projectReducer'
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { BoardArrType } from '../../../redux/projectReducer';
import { IssueToBoardsFuncArgsType } from '../../BoardComp/BoardScp';
import { v4 as uuidv4 } from 'uuid';



const SignupSchema = Yup.object().shape({

    issueName: Yup.string()
        .min(2, 'Too short')
        .max(10, 'Too long')
        .required('Required'),

});

const MainBarCreateIssueComp: React.FC<OwnProps & MapStateToPropsType & MapDispatchToPropsType> = ({ projectArr, boardUniqName, boardsArr, addingIssueToCurrentBoard, issuesArr, addIssueToBoardsFunc }) => {

    // delete this

    // const projectArr = useSelector((state: AppStateType) => state.project.projectArr)



    const [createIssIsModalOpen, setCreateIssTeamIsModalOpen] = useState([false, false]);

    const createIssToggleModal = (idx: number, target: boolean) => {
        setCreateIssTeamIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };

    const mainbarcreatissArrData = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'asdasdasd 1',
        },
    ]

    const mainbarcreatissSecArrData = [
        {
            title: 'Ant Design Title 1',
        },
    ]

    const mainbarcreatissThrdArrData = [
        {
            title: 'Story',
        },
        {
            title: 'Bug',
        },
        {
            title: 'Task',
        },
        {
            title: 'Epic',
        },
    ]

    const mainbarcreatissForthArrData = [
        {
            title: 'Ant Design Title 1',
        },
    ]

    const [crIssModalStlItm, setCrIssModalStlItm] = useState<string>('1')



    const [issueSelectStatusesArr, setIssueSelectStatusesArr] = useState<Array<BoardArrType>>([])


    const [projectName, setProjectName] = useState<string>('')



    // create issue hooks



    const createIssueCompFunc: (obj: IssuesType, str: string, projectName: string) => void = (obj, str, projectName) => {
        // debugger

        if (boardUniqName.includes(obj.issuesProject)) {
            addIssueToBoardsFunc({ obj, uniqtext: str })

            // addingBoardToProject({projectName,})

        } else {
            addingIssueToCurrentBoard({ obj, str, projectName })

        }

        // debugger

        // console.log(projectArr)

    }

    let issueObj: IssuesType = {
        id: issuesArr.length + 1,
        uniqId: uuidv4(),
        issuesProject: '',
        issueTypeName: 'Task',
        issueTypePic: '',
        issueStatus: '',
        summary: '',
        descriptionText: '',
        description: [],
        assignee: '',
        doneRecently: '',
        storyPoint: 0,
        reporter: 'Vachagan',
        issueShortName: '',
        issueComments: [],
        issuesChilds: [],
        flag: false,
        issueLabel: [],
        currentDate: '',

        issuesInnerItems: [],
        isSubIssue: false

    }

    const issueObjClone: IssuesType = { ...issueObj }

    const projectHandleChange = (value: string) => {


        // issueObj.issuesProject = value
        setProjectName(value)

        if (boardUniqName.includes(value)) {
            setIssueSelectStatusesArr(boardsArr)
            return
        }

        projectArr.map((val) => {

            if (val.name === value) {
                setIssueSelectStatusesArr(val.board.boardArr)

            }
        })
    };




    return (
        <>
            <div>
                <Button onClick={() => createIssToggleModal(0, true)} type="primary">Create</Button>

            </div>
            {
                crIssModalStlItm === '3'
                    ?
                    <Modal


                        className={styles.create_issue_modal_third_type}
                        open={createIssIsModalOpen[0]}

                        onOk={() => createIssToggleModal(0, false)}
                        onCancel={() => {
                            createIssToggleModal(0, false)
                            setCrIssModalStlItm('1')
                        }}
                        styles={{
                            header: {
                                borderRadius: 0
                            },
                            body: {
                                // zIndex: -1,
                                borderRadius: 5,
                            },
                            mask: {
                                backgroundColor: 'transparent',
                                zIndex: -1
                            },
                            content: {
                                padding: 0,
                                zIndex: 2
                            },
                            footer: {
                                display: 'none'
                            },
                        }}
                    >
                        <div onClick={() => setCrIssModalStlItm('2')} className={styles.create_issue_modal_third_type_in_content}>
                            <FaCircleUser /> task 3
                        </div>
                    </Modal>
                    :
                    <Modal

                        wrapClassName={styles.modal_third_type_wrp_itm}

                        className={crIssModalStlItm === '1' ?
                            styles.create_issue_modal_first_type
                            :

                            styles.create_issue_modal_second_type

                        }
                        // rootClassName={}
                        open={createIssIsModalOpen[0]}
                        onOk={() => createIssToggleModal(0, false)}
                        styles={{
                            header: {
                                borderRadius: 0
                            },
                            body: {
                                // zIndex: -1,
                                borderRadius: 5,
                            },
                            mask: {
                                backgroundColor: 'transparent',
                                zIndex: -1
                            },
                            content: {
                                zIndex: 2
                            },
                            footer: {
                                display: 'none'
                            },
                        }}
                    >
                        <Formik
                            initialValues={{
                                issueName: ''
                            }}



                            validationSchema={SignupSchema}


                            onSubmit={(values: IssueValueType, { setSubmitting }: FormikHelpers<IssueValueType>) => {

                                issueObj.summary = values.issueName

                                if (issueObj.issueTypeName === 'Story') {
                                    issueObj.issueTypePic = '/pictures/issueImages/3.svg'
                                } else if (issueObj.issueTypeName === 'Bug') {
                                    issueObj.issueTypePic = '/pictures/issueImages/1.svg'
                                } else if (issueObj.issueTypeName === 'Task') {
                                    issueObj.issueTypePic = '/pictures/issueImages/4.svg'
                                } else {
                                    issueObj.issueTypePic = '/pictures/issueImages/2.svg'
                                }

                                if (!issueObj.issueStatus) {
                                    issueObj.issueStatus = 'todo'
                                }


                                let current = new Date();
                                let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();

                                issueObj.currentDate = cDate

                                if (issueObj.issueStatus === 'done') {

                                    issueObj.doneRecently = cDate
                                }

                                for (let i in projectArr) {
                                    if (projectArr[i].name === issueObj.issuesProject) {
                                        issueObj.issueShortName = `${projectArr[i].key} . ${issueObj.id}`
                                        break
                                    }
                                }

                                issueObj.issuesProject = projectName
                                createIssueCompFunc(issueObj, issueObj.issueStatus, issueObj.issuesProject)
                                // addIssuetoProjFunc(issueObj)
                                issueObj = { ...issueObjClone }

                                setSubmitting(false);
                            }
                            }


                        >
                            {({
                                isSubmitting,
                                errors,
                                touched,
                            }) => (
                                <Form>
                                    <div className={crIssModalStlItm === '1' ? styles.main_bar_create_iss_modal_content : styles.main_bar_create_iss_modal_content_sec}>
                                        <div className={styles.main_bar_create_iss_modal_content_1_item}>
                                            <Row>
                                                <Col span={12} className={styles.main_bar_create_iss_modal_content_1_item_1_item}>
                                                    Create issues
                                                </Col>
                                                <Col span={12} className={styles.main_bar_create_iss_modal_content_1_item_2_item}>
                                                    <Button className={styles.main_bar_create_iss_modal_content_1_item_2_item_1_item} onClick={() => setCrIssModalStlItm('3')} ><FaWindowMinimize /></Button>
                                                    <Button
                                                        className={styles.main_bar_create_iss_modal_content_1_item_2_item_1_item}
                                                        onClick={() =>
                                                            crIssModalStlItm === '1' ?
                                                                setCrIssModalStlItm('2') :
                                                                setCrIssModalStlItm('1')
                                                        }><FaUpRightAndDownLeftFromCenter /></Button>
                                                    <Button className={styles.main_bar_create_iss_modal_content_1_item_2_item_1_item} onClick={() => createIssToggleModal(0, false)}><FaRegSquarePlus /></Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={styles.main_bar_create_iss_modal_content_2_item}>
                                            <Row className={styles.main_bar_create_iss_modal_content_2_item_container}>
                                                <Col className={styles.main_bar_create_iss_modal_content_2_item_container_first_col} span={12}>
                                                    Required fields are marked with an asterisk *
                                                </Col >
                                                <Col className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col} span={12}>
                                                    <Dropdown menu={{
                                                        items: [
                                                            {
                                                                label: (
                                                                    <div className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_1item}>
                                                                        <Row className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_1item_1_item}>
                                                                            <Col span={16} className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_1item_1_item_in_1_item}>
                                                                                <FaRegEye /> Stop watching
                                                                            </Col>
                                                                            <Col span={8} className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_1item_1_item_in_2_item}>
                                                                                W
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                ),
                                                                key: '1',
                                                            },
                                                            {
                                                                type: 'divider',
                                                            },
                                                            {
                                                                label: (
                                                                    <div className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_title}>
                                                                        WATCHING THIS ISSUE
                                                                    </div>
                                                                ),
                                                                key: '2',
                                                            },
                                                            {
                                                                label: (
                                                                    <div className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_2_item}>
                                                                        <FaAngleDown />
                                                                        Vachagan
                                                                    </div>
                                                                ),
                                                                key: '3',
                                                            },
                                                            {
                                                                type: 'divider',
                                                            },
                                                            {
                                                                label: (
                                                                    <div className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_3_item}>
                                                                        <Row className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_3_item_container}>
                                                                            <Col span={8}>
                                                                                +
                                                                            </Col>
                                                                            <Col span={16} className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_in_3_item_sec_col}>
                                                                                Add watchers
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                ),
                                                                key: '4',
                                                            },
                                                        ]
                                                    }} trigger={['click']}
                                                        className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_1_item}
                                                    >
                                                        <a onClick={(e) => e.preventDefault()}>
                                                            <Space>
                                                                <FaRegEye /> 0
                                                            </Space>
                                                        </a>
                                                    </Dropdown>
                                                    <Button
                                                        className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_2_item}
                                                    >Import issues</Button>
                                                    <Dropdown menu={{
                                                        items: [
                                                            {
                                                                label: (
                                                                    <div>
                                                                        Show fields
                                                                    </div>
                                                                ),
                                                                key: '1'
                                                            }
                                                        ]
                                                    }} trigger={['click']}
                                                        className={styles.main_bar_create_iss_modal_content_2_item_container_sec_col_3_item}
                                                    >
                                                        <a onClick={(e) => e.preventDefault()}>
                                                            <Space>
                                                                ...
                                                            </Space>
                                                        </a>
                                                    </Dropdown>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={styles.main_bar_create_iss_modal_content_3_item}>
                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                Project *
                                            </div>
                                            <Select
                                                showSearch
                                                placeholder="Search to Select"
                                                optionFilterProp="children"
                                                className={styles.main_bar_create_iss_modal_content_3_item_slct}
                                                options={[
                                                    {
                                                        value: '1',
                                                        label: (
                                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                                RECENT PROJECTS
                                                            </div>
                                                        ),
                                                    },
                                                    {
                                                        value: '2',
                                                        label:
                                                            projectArr.map((val) => {
                                                                return (
                                                                    <div key={val.id}
                                                                        onClick={() => {
                                                                            projectHandleChange(val.name)
                                                                        }}
                                                                    >
                                                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                                            <FaJs />
                                                                        </div>
                                                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                                                {val.name} ({val.key})
                                                                            </div>
                                                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                                                                {val.projectType}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                    },
                                                    {
                                                        value: '3',
                                                        label: (
                                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                                ALL PROJECTS
                                                            </div>
                                                        ),
                                                    },
                                                    {
                                                        value: '4',
                                                        label:
                                                            projectArr.map((val) => {
                                                                return (
                                                                    <div key={val.id}
                                                                        onClick={() => {
                                                                            // issueObj.issuesProject = val.name
                                                                            projectHandleChange(val.name)
                                                                        }}
                                                                    >
                                                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                                            <FaJs />
                                                                        </div>
                                                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                                                {val.name} ({val.key})
                                                                            </div>
                                                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                                                                {val.projectType}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }),
                                                    }
                                                ]}
                                            />
                                        </div>
                                        <div className={crIssModalStlItm === '1' ? styles.main_bar_create_iss_modal_content_3_item : styles.main_bar_create_iss_modal_content_3_item_sec}>
                                            <Row>
                                                <Col span={crIssModalStlItm === '1' ? 24 : 12}>
                                                    <div>
                                                        <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                            Issue type *
                                                        </div>
                                                        <Select
                                                            className={styles.main_bar_create_iss_modal_content_3_item_slct}
                                                            showSearch
                                                            placeholder="Search to Select"
                                                            optionFilterProp="children"
                                                            options={[
                                                                {
                                                                    value: '1',
                                                                    label: 'Issue type *',
                                                                },
                                                                {
                                                                    value: '2',
                                                                    label: (
                                                                        <div>
                                                                            <List
                                                                                itemLayout="horizontal"
                                                                                dataSource={mainbarcreatissThrdArrData}
                                                                                renderItem={(item, index) => (
                                                                                    <List.Item>
                                                                                        <List.Item.Meta
                                                                                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                                                                            title={<div onClick={() => {
                                                                                                issueObj.issueTypeName = item.title

                                                                                            }}>{item.title}</div>}
                                                                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                                                        />
                                                                                    </List.Item>
                                                                                )}
                                                                            />
                                                                        </div>
                                                                    ),
                                                                }
                                                            ]}
                                                        />
                                                        <div>
                                                            <NavLink to={'/'}>
                                                                Learn about issues types
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col span={crIssModalStlItm === '1' ? 24 : 12}>
                                                    <div>
                                                        <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                            Status <FaArrowUpRightFromSquare />
                                                        </div>
                                                        <Select
                                                            showSearch
                                                            className={styles.main_bar_create_iss_modal_content_3_item_uniq_slct}
                                                            placeholder="Select a person"
                                                            optionFilterProp="children"
                                                            options={
                                                                issueSelectStatusesArr.map((val) => {
                                                                    return (
                                                                        {
                                                                            value: val.uniqText,
                                                                            label: (
                                                                                <div onClick={() => {
                                                                                    issueObj.issueStatus = val.uniqText
                                                                                    console.log(issueObj)
                                                                                }}>
                                                                                    {val.title}
                                                                                </div>
                                                                            ),
                                                                        }
                                                                    )
                                                                })
                                                            }
                                                        />
                                                        <div className={styles.main_bar_create_iss_modal_content_3_item_1_slct}>
                                                            This is the issue's initial status upon creation
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>




                                        <div className={styles.main_bar_create_iss_modal_content_4_item}>
                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title} >
                                                Summary <FaCircleUser />
                                            </div>
                                            <div>
                                                <Field className={errors.issueName && touched.issueName ? styles.main_bar_create_iss_modal_content_4_inp_item_err_inp : styles.main_bar_create_iss_modal_content_4_inp_item_sec} name='issueName' />
                                                <div className={styles.main_bar_create_iss_modal_content_4_inp_item_err}>
                                                    <ErrorMessage name='issueName' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.main_bar_create_iss_modal_content_4_item}>
                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                Desctription
                                            </div>
                                            <div className={styles.main_bar_create_iss_modal_content_4_inp_item}>
                                                <Input
                                                    onChange={(e) => {
                                                        issueObj.issueStatus = e.target.value

                                                    }}
                                                    placeholder="Basic usage" />
                                            </div>
                                        </div>


                                        <div className={styles.main_bar_create_iss_modal_content_3_item}>

                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                Assignee
                                            </div>
                                            <Select
                                                className={styles.main_bar_create_iss_modal_content_3_item_slct}

                                                showSearch
                                                placeholder="Search to Select"
                                                optionFilterProp="children"
                                                options={[
                                                    {
                                                        value: '1',
                                                        label: (
                                                            <div>
                                                                <List
                                                                    itemLayout="horizontal"
                                                                    dataSource={mainbarcreatissForthArrData}
                                                                    renderItem={(item, index) => (
                                                                        <List.Item>
                                                                            <List.Item.Meta
                                                                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                                                                title={<div onClick={() => {
                                                                                    issueObj.assignee = item.title
                                                                                    console.log(issueObj)
                                                                                }} placeholder="Basic usage">{item.title}</div>}
                                                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                                            />
                                                                        </List.Item>
                                                                    )}
                                                                />
                                                            </div>
                                                        ),
                                                    }
                                                ]}
                                            />
                                            <div className={styles.main_bar_create_iss_modal_content_5_item}
                                                onClick={() => {
                                                    issueObj.assignee = 'Vachagan'
                                                }}
                                            >
                                                Assign to me
                                            </div>
                                        </div>

                                        <div className={styles.main_bar_create_iss_modal_content_3_item}>
                                            <div>
                                                Reporter *
                                            </div>
                                            <Select

                                                className={styles.main_bar_create_iss_modal_content_3_item_slct}
                                                showSearch
                                                placeholder="Search to Select"
                                                optionFilterProp="children"
                                                options={[
                                                    {
                                                        value: '1',
                                                        label: (
                                                            <div>
                                                                <List
                                                                    itemLayout="horizontal"
                                                                    dataSource={mainbarcreatissForthArrData}
                                                                    renderItem={(item, index) => (
                                                                        <List.Item>
                                                                            <List.Item.Meta
                                                                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                                                                title={<div onClick={() => {
                                                                                    issueObj.reporter = item.title
                                                                                }}>{item.title}</div>}
                                                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                                            />
                                                                        </List.Item>
                                                                    )}
                                                                />
                                                            </div>
                                                        ),
                                                    }
                                                ]}
                                            />
                                        </div>

                                        <div className={styles.main_bar_create_iss_modal_content_7_item}>
                                            <Row>
                                                <Col span={12}>
                                                    <Checkbox>Create another issue</Checkbox>
                                                </Col>
                                                <Col span={12} className={styles.main_bar_create_iss_modal_content_7_item_sec_col}>
                                                    <Button type="primary">Cancel</Button>
                                                    <Input type='submit' disabled={isSubmitting} value='Create' />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Modal >

            }

        </>
    )
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {

    let currentProjectNumberfst = state.project.currentProjectNumber

    return {
        issuesArr: state.issues.filteredIssuesArr,
        boardsArr: state.project.projectArr[currentProjectNumberfst].board.boardArr,
        projectArr: state.project.projectArr,
        boardUniqName: state.project.projectArr[currentProjectNumberfst].boardUniqName
    }
}

const MainBarCreateIssueCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        addIssueToBoardsFunc: projectSlice.actions.addIssueToBoardsFunc,
        addingIssueToCurrentBoard: projectSlice.actions.addingIssueToCurrentBoard
    })
)(MainBarCreateIssueComp)


export default MainBarCreateIssueCompCont

type OwnProps = {}

type MapStateToPropsType = {
    issuesArr: Array<IssuesType>,
    boardsArr: Array<BoardArrType>,
    projectArr: Array<ProjectType>,
    boardUniqName: string
}

type MapDispatchToPropsType = {
    addIssueToBoardsFunc: ({ obj, uniqtext }: IssueToBoardsFuncArgsType) => void,
    addingIssueToCurrentBoard: ({ obj, str, projectName }: AddingIssueToCurrentBoardArgsType) => void,

}

export type AddingIssueToCurrentBoardArgsType = {
    obj: IssuesType,
    str: string,
    projectName: string
}


type IssueValueType = {
    issueName: string
}