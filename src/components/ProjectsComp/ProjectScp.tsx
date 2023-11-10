import React from "react";

import styles from './ProjectsStl.module.css'

import { Avatar, Col, List, Result, Row } from 'antd';

import { Tabs, Dropdown, Space, Button } from 'antd';

import type { TabsProps } from 'antd';
import { NavLink } from "react-router-dom";
import { FaAlignCenter } from "react-icons/fa6";


const ProjectsComp: React.FC<OwnProps> = () => {

    const projInfoArr = [
        {
            id: 0,
            title: 'My Kanban Project',
            subtitle: 'Team-managed software',
            openIs: 0,
            doneIs: 0,
            pic: '',
            boardName: ['Kanb']
        },
        {
            id: 1,
            title: 'My Project 2',
            subtitle: 'Team-managed software',
            openIs: 0,
            doneIs: 0,
            pic: '',
            boardName: ['P2 board']

        },
    ]

    const projectWorkedItmArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
        {
            id: 2,
            title: 'epic',
            subtitle: 'P2 - 4 . Project 1'
        },
    ]

    const projectWorkedItmLstWkArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
    ]

    const projectWorkedTdItmArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
        {
            id: 2,
            title: 'epic',
            subtitle: 'P2 - 4 . Project 1'
        },
    ]

    const projectWorkedYstdItmLstWkArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        },
        {
            id: 1,
            title: 'task 1',
            subtitle: 'P2 - 5 . Project 1'
        },
    ]

    const projectWorkedInPrgItmArr = [
        {
            id: 0,
            title: 'bag 1',
            subtitle: 'P2 - 5 . Project 2'
        }
    ]

    const starredData = [
        {
            id: 1,
            title: 'Project',
            link: ''
        },
        {
            id: 2,
            title: 'Board',
            link: ''
        },
        {
            id: 3,
            title: 'Filter',
            link: ''
        },
        {
            id: 4,
            title: 'Dashboard',
            link: ''
        },
        {
            id: 5,
            title: 'Plan',
            link: ''
        }
    ]



    const onChange = (key: string) => {
        console.log(key);
    };


    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Worked on',
            children: (
                <div>
                    <div className={styles.project_tab_content_title}>
                        IN THE LAST WEEK
                    </div>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={projectWorkedItmArr}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className={styles.project_tab_content_title}>
                        IN THE LAST MONTH
                    </div>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={projectWorkedItmLstWkArr}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Viewed',
            children: (
                <div>
                    <div className={styles.project_tab_content_title}>
                        TODAY
                    </div>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={projectWorkedTdItmArr}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className={styles.project_tab_content_title}>
                        YESTERDAY
                    </div>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={projectWorkedYstdItmLstWkArr}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div>
                    Assigned to me <span>0</span>
                </div>
            ),
            children: (
                <div>
                    <div className={styles.project_tab_content_title}>
                        IN PROGRESS
                    </div>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={projectWorkedInPrgItmArr}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            key: '4',
            label: 'Starred',
            children: (
                <div>
                    <Result
                        status="success"
                        title="Successfully Purchased Cloud Server ECS!"
                        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                        extra={
                            starredData.map((val) => {
                                return (
                                    <NavLink to={`/${val.link}`}>
                                        <Button type="primary" key="console" className={styles.project_tab_last_item}>
                                            {val.title}
                                        </Button>
                                    </NavLink>
                                )
                            })
                        }
                    />
                </div>
            )
        }
    ];



    return (
        <div className={styles.project_content_container}>
            <div className={styles.project_content_title}>
                Your work
            </div>
            <div className={styles.project_content_sec_item}>
                <Row>
                    <Col span={12} className={styles.project_content_sec_item}>
                        Recent projects
                    </Col>
                    <Col className={styles.sect_item} span={12}>
                        <NavLink to={'/'}>
                            View all projects
                        </NavLink>
                    </Col>
                </Row>
            </div>
            <div className={styles.project_content_third_item}>
                {
                    projInfoArr.map((item) => {
                        return (
                            <div className={styles.project_content_third_item_content_in_txt_content}>
                                <div className={styles.project_content_third_item_content_in_txt_content_1_item}>
                                    <FaAlignCenter />
                                </div>
                                <div className={styles.project_content_third_item_content_in_txt_content_2_item}>
                                    <div className={styles.project_content_third_item_content_in_txt_content_2_item_1_item}>
                                        {item.subtitle}
                                    </div>
                                    <div className={styles.project_content_third_item_content_in_txt_content_2_item_2_item}>
                                        QUICK LINKS
                                    </div>
                                    <div className={styles.project_content_third_item_content_in_txt_content_2_item_3_item}>
                                        <Row>
                                            <Col span={16} className={styles.project_content_third_item_content_in_txt_content_2_item_2_item}>
                                                My open issues
                                            </Col>
                                            <Col span={8}>
                                                {item.openIs}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col span={16} className={styles.project_content_third_item_content_in_txt_content_2_item_2_item}>
                                                Done issues
                                            </Col>
                                            <Col span={8}>
                                                {item.doneIs}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <Dropdown menu={{
                                            items: [
                                                {
                                                    label: (
                                                        item.boardName.map((val) => {
                                                            return (
                                                                <div>
                                                                    {val}
                                                                </div>
                                                            )
                                                        })
                                                    ),
                                                    key: '1'
                                                },
                                            ]
                                        }} trigger={['click']}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space className={styles.project_content_third_item_content_in_txt_content_2_item_2_item}>
                                                    1 board
                                                </Space>
                                            </a>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
            </div>
        </div>
    )
}


export default ProjectsComp

type OwnProps = {}