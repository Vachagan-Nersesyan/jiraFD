import React, { useState } from "react";

import styles from './AllProjectStyle.module.css'

import { Button, Select, Space, Col, Input, Row, Dropdown } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FaAddressCard, FaEllipsis, FaSistrix } from "react-icons/fa6";


const AllProjectsComp: React.FC<OwnProps> = () => {

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
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: (<div >Name</div>),
            dataIndex: 'age',
        },
        {
            title: (<div >Address</div>),
            dataIndex: 'address',
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
    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            lead: 'adsfasdfasd',
            drpdwn: (
                <div>
                    <Dropdown menu={{
                        items: [
                            {
                                label: (
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                        Project settings
                                    </a>
                                ),
                                key: '0',
                            },
                            {
                                label: (
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                        Move to trash
                                    </a>
                                ),
                                key: '1',
                            },
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

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return (
        <div className={styles.all_project_content}>
            <div className={styles.all_proj_first_item}>
                <Row>
                    <Col span={12} className={styles.project_content_title}>Projects</Col>
                    <Col span={12} className={styles.all_proj_cont_col}>
                        <Button type="primary">Create project</Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.all_proj_second_item}>
                <div className={styles.all_proj_second_item}>
                    <Input suffix={<FaSistrix />} />
                </div>
                <div>
                    <Select
                        mode="multiple"
                        placeholder="select one country"
                        defaultValue={['china']}
                        onChange={handleChange}
                        optionLabelProp="label"
                    >
                        <Option value="china" label="China">
                            <Space>
                                <span role="img" aria-label="China">
                                    🇨🇳
                                </span>
                                China (中国)
                            </Space>
                        </Option>
                        <Option value="usa" label="USA">
                            <Space>
                                <span role="img" aria-label="USA">
                                    🇺🇸
                                </span>
                                USA (美国)
                            </Space>
                        </Option>
                        <Option value="japan" label="Japan">
                            <Space>
                                <span role="img" aria-label="Japan">
                                    🇯🇵
                                </span>
                                Japan (日本)
                            </Space>
                        </Option>
                        <Option value="korea" label="Korea">
                            <Space>
                                <span role="img" aria-label="Korea">
                                    🇰🇷
                                </span>
                                Korea (韩国)
                            </Space>
                        </Option>
                    </Select>
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
                    dataSource={data}
                />

            </div>
        </div>
    )

}

export default AllProjectsComp

type OwnProps = {}

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    lead: string;
    drpdwn: any
}