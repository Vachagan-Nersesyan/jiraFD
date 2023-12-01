import React, { useState } from 'react'

import styles from './ProjectSettingsStl.module.css'
import secStyles from '../../DevelopmentComp/ui/DevelopmentStl.module.css'

import { Breadcrumb, Button, Col, Dropdown, Form, Input, Row, Select, Space } from 'antd'
import type { FormItemProps } from 'antd';
import { FaAffiliatetheme, FaEllipsis } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { OwnProps, ProjectSettingsFstObjType } from './ProjectSettingsTs.interface';
import { useSelector } from 'react-redux';
import { AppStateType, useAppDispatch } from 'entities/store/redux-store';
import { NavLink } from 'react-router-dom';
import { changeProjectInfoFunc, fetchProjects } from 'entities/project/projectReducerThunks';

const ProjectSettingsComp: React.FC<OwnProps> = (props) => {

    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()

    const projectPictureSttngCompNum = useSelector((state: AppStateType) => state.project.currentProjectNumber)
    const projectPictureSttngComp = useSelector((state: AppStateType) => state.project.projectArr)


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


    const [projectName, setProjectName] = useState<string>('')
    const [projectKey, setProjectKey] = useState<string>('')

    const [projectLead, setProjectLead] = useState<string>('')
    const [зrojectAssignee, setProjectAssignee] = useState<string>('')


    const setNewSettingsProject: () => void = async () => {
        let projectSettingsFstObj: ProjectSettingsFstObjType = {
            name: '',
            key: '',
            lead: '',
            defaultAssignee: '',
        }

        projectSettingsFstObj.name = projectName
        projectSettingsFstObj.key = projectKey
        projectSettingsFstObj.lead = projectLead
        projectSettingsFstObj.defaultAssignee = зrojectAssignee

        await aDispatch(changeProjectInfoFunc(projectSettingsFstObj))
        await aDispatch(fetchProjects())
    }


    return (
        <div className={styles.development_page_content_overlay}>
            <div className={secStyles.development_page_content_in_1_sect}>
                <Breadcrumb
                    items={[
                        {
                            title: <NavLink to={'/jiraItems/allProjects'}>Home</NavLink>,
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

                <div className={styles.development_page_content_form_content_change_icon}>
                    <img src={projectPictureSttngComp[projectPictureSttngCompNum].picture} />
                </div>
                <div className={styles.development_page_content_form_content_1_item}>
                    <div className={styles.development_page_content_form_content_1_item_1_item}>
                        <input placeholder='Please write project name' onChange={(e) => setProjectName(e.target.value)} />
                    </div>
                    <div className={styles.development_page_content_form_content_1_item_2_item}>
                        <input placeholder='Please write project key' onChange={(e) => setProjectKey(e.target.value)} />
                    </div>
                </div>

                <div className={styles.development_page_content_form_content_2_item}>
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        className={styles.development_page_content_form_content_2_item_1_item}
                        onChange={(value: string) => setProjectLead(value)}
                        options={[
                            {
                                value: 'Vachagan',
                                label: 'Vachagan',
                            }
                        ]}
                    />
                    <div className={styles.development_page_content_form_content_2_item_1_item_txt}>
                        Make sure your project lead has access to issues in the project.
                    </div>
                </div>
                <div className={styles.development_page_content_form_content_2_item}>
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        className={styles.development_page_content_form_content_2_item_1_item}
                        onChange={(value: string) => setProjectAssignee(value)}

                        options={[
                            {
                                value: 'Project Lead',
                                label: 'Project Lead',
                            },
                            {
                                value: 'Unassigned',
                                label: 'Unassigned',
                            }
                        ]}
                    />
                </div>
                <div>
                    <Button type="primary" htmlType="submit" onClick={setNewSettingsProject}>
                        Save
                    </Button>
                </div>

            </div>

        </div >
    )
}

export default ProjectSettingsComp
