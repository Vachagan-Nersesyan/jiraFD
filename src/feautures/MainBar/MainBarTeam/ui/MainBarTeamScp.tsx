import React, { useState } from 'react'
import styles from './MainBarTeamStl.module.css'
import { Button, Checkbox, Col, Dropdown, Input, MenuProps, Modal, Row, Select, Space, Tooltip } from 'antd'
import { FaAngleDown, FaJs, FaPlus, FaUserGroup } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const MainBarTeamComp: React.FC<OwnProps> = () => {
    const [teamIsModalOpen, setTeamIsModalOpen] = useState([false, false]);
    const [teamIsSecModalOpen, setTeamSecIsModalOpen] = useState([false, false]);



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
                <div className={styles.menu_work_content_1_item}>
                    <div onClick={() => teamToggleModal(0, true)} className={styles.menu_work_content_1_item_2_itm}>

                        <NavLink to={'/'}>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                <FaPlus />
                            </div>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                Invite people to Jira
                            </div>
                        </NavLink>

                    </div>
                    <div onClick={() => teamSecToggleModal(0, true)} className={styles.menu_work_content_1_item_2_itm}>

                        <NavLink to={'/'}>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm}>
                                <FaUserGroup />
                            </div>
                            <div className={styles.menu_work_content_1_item_2_itm_in_1_itm_1_itm}>
                                Create a team
                            </div>
                        </NavLink>

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
                    <NavLink to={'/jiraItems/searchPeople'}>
                        Search people and teams
                    </NavLink>
                </div>
            ),
            key: '2',
        }
    ]


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
                            <Input placeholder="Basic usage" />
                        </div>
                    </div>
                    <div className={styles.main_bar_first_modal_content_2_item}>
                        <div className={styles.main_bar_first_modal_content_2_item_in_1_item}>
                            or add from
                        </div>
                        <div className={styles.main_bar_first_modal_content_2_item_in_2_item}>
                            <Button type="primary">Primary Button</Button>
                            <Button>Default Button</Button>
                            <Button type="dashed">Dashed Button</Button>
                        </div>
                    </div>
                    <div className={styles.main_bar_first_modal_content_3_item}>
                        This site is protected by reCAPTCHA and the Google <NavLink to={'/'}>Privacy Policy</NavLink> and <NavLink to={'/'}>Terms of Service</NavLink> apply.
                    </div>
                    <div className={styles.main_bar_first_modal_content_4_item}>
                        <Row >
                            <Col span={12}>
                            </Col>
                            <Col span={12} className={styles.main_bar_first_modal_content_4_item_in_container}>
                                <Button type="primary">Primary Button</Button>
                                <Button>Default Button</Button>
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
                                            <Input placeholder="e.g. HR Team,Redesign Project,Team Mango" />
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
                                            Invite people to your team *
                                        </div>
                                        <div className={styles.main_bar_first_modal_content_2_item_in_2_item}>
                                            <Input placeholder="Choose people" />
                                        </div>
                                        <div className={styles.main_bar_first_modal_content_3_item}>
                                            You can invite up to 50 people at once
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
                                                <Button type="primary">Primary Button</Button>
                                                <Button>Default Button</Button>
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