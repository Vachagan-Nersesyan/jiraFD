import React from 'react'

import styles from './ProjectSettingsStl.module.css'
import secStyles from '../DevelopmentComp/DevelopmentStl.module.css'

import { Breadcrumb, Button, Col, Dropdown, Form, Input, Row, Select, Space } from 'antd'
import type { FormItemProps } from 'antd';
import { FaAffiliatetheme, FaEllipsis } from 'react-icons/fa6';

const ProjectSettingsComp: React.FC<OwnProps> = (prosp) => {

    const MyFormItemContext = React.createContext<(string | number)[]>([]);

    interface MyFormItemGroupProps {
        prefix: string | number | (string | number)[];
        children: React.ReactNode;
    }

    function toArr(str: string | number | (string | number)[]): (string | number)[] {
        return Array.isArray(str) ? str : [str];
    }

    const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

        return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
    };

    const MyFormItem = ({ name, ...props }: FormItemProps) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

        return <Form.Item name={concatName} {...props} />;
    };

    return (
        <div className={secStyles.development_page_content_overlay}>
            <div className={secStyles.development_page_content_in_1_sect}>
                <Breadcrumb
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">Application Center</a>,
                        },
                        {
                            title: <a href="">Application List</a>,
                        },
                        {
                            title: 'An Application',
                        },
                    ]}
                />
            </div>
            <div className={secStyles.development_page_content_in_2_sect}>
                <Row>
                    <Col span={12} className={secStyles.development_page_content_in_2_sect_title}>
                        Details
                    </Col>
                    <Col span={12} className={secStyles.development_page_content_in_2_sect_sec_col_content}>
                        <Button>
                            <Dropdown menu={{
                                items: [
                                    {
                                        label: <a href="https://www.antgroup.com">Move to trash</a>,
                                        key: '0',
                                    },
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <FaEllipsis />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.development_page_content_form_content}>
                <Form name="form_item_path" layout="vertical" >
                    <MyFormItemGroup prefix={['user']}>
                        <div className={styles.development_page_content_form_content_change_icon}>
                            <div className={styles.development_page_content_form_content_change_icon}>
                                {/* <img src=''> */}
                                <FaAffiliatetheme />
                            </div>
                            <div className={styles.development_page_content_form_content_change_icon}>
                                <Button>
                                    Change icon
                                </Button>
                            </div>
                        </div>
                        <MyFormItemGroup prefix={['name']}>
                            <MyFormItem name="firstName" label="Name">
                                <Input />
                            </MyFormItem>
                            <MyFormItem name="lastName" label="Key">
                                <Input />
                            </MyFormItem>
                        </MyFormItemGroup>
                        <MyFormItem name="firstName" label="Category">
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
                        </MyFormItem>
                        <MyFormItem name="firstName" label="Project lead">
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
                            <div>
                                Make sure your project lead has access to issues in the project.
                            </div>
                        </MyFormItem>
                        <MyFormItem name="firstName" label="Default assignee ">
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
                        </MyFormItem>


                    </MyFormItemGroup>

                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ProjectSettingsComp

type OwnProps = {}