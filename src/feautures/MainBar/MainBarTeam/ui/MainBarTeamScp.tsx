import React, { useEffect, useState } from 'react'
import styles from './MainBarTeamStl.module.css'
import { Button, Checkbox, Col, Dropdown, Input, MenuProps, Modal, Row, Select, Space, Tooltip } from 'antd'
import { FaAngleDown, FaEllipsis, FaJs, FaPlus, FaUserGroup, FaUsersRectangle } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { addDeveloperFunc, chooseProjectForTeamFunc } from 'entities/project/projectReducer'
import { DeveloperInfoType, ProjectType, TeamType } from 'entities/project/projectReducerTs.interface'

import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { v4 as uuid } from "uuid";



import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { OwnProps } from './MainBarTeamTs.interface'

import firstpic from '../images/1.png'
import secondpic from '../images/2.png'
import thirdpic from '../images/3.png'


const MainBarTeamComp: React.FC<OwnProps> = () => {

    const dispatch = useDispatch()

    const [teamIsModalOpen, setTeamIsModalOpen] = useState([false, false]);
    const [teamIsSecModalOpen, setTeamSecIsModalOpen] = useState([false, false]);

    const projectTeamArr = useSelector((state: AppStateType) => state.project.projectArr)
    // const currentProjectTeamArr = useSelector((state: AppStateType) => state.project.currentProjectNumber)



    // ^^^

    const [projectTeamHkArr, setProjectTeamHkArr] = useState<Array<ProjectType>>(projectTeamArr)

    useEffect(() => {

        setProjectTeamHkArr(projectTeamArr)

    }, [projectTeamArr])


    // team

    const [teamName, setTeamName] = useState<string>('')
    const [teamProjectName, setteamProjectName] = useState<string>('')


    // people

    const [projectPeopleTeamHkArr, setProjectPeopleTeamHkArr] = useState<Array<TeamType>>([])

    useEffect(() => {

        let projectsAllTeamsArr: Array<TeamType> = []

        projectTeamArr.map((val) => {
            if (val.team) {
                projectsAllTeamsArr.push(val.team)

            }
        })

        setProjectPeopleTeamHkArr(projectsAllTeamsArr)

    }, [])

    useEffect(() => {

        let projectsAllTeamsArr: Array<TeamType> = []

        projectTeamArr.map((val) => {
            if (val.team) {
                projectsAllTeamsArr.push(val.team)

            }
        })

        setProjectPeopleTeamHkArr(projectsAllTeamsArr)

    }, [projectTeamArr])


    const [peopleName, changePeopleName] = useState<string>('')

    const [developerTeam, setDeveloperTeam] = useState<string>('')

    const addPeopleCompFunc = () => {

        const avatarUser = createAvatar(avataaars, {
            seed: uuid(),
        });

        const dataUriUser = avatarUser.toDataUriSync();


        let developerObj: DeveloperInfoType = {
            uniqId: uuidv4(),
            id: 9999,
            name: peopleName,
            teamName: developerTeam,

            picture: dataUriUser

        }

        dispatch(addDeveloperFunc(developerObj))
    }



    const teamToggleModal = (idx: number, target: boolean) => {
        setTeamIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };

    const teamSecToggleModal = (idx: number, target: boolean) => {
        setTeamSecIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };

    const teamsItems: MenuProps['items'] = [

        {
            label: (
                <div>
                    <div className={styles.team_main_bar_fie_content}>
                        TEAMS
                    </div>
                    <div>

                        {
                            projectPeopleTeamHkArr.length === 0
                                ?
                                <div className={styles.team_main_bar_fie_content_in_title}>
                                    There is not any team
                                </div>
                                :
                                <div>
                                    {
                                        projectPeopleTeamHkArr.map((val) => {
                                            return (
                                                <div className={styles.team_main_bar_fie_content_in_item}>
                                                    <NavLink to={`/jiraItems/team/${val.id}`}>
                                                        <div className={styles.team_main_bar_fie_content_in_item_1_item}>
                                                            <FaUsersRectangle />
                                                        </div>
                                                        <div className={styles.team_main_bar_fie_content_in_item_2_item}>
                                                            <div className={styles.team_main_bar_fie_content_in_item_2_item_1_item}>
                                                                {val.teamName}
                                                            </div>
                                                            <div className={styles.team_main_bar_fie_content_in_item_2_item_2_item}>
                                                                {val.teamPeaoples.length} member
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </div>
                </div>
            ),
            key: '1'
        },

        {
            type: 'divider',
        },
        {
            label: (
                <div className={styles.menu_work_content_1_item}>
                    <div onClick={() => teamToggleModal(0, true)} className={styles.menu_work_content_1_item_2_itm}>


                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                            <FaPlus />
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                            Invite people to Jira
                        </div>


                    </div>
                    <div onClick={() => teamSecToggleModal(0, true)} className={styles.menu_work_content_1_item_2_itm}>


                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                            <FaUserGroup />
                        </div>
                        <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                            Create a team
                        </div>


                    </div>
                </div>
            ),
            key: '2',
        },

        {
            label: (
                <div className={styles.menu_work_content}>
                    <NavLink to={'/jiraItems/searchPeople'}>
                        Search people and teams
                    </NavLink>
                </div>
            ),
            key: '3',
        }
    ]

    const addProjectForTeamComp = () => {
        dispatch(chooseProjectForTeamFunc({ str: teamName, projectName: teamProjectName, id: uuidv4() }))
    };



    return (
        <>
            <Dropdown
                rootClassName={styles.main_bar_itms_stl} menu={{ items: teamsItems }} trigger={['click']}>
                <div>
                    <Space >
                        Teams <FaAngleDown />
                    </Space>
                </div>
            </Dropdown>
            <Modal
                open={teamIsModalOpen[0]}
                onOk={() => teamToggleModal(0, false)}
                onCancel={() => teamToggleModal(0, false)}
                footer="Footer"
                closeIcon={false}
                styles={{
                    header: {
                        borderRadius: 0,
                        paddingInlineStart: 5,
                    },
                    body: {
                        // display : 'flex',
                        borderRadius: 5,
                    },
                    mask: {
                        backdropFilter: 'blur(5px)',
                    },
                    footer: {
                        display: 'none'
                    },
                }}
            >
                <div className={styles.main_bar_first_modal_content}>
                    <div className={styles.main_bar_first_modal_content_container}>
                        <Row className={styles.main_bar_first_modal_content_container_row}>
                            <Col span={18}>
                                <div className={styles.main_bar_first_modal_content_container_row_1_item}>
                                    Add people to Jira Software
                                </div>
                            </Col>
                            <Col span={6} className={styles.main_bar_first_modal_content_container_row_2_col}>
                                <Dropdown menu={{
                                    items: [
                                        {
                                            label: (
                                                <div>ADMIN</div>
                                            ),
                                            key: '0',
                                        },
                                        {
                                            label: (
                                                <div>
                                                    <FaAngleDown /> User management
                                                </div>
                                            ),
                                            key: '1',
                                        },
                                        {
                                            label: (
                                                <div>
                                                    <FaAngleDown /> Site access settings
                                                </div>
                                            ),
                                            key: '2',
                                        },
                                    ]
                                }} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <FaEllipsis className={styles.team_main_bar_fie_content_in_item_2_item_2_item} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.main_bar_first_modal_content_2_item}>
                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                            Names or emails
                        </div>
                        <div className={styles.main_bar_first_modal_content_2_item_in_2_item}>
                            <Input onChange={(e) => changePeopleName(e.target.value)} placeholder="e.g., Maria, maria@company.com" />
                        </div>
                    </div>
                    <div className={styles.main_bar_first_modal_content_2_item}>
                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                            or add from
                        </div>
                        <div className={styles.main_bar_first_modal_content_2_item_in_2_item}>
                            <Button className={styles.main_bar_first_modal_content_2_item_in_2_item_btn}>
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_pic}>
                                    <img src={firstpic} />
                                </div>
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_txt}>
                                    Google
                                </div>
                            </Button>
                            <Button className={styles.main_bar_first_modal_content_2_item_in_2_item_btn}>
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_pic}>
                                    <img src={secondpic} />
                                </div>
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_txt}>
                                    Slack
                                </div>
                            </Button>
                            <Button className={styles.main_bar_first_modal_content_2_item_in_2_item_btn}>
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_pic}>
                                    <img src={thirdpic} />
                                </div>
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_txt}>
                                    Microsoft
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div>
                        {
                            projectPeopleTeamHkArr.length === 0
                                ?
                                <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_txt}>
                                    Sorry there isn't active teams to add developer
                                </div>
                                :
                                <>
                                    <div className={styles.main_bar_first_modal_content_2_item_in_2_item_btn_txt}>
                                        Please choose your team
                                    </div>
                                    <Select
                                        style={{ width: 120 }}
                                        onChange={(value: string) => setDeveloperTeam(value)}
                                        className={styles.main_bar_first_modal_content_2_item_in_2_item_select}
                                        options={
                                            projectPeopleTeamHkArr.map((val) => {
                                                return {
                                                    value: val.teamName,
                                                    label: (
                                                        <div>
                                                            {val.teamName}
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    />
                                </>
                        }

                    </div>
                    <div className={styles.main_bar_first_modal_content_3_item}>
                        This site is protected by reCAPTCHA and the Google <NavLink to={'/'}>Privacy Policy</NavLink> and <NavLink to={'/'}>Terms of Service</NavLink> apply.
                    </div>
                    <div className={styles.main_bar_first_modal_content_4_item}>
                        <Row >
                            <Col span={12}>
                            </Col>
                            <Col span={12} className={styles.main_bar_first_modal_content_4_item_in_container}>
                                <Button>Cancel</Button>
                                <Button onClick={addPeopleCompFunc} type="primary" className={styles.main_bar_first_modal_content_4_item_in_container_btn}>Add</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Modal>


            <Modal
                className={styles.main_bar_sec_team_modal}

                open={teamIsSecModalOpen[0]}
                onOk={() => teamSecToggleModal(0, false)}
                onCancel={() => teamSecToggleModal(0, false)}
                footer="Footer"
                styles={{
                    header: {
                        borderRadius: 0,
                        paddingInlineStart: 5,
                    },
                    body: {
                        // display : 'flex',
                        borderRadius: 5,
                    },
                    mask: {
                        backdropFilter: 'blur(5px)',
                    },
                    footer: {
                        display: 'none'
                    },
                }}
            >
                <div>
                    <div className={styles.main_bar_first_modal_content_container_row_1_item}>
                        Create a team
                    </div>
                    <div>
                        <Row>
                            <Col span={12}>
                                <div>
                                    picture
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className={styles.main_bar_first_modal_content}>
                                    <div className={styles.main_bar_first_modal_content_3_item}>
                                        Bring everyone together with one team you can @mention, filter, and assign work to. <NavLink to={'/'}>What’s a team?</NavLink>
                                    </div>
                                    <div className={styles.main_bar_first_modal_content_2_item}>
                                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                                            Team name *
                                        </div>
                                        <div className={styles.main_bar_first_modal_content_2_item_in_2_item}>
                                            <Input onChange={(e) => setTeamName(e.target.value)} placeholder="e.g. HR Team,Redesign Project,Team Mango" />
                                        </div>
                                        <div className={styles.main_bar_first_modal_content_3_item}>
                                            Who can see your team name ? info
                                            <Tooltip placement="top" title={
                                                'Your team name is visible to anyone in your organisation. It may be visible on work shared outside your organisation.'
                                            }>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className={styles.main_bar_first_modal_content_2_item}>
                                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                                            Please choose your team project *
                                        </div>
                                        <div className={styles.main_bar_first_modal_content_3_item}>
                                            {
                                                projectTeamHkArr.length === 0
                                                    ?
                                                    <div>
                                                        Please create a project before creating a team
                                                    </div>
                                                    :
                                                    <Select
                                                        defaultValue="Please choose project"
                                                        style={{ width: 200 }}
                                                        onChange={(value: string) => setteamProjectName(value)}
                                                        options={
                                                            projectTeamHkArr.map((val) => {
                                                                return {
                                                                    value: val.name,
                                                                    label: (
                                                                        <div>
                                                                            {val.name}
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    />

                                            }

                                        </div>
                                    </div>
                                    <div className={styles.main_bar_first_modal_content_2_item}>
                                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                                            <span>NEW</span> Membership controls
                                        </div>
                                        <div >
                                            <Checkbox className={styles.main_bar_first_modal_content_3_item}>
                                                Anyone can join this team without approval
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className={styles.main_bar_first_modal_content_2_item}>
                                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                                            <span>NEW</span> What products do they need access to?
                                        </div>
                                        <div>
                                            <Tooltip placement="top" title={
                                                <div>
                                                    <span>
                                                        Select from this list of Atlassian products used by your organization. The addition of any new licenses may affect billing.
                                                    </span>
                                                    <span>
                                                        If you're not an admin, your product requests will be sent to one for approval.
                                                    </span>
                                                    <span>
                                                        Access to these products will not be automatically granted for future members added to this team.
                                                    </span>
                                                </div>
                                            }>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <Select
                                                className={styles.main_bar_first_modal_content_4_item_slct}
                                                showSearch
                                                placeholder="Select a products"
                                                optionFilterProp="children"
                                                options={[
                                                    {
                                                        value: 'jirasoftware',
                                                        label: 'Jira Software',
                                                    },
                                                    {
                                                        value: 'jiraworkmanagement',
                                                        label: 'Jira Work Management',
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Row className={styles.main_bar_first_modal_content_4_item}>
                                            <Col span={12}>
                                            </Col>
                                            <Col span={12} className={styles.main_bar_first_modal_content_4_item_in_container}>
                                                <Button type='primary' onClick={addProjectForTeamComp} className={styles.main_bar_first_modal_content_4_item_in_container_btn}>Create a team</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Modal>
        </>
    )
}


export default MainBarTeamComp

