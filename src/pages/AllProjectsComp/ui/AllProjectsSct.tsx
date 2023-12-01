import React, { useState, useEffect } from "react";

import styles from './AllProjectStyle.module.css'

import { Button, Select, Space, Col, Input, Row, Dropdown, Modal } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaAddressCard, FaEllipsis, FaJira, FaSistrix } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { ProjectType } from "entities/project/projectReducerTs.interface";
import { AppStateType, useAppDispatch } from "entities/store/redux-store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { filterProjectsUtFunc } from "widgets/helpers/helperScp";
import { DataType, OwnProps } from "./AllProjectTs.interface";

import firstpic from '../images/1.svg'
import secondpic from '../images/2.svg'
import { createProjectFunc, fetchProjects, setCurrentProject } from "entities/project/projectReducerThunks";


const AllProjectsComp: React.FC<OwnProps> = () => {

    const projectArr = useSelector((state: AppStateType) => state.project.projectArr)


    const menuitems: MenuProps['items'] = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    // table start
    const { Option } = Select;

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: (
                <div >Name</div>
            ),
            dataIndex: 'name',
            // render: (text: string) => <a>{text}</a>,
        },
        {
            title: (<div >Key</div>),
            dataIndex: 'key',
        },
        {
            title: (<div >Type</div>),
            dataIndex: 'type',
        },
        {
            title: (<div >Lead</div>),
            dataIndex: 'lead',
        },
        {
            title: '',
            dataIndex: 'drpdwn',
        },
    ];




    // modal part


    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [projectNameObj, setProjectNameObj] = useState<string>('')
    const [projectKeyObj, setProjectKeyObj] = useState<string>('')



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


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');


    const [activeProjects, setActiveProjects] = useState<Array<ProjectType>>(projectArr)

    useEffect(() => {
        setActiveProjects(projectArr)
    }, [projectArr])

    const filterChangeProjectsCompFunc: (str: string) => void = (str: string) => {
        setActiveProjects(filterProjectsUtFunc(str, projectArr))
    }

    return (
        <div className={styles.all_project_content}>
            <div className={styles.all_proj_first_item}>
                <Row>
                    <Col span={12} className={styles.project_content_title}>Projects</Col>
                    <Col span={12} className={styles.all_proj_cont_col}>
                        <Button type="primary" onClick={showModal}>Create project</Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.all_proj_second_item}>
                <div className={styles.all_proj_second_item}>
                    <Input onChange={(e) => filterChangeProjectsCompFunc(e.target.value)} suffix={<FaSistrix />} />
                </div>
            </div>
            <div className={styles.all_proj_third_item}>

                <Divider />

                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={
                        activeProjects.map((val) => {
                            return (
                                {
                                    key: '1',
                                    name: (
                                        <div className={styles.all_proj_third_item_intb_item}>
                                            <div className={styles.all_proj_third_item_intb_item_1_item}>
                                                <img src={val.picture} />
                                            </div>
                                            <div className={styles.all_proj_third_item_intb_item_2_item}>
                                                {val.name}
                                            </div>
                                        </div>
                                    ),
                                    secKey: val.key,
                                    type: val.projectType,
                                    lead: val.lead,
                                    drpdwn: (
                                        <div>
                                            <Dropdown menu={{
                                                items: [
                                                    {
                                                        label: (
                                                            <NavLink onClick={async () => {
                                                                await aDispatch(setCurrentProject({ num: val.id }))
                                                                await aDispatch(fetchProjects())

                                                            }} to={`/jiraItems/projectSettings/${val.id}`}>
                                                                Project settings
                                                            </NavLink>
                                                        ),
                                                        key: '0',
                                                    },
                                                    {
                                                        label: (
                                                            <NavLink onClick={async () => {
                                                                await aDispatch(setCurrentProject({ num: val.id }))
                                                                await aDispatch(fetchProjects())
                                                            }}

                                                                to={`/jiraItems/board/${val.id}`}>
                                                                Go to project
                                                            </NavLink>
                                                        ),
                                                        key: '1',
                                                    }
                                                ]
                                            }}>
                                                <a onClick={(e) => e.preventDefault()}>
                                                    <Space className={styles.all_proj_drpds_itm}>
                                                        <FaEllipsis />
                                                    </Space>
                                                </a>
                                            </Dropdown>
                                        </div>
                                    )
                                }
                            )
                        })
                    }
                />

            </div>



            {/* refactoring modal with main bar project --->same code */}

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
        </div>


    )

}

export default AllProjectsComp

