import React, { useEffect, useState } from 'react'
import styles from './MainBarTeamStl.module.css'
import { Button, Checkbox, Col, Dropdown, Input, MenuProps, Modal, Row, Select, Space, Tooltip } from 'antd'
import { FaAngleDown, FaJs, FaPlus, FaUserGroup } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../../entities/store/redux-store'
import { DeveloperInfoType, ProjectType, TeamType, addDeveloperFunc, chooseProjectForTeamFunc } from '../../../../entities/project/projectReducer'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

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


        let developerObj: DeveloperInfoType = {
            uniqId: uuidv4(),
            id: 9999,
            name: peopleName,
            teamName: developerTeam,

            // change developers picture 
            picture: ''

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
                    <div>
                        TEAMS
                    </div>
                    <div>

                        {
                            projectPeopleTeamHkArr.length === 0
                                ?
                                <div>
                                    There isnt any team
                                </div>
                                :
                                <div>
                                    {
                                        projectPeopleTeamHkArr.map((val) => {
                                            return (
                                                <div>
                                                    <NavLink to={`/jiraItems/team/${val.id}`}>
                                                        {val.teamName}
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

                        <div>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                <FaPlus />
                            </div>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                Invite people to Jira
                            </div>
                        </div>

                    </div>
                    <div onClick={() => teamSecToggleModal(0, true)} className={styles.menu_work_content_1_item_2_itm}>

                        <div>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                <FaUserGroup />
                            </div>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                Create a team
                            </div>
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
                title="Basic Modal"
                open={teamIsModalOpen[0]}
                onOk={() => teamToggleModal(0, false)}
                onCancel={() => teamToggleModal(0, false)}
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
                                                    <NavLink to={'/'}>
                                                        <FaAngleDown /> User management
                                                    </NavLink>
                                                </div>
                                            ),
                                            key: '1',
                                        },
                                        {
                                            label: (
                                                <div>
                                                    <NavLink to={'/'}>
                                                        <FaAngleDown /> Site access settings
                                                    </NavLink>
                                                </div>
                                            ),
                                            key: '2',
                                        },
                                    ]
                                }} trigger={['click']}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            ...
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
                            <Input onChange={(e) => changePeopleName(e.target.value)} placeholder="Basic usage" />
                        </div>
                    </div>
                    <div className={styles.main_bar_first_modal_content_2_item}>
                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                            or add from
                        </div>
                        <div className={styles.main_bar_first_modal_content_2_item_in_2_item}>
                            <Button type="primary">Google</Button>
                            <Button>Slack</Button>
                            <Button type="dashed">Microsoft</Button>
                        </div>
                    </div>
                    <div>
                        {
                            projectPeopleTeamHkArr.length === 0
                                ?
                                <div>
                                    Sorry there isn't active teams to add developer
                                </div>
                                :
                                <Select
                                    defaultValue="lucy"
                                    style={{ width: 120 }}
                                    onChange={(value: string) => setDeveloperTeam(value)}
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
                                <Button onClick={addPeopleCompFunc} type="primary">Add</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Modal>


            <Modal
                className={styles.main_bar_sec_team_modal}
                title="Basic Modal"
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
                                                        defaultValue="lucy"
                                                        style={{ width: 120 }}
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
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                                options={[
                                                    {
                                                        value: 'jack',
                                                        label: 'Jack',
                                                    },
                                                    {
                                                        value: 'lucy',
                                                        label: 'Lucy',
                                                    },
                                                    {
                                                        value: 'tom',
                                                        label: 'Tom',
                                                    },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Row className={styles.main_bar_first_modal_content_4_item}>
                                            <Col span={12}>
                                            </Col>
                                            <Col span={12} className={styles.main_bar_first_modal_content_4_item_in_container}>
                                                <Button>Cancel</Button>
                                                <Button type='primary' onClick={addProjectForTeamComp}>Create a team</Button>
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

type OwnProps = {}