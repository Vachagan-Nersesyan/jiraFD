import React, { useEffect, useState } from 'react'
import styles from './MainBarCreateIssueStl.module.css'
import { Avatar, Button, Checkbox, Col, Dropdown, Input, List, Modal, Row, Select, Space } from 'antd'
import { FaAngleDown, FaArrowRightArrowLeft, FaArrowUpRightFromSquare, FaArrowsUpDownLeftRight, FaCircleUser, FaEllipsis, FaExpand, FaJs, FaMaximize, FaMinimize, FaRegEye, FaRegSquarePlus, FaUpRightAndDownLeftFromCenter, FaWindowMinimize, FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store';

import { issuesSlice } from 'entities/issues/issuesReducer';
import { IssuesType } from 'entities/issues/issuesReducerTs.interface';


import { projectSlice } from 'entities/project/projectReducer'
import { DeveloperInfoType, ProjectType } from 'entities/project/projectReducerTs.interface'


import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { BoardArrType } from 'entities/project/projectReducerTs.interface';
import { IssueToBoardsFuncArgsType } from 'pages/BoardComp/ui/BoardTs.interface';
import { v4 as uuidv4 } from 'uuid';
import { IssueValueType, MapDispatchToPropsType, MapStateToPropsType, OwnProps } from './MainBarCreateIssueTs.interface';



const SignupSchema = Yup.object().shape({

    issueName: Yup.string()
        .min(2, 'Too short')
        .max(10, 'Too long')
        .required('Required'),

});

const MainBarCreateIssueComp: React.FC<OwnProps & MapStateToPropsType & MapDispatchToPropsType> = ({ projectItem, projectArr, boardUniqName, boardsArr, addingIssueToCurrentBoard, issuesArr, addIssueToBoardsFunc }) => {

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
            id: 0,
            title: 'Story',
            images: '/pictures/issueImages/3.svg'
        },
        {
            id: 1,
            title: 'Bug',
            images: '/pictures/issueImages/1.svg'

        },
        {
            id: 2,
            title: 'Task',
            images: '/pictures/issueImages/4.svg'

        },
        {
            id: 3,
            title: 'Epic',
            images: '/pictures/issueImages/2.svg'

        },
    ]

    const mainbarcreatissForthArrData = [
        {
            id: 0,
            title: 'Vachagan',
        },
    ]

    const [crIssModalStlItm, setCrIssModalStlItm] = useState<string>('1')



    const [issueSelectStatusesArr, setIssueSelectStatusesArr] = useState<Array<BoardArrType>>([])



    const [projectName, setProjectName] = useState<string>('')

    const [projectTeamCmpArr, setProjectTeamCmpArr] = useState<null | Array<DeveloperInfoType>>(null)




    // useEffect(() => {

    //     debugger

    //     let projectTeamCmpArrFst: Array<DeveloperInfoType> = []

    //     projectItem.team?.teamPeaoples.map((val) => {
    //         projectTeamCmpArrFst.push(val)
    //     })

    //     setProjectTeamCmpArr(projectTeamCmpArrFst)

    // }, [projectItem.team])


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

        let projectTeamCmpArrFst: Array<DeveloperInfoType> = []


        console.log(projectArr)

        projectArr.map((val) => {
            if (val.name === value) {
                val.team?.teamPeaoples.map((val) => {
                    projectTeamCmpArrFst.push(val)
                })

                setProjectTeamCmpArr(projectTeamCmpArrFst)
            }
        })

        // if(value === projectItem.name){

        // }
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
            <div className={styles.create_issue_modal_btn_ofe_overlay}>
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
                            <FaExpand /> CONTINUE CREATING TASK
                        </div>
                    </Modal>
                    :
                    <Modal

                        wrapClassName={styles.modal_third_type_wrp_itm}

                        closeIcon={false}

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
                                debugger
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
                                                        }>{crIssModalStlItm === '1' ? <FaMinimize /> : <FaMaximize />}</Button>
                                                    <Button className={styles.main_bar_create_iss_modal_content_1_item_2_item_1_item} onClick={() => createIssToggleModal(0, false)}><FaXmark /> </Button>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className={styles.main_bar_create_iss_modal_content_1_item_overlay}>
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
                                                                    <FaRegEye /> 1
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
                                                                    <FaEllipsis />
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
                                                            label: 'RECENT PROJECTS',
                                                            options: projectArr.map((val, ind) => {
                                                                return {
                                                                    value: val.name,
                                                                    label: (
                                                                        <div key={val.id}
                                                                            onClick={() => {
                                                                                projectHandleChange(val.name)
                                                                            }}
                                                                            className={styles.main_bar_create_iss_modal_content_3_item_slct_ovly_sdr_item}
                                                                        >
                                                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                                                <img src={val.picture} />
                                                                            </div>
                                                                            <div className={styles.menu_work_content_1_item_2_itm_in_2_itm}>
                                                                                {val.name} ({val.projectType})
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        },

                                                    ]}
                                                />
                                            </div>
                                            <div className={crIssModalStlItm === '1' ? styles.main_bar_create_iss_modal_content_3_item : styles.main_bar_create_iss_modal_content_3_item_sec}>
                                                <Row>
                                                    <Col span={crIssModalStlItm === '1' ? 24 : 12}>
                                                        <div className={styles.main_bar_create_iss_modal_content_3_item_ovlr_feq_cont}>
                                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                                Issue type *
                                                            </div>
                                                            <Select
                                                                className={styles.main_bar_create_iss_modal_content_3_item_slct}
                                                                showSearch
                                                                placeholder="Search to Select"
                                                                optionFilterProp="children"
                                                                options={[
                                                                    ...mainbarcreatissThrdArrData.map((val) => {
                                                                        return {
                                                                            value: val.title,
                                                                            label: (
                                                                                <div key={val.id}
                                                                                    onClick={() => {
                                                                                        issueObj.issueTypeName = val.title
                                                                                    }}
                                                                                    className={styles.main_bar_create_iss_modal_content_3_item_slct_ovly_sdr_item}
                                                                                >
                                                                                    <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                                                                        <img src={`${val.images}`} />
                                                                                    </div>
                                                                                    <div className={styles.menu_work_content_1_item_2_itm_in_2_itm}>
                                                                                        {val.title}
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    })
                                                                ]}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col span={crIssModalStlItm === '1' ? 24 : 12}>
                                                        <div className={styles.main_bar_create_iss_modal_content_3_item_content_overlay}>
                                                            <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                                Status <FaArrowUpRightFromSquare />
                                                            </div>
                                                            <Select
                                                                showSearch
                                                                className={styles.main_bar_create_iss_modal_content_3_item_uniq_slct}
                                                                placeholder="Select a status"
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
                                                        placeholder="Pleas write issues's description" />
                                                </div>
                                            </div>


                                            <div className={styles.main_bar_create_iss_modal_content_3_item}>

                                                <div className={styles.main_bar_create_iss_modal_content_3_item_title}>
                                                    Assignee
                                                </div>
                                                <Select
                                                    className={styles.main_bar_create_iss_modal_content_3_item_slct}

                                                    showSearch
                                                    optionFilterProp="children"
                                                    options={
                                                        projectTeamCmpArr?.map((val) => {
                                                            return {
                                                                value: val.name,
                                                                label: (
                                                                    <div
                                                                        onClick={() => {
                                                                            issueObj.assignee = val.name
                                                                            console.log(issueObj)
                                                                        }}
                                                                    >
                                                                        {val.name}
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
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

                                                        ...mainbarcreatissForthArrData.map((val) => {
                                                            return {
                                                                value: val.title,
                                                                label: (
                                                                    <div key={val.id}
                                                                        onClick={() => {
                                                                            issueObj.reporter = val.title
                                                                        }}
                                                                        className={styles.main_bar_create_iss_modal_content_3_item_slct_ovly_sdr_item}
                                                                    >
                                                                        <div className={styles.menu_work_content_1_item_2_itm_in_2_itm}>
                                                                            {val.title}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    ]}
                                                />
                                            </div>
                                        </div>


                                        <div className={styles.main_bar_create_iss_modal_content_7_item}>
                                            <Row>
                                                <Col span={12}>
                                                    <Checkbox>Create another issue</Checkbox>
                                                </Col>
                                                <Col span={12} className={styles.main_bar_create_iss_modal_content_7_item_sec_col}>
                                                    <Button type="primary" onClick={() => createIssToggleModal(0, false)}>Cancel</Button>
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
        boardUniqName: state.project.projectArr[currentProjectNumberfst].boardUniqName,
        projectItem: state.project.projectArr[currentProjectNumberfst]
    }
}

const MainBarCreateIssueCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        addIssueToBoardsFunc: projectSlice.actions.addIssueToBoardsFunc,
        addingIssueToCurrentBoard: projectSlice.actions.addingIssueToCurrentBoard
    })
)(MainBarCreateIssueComp)


export default MainBarCreateIssueCompCont

