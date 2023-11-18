import React, { useState } from 'react'
import styles from './DashboardStyle.module.css'

import { Avatar, Button, Col, Divider, Dropdown, Input, List, Row, Select, Space } from 'antd';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaAddressCard, FaEllipsis } from 'react-icons/fa6';


const DashboardComp: React.FC<OwnProps> = () => {


    const items: MenuProps['items'] = [
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

    // table contennt




    const columns: ColumnsType<DataType> = [
        {
            title: (
                <div className={styles.dashboard_filter_title}>Owner</div>
            ),
            dataIndex: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: (<div className={styles.dashboard_filter_title}>Viewers</div>),
            dataIndex: 'age',
            render: (text: string) => <a>{text}</a>,

        },
        {
            title: (<div className={styles.dashboard_filter_title}>Editors</div>),
            dataIndex: 'address',
            render: (text: string) => <a>{text}</a>,

        },
        {
            title: (<div className={styles.dashboard_filter_title}>Starred by</div>),
            dataIndex: 'lead',
            render: (text: string) => <a>{text}</a>,

        },
        {
            title: '',
            dataIndex: 'drpdwn',
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'Default dashboard',
            age: 4,
            address: 'Private',
            lead: '0 peaople',
            drpdwn: (
                <div>
                    <Dropdown menu={{
                        items: [
                            {
                                label: (
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                        Copy dashboard
                                    </a>
                                ),
                                key: '0',
                            },
                            {
                                label: (
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                        Share dashboard
                                    </a>
                                ),
                                key: '1',
                            },
                        ]
                    }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <FaEllipsis />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            )
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };


    // table content start
    const { Option } = Select;

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return (
        <div className={styles.all_project_content}>
            <div className={styles.dashboard_content}>
                <div className={styles.dashboard_content_1_item}>
                    <Row>
                        <Col span={12} className={styles.project_content_title}>Dashboard</Col>
                        <Col span={12} className={styles.dashboard_cont_col}>
                            <Button type="primary">Create dashboard</Button>
                        </Col>
                    </Row>
                </div>
                <div className={styles.dashboard_content_2_item}>
                    <div className={styles.all_proj_second_item}>
                        <div className={styles.dashboard_filter_content}>
                            <Input suffix={<FaAddressCard />} />
                        </div>
                        <div className={styles.dashboard_filter_content}>
                            <div className={styles.dashboard_filter_title}>
                                Owner
                            </div>
                            <Select
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
                        <div className={styles.dashboard_filter_content}>
                            <div className={styles.dashboard_filter_title}>
                                Project
                            </div>
                            <Select
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
                        <div className={styles.dashboard_filter_content}>
                            <div className={styles.dashboard_filter_title}>
                                Group
                            </div>
                            <Select
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack'
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
                </div>
                <div className={styles.dashboard_content_3_item}>

                    <Divider />

                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default DashboardComp

type OwnProps = {}

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    lead: string;
    drpdwn: any
}