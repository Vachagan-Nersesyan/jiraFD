import React, { useEffect, useState } from 'react'
import styles from './MainBarProjectStl.module.css'
import { Button, Col, Dropdown, MenuProps, Modal, Row, Space } from 'antd'
import { FaAngleDown, FaJira, FaJs } from 'react-icons/fa6'
import { NavLink, useLocation } from 'react-router-dom'
import { ProjectType } from 'entities/project/projectReducerTs.interface'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { OwnProps } from './MainBarProjectTs.interface'
// import { InitialStateBoardOverlayType, InitialStateBoardType, changeAllBoardItems, changeBoardUniqName } from '../../../redux/projectReducer'
import firstpic from '../images/1.svg'
import secondpic from '../images/2.svg'
import { createProjectFunc, fetchProjects, setCurrentProject } from 'entities/project/projectReducerThunks'


let fg = false

const MainBarProjectsComp: React.FC<OwnProps> = () => {


    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()


    // delete selector

    const projectArr = useSelector((state: AppStateType) => state.project.projectArr)
    const currentProject = useSelector((state: AppStateType) => state.project.currentProject)
    const currentProjectIndex = useSelector((state: AppStateType) => state.project.currentProjectNumber)


    // const board = useSelector((state: AppStateType) => state.project.projectArr[currentProjectIndex].board)
    const currentBoard = useSelector((state: AppStateType) => state.project.currentBoard)

    let location = useLocation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [projectNameObj, setProjectNameObj] = useState<string>('')
    const [projectKeyObj, setProjectKeyObj] = useState<string>('')



    // useEffect(() => {
    //     // debugger
    //     // console.log('current board chagnes')

    //     console.log(location)


    //     if (!location.pathname.includes('/jiraItems/filter/')) {

    //         // alert('asdfasdfasd')


    //         dispatch(changeAllBoardItems(currentBoard))
    //         // &&

    //         // dispatch(changeAllBoardItems(board))


    //     }

    // }, [board.boardUniqName])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const createProjectCompFunc = async () => {
        await aDispatch(createProjectFunc({ name: projectNameObj, key: projectKeyObj }))
        await aDispatch(fetchProjects())

    }

    const handleOk = () => {
        createProjectCompFunc()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const changeProjectCompFunc: (projectName: string, id: number) => void = async (projectName: string, id: number) => {

        // sharunakelllll

        await aDispatch(setCurrentProject({ num: id }))
        await aDispatch(fetchProjects())



        console.log(currentBoard)
        // dispatch(addingBoardToProject({ projectName, board }))

        // debugger
        // console.log(location)
        // dispatch(addingBoardToProject({ projectName, board: currentBoard }))

        // dispatch(changeAllBoardItems(currentBoard))

        // debugger
        // dispatch(changeAllBoardItems(currentBoard))


    }



    const projectItems: MenuProps['items'] = [
        {
            label: (

                <div className={styles.menu_work_content_1_item}>
                    <div className={styles.menu_work_content_1_item_1_title}>
                        RECENT
                    </div>
                    <div className={styles.menu_work_content_1_item_2_itm}>
                        {
                            projectArr.map((val) => {

                                return (
                                    <NavLink to={`/jiraItems/board/${val.id}`} key={val.id} onClick={() => changeProjectCompFunc(val.boardUniqName, val.id)}>
                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_pic}>
                                            <img src={val.picture} />
                                        </div>
                                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                                {val.name} ({val.key})
                                            </div>
                                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_2_itm}>
                                                {val.projectType}
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
                    <NavLink to={'/jiraItems/allProjects'} >
                        View all projects
                    </NavLink>
                </div>
            ),
            key: '2',
        },
        {
            label: (

                <div className={styles.menu_work_content}>
                    <div onClick={showModal}>
                        Create project
                    </div>
                </div>
            ),
            key: '3',
        },

    ]


    // project create content

    // const projectItemClone: ProjectType = {
    //     id: 0,
    //     picture: '',
    //     name: '',
    //     key: '',
    //     lead: '',
    //     defaultAssignee: ''
    // }


    return (
        <>
            <Dropdown
                rootClassName={styles.main_bar_itms_stl} menu={{ items: projectItems }} trigger={['click']}>
                <div>
                    <Space >
                        Projects <FaAngleDown />
                    </Space>
                </div>
            </Dropdown>
            {/* delete modal hishel ara */}
            <Modal

                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className={styles.modal_create_project}
            >
                <Row className={styles.modal_create_project_container}>
                    <Col span={11} className={styles.modal_create_project_container_first_col}>
                        <div className={styles.modal_create_project_container_first_col_title}>
                            Add project details
                        </div>
                        <div className={styles.modal_create_project_container_first_col_1_item}>
                            Explore what's possible when you collaborate with your team. Edit project details anytime in project settings.
                        </div>
                        <div className={styles.modal_create_project_container_first_col_1_inp_tilte}>
                            Name
                        </div>
                        <div className={styles.modal_create_project_container_first_col_1_inp}>
                            <input type='text' placeholder="Try a team name, project goal, milestone..." onChange={(e) => setProjectNameObj(e.target.value)} />
                        </div>
                        <div className={styles.modal_create_project_container_first_col_1_item}>
                            <span>Access</span> Anyone with access to testdff can access and administer this project. Upgrade your plan to customize project permissions.
                        </div>
                        <div className={styles.modal_create_project_container_first_col_1_inp_tilte}>
                            Key
                        </div>
                        <div className={styles.modal_create_project_container_first_col_1_sec_inp}>
                            <input type='text' onChange={(e) => setProjectKeyObj(e.target.value)} />
                        </div>
                    </Col>
                    <Col span={11} className={styles.modal_create_project_container_second_col}>
                        <div className={styles.modal_create_project_container_second_col_sub_content}>
                            <div className={styles.modal_create_project_container_second_col_sub_content_1_item}>
                                <Row>
                                    <Col span={12} className={styles.modal_create_project_container_second_col_sub_content_1_item_title}>
                                        Template
                                    </Col>
                                    <Col span={12} className={styles.modal_create_project_container_second_col_sub_content_1_item_sec_col}>
                                        <Button>Change template</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.modal_create_project_container_second_col_sub_content_2_item}>
                                <Row className={styles.modal_create_project_container_second_col_sub_content_2_item_row}>
                                    <Col span={7} className={styles.modal_create_project_container_second_col_sub_content_2_item_first_col}>
                                        <img src={firstpic} />
                                    </Col>
                                    <Col span={17} className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col}>
                                        <div className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col_1_item}>
                                            Kanban
                                        </div>
                                        <div className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col_2_item}>
                                            <FaJira /> Jira Software
                                        </div>
                                        <div className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col_3_item}>
                                            Visualize and advance your project forward using issues on a powerful board.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className={styles.modal_create_project_container_second_col_sub_content}>
                            <div className={styles.modal_create_project_container_second_col_sub_content_1_item}>
                                <Row>
                                    <Col span={12} className={styles.modal_create_project_container_second_col_sub_content_1_item_title}>
                                        Type
                                    </Col>
                                    <Col span={12} className={styles.modal_create_project_container_second_col_sub_content_1_item_sec_col}>
                                        <Button>Change type</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.modal_create_project_container_second_col_sub_content_2_item}>
                                <Row className={styles.modal_create_project_container_second_col_sub_content_2_item_row}>
                                    <Col span={7} className={styles.modal_create_project_container_second_col_sub_content_2_item_first_col_s}>
                                        <img src={secondpic} />
                                    </Col>
                                    <Col span={17} className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col}>
                                        <div className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col_1_item}>
                                            Team-managed
                                        </div>
                                        <div className={styles.modal_create_project_container_second_col_sub_content_2_item_second_col_3_item}>
                                            Control your own working processes and practices in a self-contained space.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Modal >
        </>
    )
}

export default MainBarProjectsComp



