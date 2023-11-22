import React, { useEffect, useState } from 'react'
import styles from './MainBarProjectStl.module.css'
import { Dropdown, MenuProps, Modal, Space } from 'antd'
import { FaAngleDown, FaJs } from 'react-icons/fa6'
import { NavLink, useLocation } from 'react-router-dom'
import { addingBoardToProject, addingCurrentBoardToProject, changeBoardToProject, changeAllBoardItems, changeBoardUniqName, setCurrentProject, createProjectFunc } from 'entities/project/projectReducer'
import { ProjectType } from 'entities/project/projectReducerTs.interface'
import { AppStateType } from 'entities/store/redux-store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { OwnProps } from './MainBarProjectTs.interface'
// import { InitialStateBoardOverlayType, InitialStateBoardType, changeAllBoardItems, changeBoardUniqName } from '../../../redux/projectReducer'


let fg = false

const MainBarProjectsComp: React.FC<OwnProps> = () => {


    const dispatch = useDispatch()

    // delete selector

    const projectArr = useSelector((state: AppStateType) => state.project.projectArr)
    const currentProject = useSelector((state: AppStateType) => state.project.currentProject)
    const currentProjectIndex = useSelector((state: AppStateType) => state.project.currentProjectNumber)


    const board = useSelector((state: AppStateType) => state.project.projectArr[currentProjectIndex].board)
    const currentBoard = useSelector((state: AppStateType) => state.project.currentBoard)

    let location = useLocation();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [projectNameObj, setProjectNameObj] = useState<string>('')
    const [projectKeyObj, setProjectKeyObj] = useState<string>('')




    useEffect(() => {
        // debugger
        // console.log('current board chagnes')

        console.log(location)


        if (!location.pathname.includes('/jiraItems/filter/')) {

            // alert('asdfasdfasd')


            dispatch(changeAllBoardItems(currentBoard))
            // &&

            // dispatch(changeAllBoardItems(board))


        }

    }, [board.boardUniqName])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const createProjectCompFunc = () => {
        dispatch(createProjectFunc({ name: projectNameObj, key: projectKeyObj }))
    }

    const handleOk = () => {
        createProjectCompFunc()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const changeProjectCompFunc: (projectName: string, id: number) => void = (projectName: string, id: number) => {

        // sharunakelllll

        dispatch(setCurrentProject(id))


        console.log(currentBoard)
        dispatch(addingBoardToProject({ projectName, board }))

        // debugger
        // console.log(location)
        // dispatch(addingBoardToProject({ projectName, board: currentBoard }))

        // dispatch(changeAllBoardItems(currentBoard))

        // debugger
        // dispatch(changeAllBoardItems(currentBoard))


        dispatch(changeBoardToProject(projectName))

        dispatch(changeBoardUniqName(projectName))
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
                    <NavLink to={'/'} onClick={showModal}>
                        Create project
                    </NavLink>
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
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type="text" onChange={(e) => setProjectNameObj(e.target.value)} />
                Write key
                <input type="text" onChange={(e) => setProjectKeyObj(e.target.value)} />
                <input type='submit' />

            </Modal>
        </>
    )
}

export default MainBarProjectsComp



