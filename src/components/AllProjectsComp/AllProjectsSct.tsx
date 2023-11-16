import React, { useState, useEffect } from "react";

import styles from './AllProjectStyle.module.css'

import { Button, Select, Space, Col, Input, Row, Dropdown, Modal } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaAddressCard, FaEllipsis, FaSistrix } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { ProjectType, createProjectFunc, setCurrentProject } from "../../redux/projectReducer";
import { AppStateType } from "../../redux/redux-store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { filterProjectsUtFunc } from "../../utils/helperScp";


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

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [projectNameObj, setProjectNameObj] = useState<string>('')
    const [projectKeyObj, setProjectKeyObj] = useState<string>('')



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
                                    name: val.name,
                                    secKey: val.key,
                                    type: val.projectType,
                                    lead: val.lead,
                                    drpdwn: (
                                        <div>
                                            <Dropdown menu={{
                                                items: [
                                                    {
                                                        label: (
                                                            <NavLink onClick={() => dispatch(setCurrentProject(val.id))} to={`/jiraItems/projectSettings/${val.id}`}>
                                                                Project settings
                                                            </NavLink>
                                                        ),
                                                        key: '0',
                                                    },
                                                    {
                                                        label: (
                                                            <NavLink onClick={() => dispatch(setCurrentProject(val.id))} to={`/jiraItems/board/${val.id}`}>
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

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type="text" onChange={(e) => setProjectNameObj(e.target.value)} />
                Write key
                <input type="text" onChange={(e) => setProjectKeyObj(e.target.value)} />
                <input type='submit' />

            </Modal>
        </div>


    )

}

export default AllProjectsComp

type OwnProps = {}

interface DataType {
    key: React.Key;
    name: string;
    secKey: string
    type: string
    lead: string;
    drpdwn: any
}