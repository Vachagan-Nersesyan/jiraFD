import React, { Fragment, useState } from 'react'

import IssuesComp from '../IssuesComp'
import TimelineComp from '../TimelineComp'
import BoardComp from '../BoardComp'
import BackblogComp from '../BackblogComp'
import DevelopmentComp from '../DevelopmentComp'
import ProjectPageComp from '../ProjectPageComp'
import ProjectSettingsComp from '../ProjectSettingsComp'



import styles from './LayoutUnivStl.module.css'

import { Layout, Menu, Button, theme, Modal, List, Avatar, Form, Input } from 'antd';
import { NavLink, Route, Routes as Switch, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { FaAffiliatetheme, FaAirbnb, FaAlgolia, FaAlignLeft, FaAlipay, FaAmazonPay, FaAnchor, FaAngleLeft, FaAngleRight, FaBarsStaggered, FaChartBar, FaClipboard, FaCode, FaList } from 'react-icons/fa6';

import firstPic from './1.svg'
import secondPic from './2.svg'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'


const { Header, Sider, Content } = Layout;


const LayoutUnivComp: React.FC<OwnProps> = () => {

    const currentProjectNumberComp = useSelector((state: AppStateType) => state.project.currentProjectNumber)

    // console.log(currentProjectNumberComp,'currentProjectNumberComp')


    const [btnOnCollapsed, setBtnOnCollapsed] = useState(true)


    let location = useLocation();
    // console.log(location, 'path,url')


    const [collapsed, setCollapsed] = useState(true);
    const [st, setst] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    type MenuItem = Required<MenuProps>['items'][number];


    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // shortcut modal

    const [isShortcutModalItmOpen, setIsShortcutModalOpen] = useState(false);

    const isShortcutModalOpen = () => {
        setIsShortcutModalOpen(true);
    };

    const handleShortcutOk = () => {
        setIsShortcutModalOpen(false);
    };

    const handleShortcutCancel = () => {
        setIsShortcutModalOpen(false);
    };

    // repository modal

    const [isRepositoryModalItmOpen, setIsRepositoryModalOpen] = useState(false);

    const isRepositoryModalOpen = () => {
        setIsRepositoryModalOpen(true);
    };

    const handleRepositoryOk = () => {
        setIsRepositoryModalOpen(false);
    };

    const handleRepositoryCancel = () => {
        setIsRepositoryModalOpen(false);
    };


    return (
        <div className={styles.layout_content}>
            <Layout>
                <div className={styles.filter_content_overl}>
                    <Sider
                        width={300}
                        className={styles.layout_univ_siders}

                        onMouseOver={() => {

                            if (!st && collapsed) {

                                // console.log(collapsed)
                                setst(true)
                                setCollapsed(false)
                                setBtnOnCollapsed(false)


                            }

                        }
                        }

                        onMouseLeave={() => {
                            if (st && !collapsed) {

                                // console.log(collapsed)
                                setst(false)
                                setCollapsed(true)
                                setBtnOnCollapsed(true)


                            }


                        }
                        }


                        style={st ? { height: '100%', position: 'absolute', zIndex: '2' } : { height: '100%', zIndex: '2' }}

                        collapsedWidth="10"
                        trigger={null}
                        collapsed={collapsed}>


                        <div className={styles.filter_content}>
                            <div className={styles.side_bar_layout_itm}>
                                <div className={styles.side_bar_layout_itm_logo}>
                                    <FaAlgolia />
                                </div>
                                <div>
                                    <div className={styles.side_bar_layout_itm_1_item}>
                                        My Kanban Project
                                    </div>
                                    <div className={styles.side_bar_layout_itm_2_item}>
                                        Software project
                                    </div>
                                </div>
                            </div>
                            <div className={styles.side_bar_layout_itm_sec}>
                                <div className={styles.side_bar_layout_itm_sec_1_item}>
                                    Youre on the Free plan
                                </div>
                                <div className={styles.side_bar_layout_itm_sec_2_item}>
                                    <NavLink to={'/'}>
                                        UPGRADE
                                    </NavLink>
                                </div>
                            </div>
                            <div className={styles.side_bar_layout_itm}>
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    items={
                                        [
                                            getItem(
                                                (
                                                    <div className={styles.layout_sider_inner_menu_title}>
                                                        PLANNING
                                                    </div>
                                                )
                                                , 'sub1', '', [
                                                getItem((
                                                    <NavLink to={`/jiraItems/timeline/${currentProjectNumberComp}`}>

                                                        <div className={styles.layout_sider_inner_menu_content}>
                                                            <div className={styles.layout_sider_inner_menu_content_1_item}>
                                                                <FaBarsStaggered />
                                                            </div>
                                                            <div className={styles.layout_sider_inner_menu_content_2_item}>
                                                                Timeline
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                ), '1'),
                                                getItem((
                                                    <NavLink to={`/jiraItems/backblog/${currentProjectNumberComp}`}>
                                                        <div className={styles.layout_sider_inner_menu_content}>
                                                            <div className={styles.layout_sider_inner_menu_content_1_item}>
                                                                <FaChartBar />
                                                            </div>
                                                            <div className={styles.layout_sider_inner_menu_content_2_item}>
                                                                Backlog
                                                            </div>
                                                        </div>
                                                    </NavLink>

                                                ), '2'),
                                                getItem((
                                                    <NavLink to={`/jiraItems/board/${currentProjectNumberComp}`}>

                                                        <div className={styles.layout_sider_inner_menu_content}>
                                                            <div className={styles.layout_sider_inner_menu_content_1_item}>
                                                                <FaClipboard />
                                                            </div>
                                                            <div className={styles.layout_sider_inner_menu_content_2_item}>
                                                                Board
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                ), '3'),
                                            ]),

                                            getItem(
                                                (
                                                    <div className={styles.layout_sider_inner_menu_title}>
                                                        DEVELOPMENT
                                                    </div>
                                                ), 'sub2', '', [
                                                getItem((
                                                    <NavLink to={`/jiraItems/development/${currentProjectNumberComp}`}>

                                                        <div className={styles.layout_sider_inner_menu_content}>
                                                            <div className={styles.layout_sider_inner_menu_content_1_item}>
                                                                <FaCode />
                                                            </div>
                                                            <div className={styles.layout_sider_inner_menu_content_2_item}>
                                                                Code
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                ), '4')
                                            ]),

                                            { type: 'divider' },

                                        ]

                                    }
                                />
                            </div>
                            <div className={styles.side_bar_layout_itm_oth}>
                                <div className={styles.side_bar_layout_other_item}>
                                    <NavLink to={`/jiraItems/projectPage/${currentProjectNumberComp}`}>
                                        <FaAffiliatetheme /> Project pages
                                    </NavLink>
                                </div>
                            </div>
                            <div className={styles.side_bar_layout_itm_oth}>
                                <div className={styles.side_bar_layout_other_item}>
                                    <div onClick={showModal} className={styles.side_bar_layout_other_item}>
                                        <FaAnchor /> Add shortcut
                                    </div>
                                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                        <div>
                                            <div className={styles.layout_first_modal}>
                                                Add an item to this project
                                            </div>
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={[
                                                    {
                                                        id: 0,
                                                        title: 'Ant Design Title 1',
                                                        pic: firstPic,
                                                    },
                                                    {
                                                        id: 1,
                                                        title: 'Ant Design Title 2',
                                                        pic: secondPic,

                                                    }
                                                ]}
                                                renderItem={(item, index) => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            avatar={<Avatar src={item.pic} />}
                                                            title={<a href="https://ant.design">{item.title}</a>}
                                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                        />

                                                        <div
                                                            className={styles.side_bar_layout_itm_oth_f_modal_btn}
                                                            onClick={
                                                                item.id === 0 ? isShortcutModalOpen : isRepositoryModalOpen
                                                            }>Add</div>
                                                    </List.Item>
                                                )}
                                            />
                                        </div>
                                    </Modal>
                                    <Modal title="Basic Modal" open={isShortcutModalItmOpen} onOk={handleShortcutOk} onCancel={handleShortcutCancel} >
                                        <div className={styles.layout_first_modal}>
                                            Add shortcut
                                        </div>

                                        <Form name="validateOnly" layout="vertical" autoComplete="off">
                                            <Form.Item name="name" label={
                                                <div className={styles.layout_first_modal_inp_txt}>
                                                    Web address *
                                                </div>
                                            } rules={[{ required: true }]}>
                                                <Input />
                                            </Form.Item>
                                            <Form.Item name="age" label={
                                                <div className={styles.layout_first_modal_inp_txt}>
                                                    Name *
                                                </div>
                                            } rules={[{ required: true }]}>
                                                <Input />
                                            </Form.Item>
                                        </Form>
                                        <div>
                                            😎Pro tip: Start your shortcut’s name with an emoji to customize its icon.
                                        </div>

                                    </Modal>
                                    <Modal title="Basic Modal" open={isRepositoryModalItmOpen} onOk={handleRepositoryOk} onCancel={handleRepositoryCancel} >
                                        <div className={styles.layout_first_modal}>
                                            Connect a repository
                                        </div>
                                        <div className={styles.layout_first_modal_third_mdl_item}>
                                            Linking a repository will show information about your branches, commits and pull requests in Jira issues.
                                        </div>
                                        <div className={styles.layout_first_modal_third_mdl_item}>
                                            Required fields are marked with an asterisk
                                        </div>

                                        <Form name="validateOnly" layout="vertical" autoComplete="off">
                                            <Form.Item name="name" label={
                                                <div className={styles.layout_first_modal_inp_txt}>
                                                    Web address *
                                                </div>
                                            } rules={[{ required: true }]}>
                                                <Input />
                                            </Form.Item>
                                            <div className={styles.layout_first_modal_inp_txt_label_item}>
                                                Eg. https://bitbucket.org/org/projectrepository
                                            </div>
                                            <Form.Item name="age" label={
                                                <div className={styles.layout_first_modal_inp_txt}>
                                                    Web address *
                                                </div>
                                            } rules={[{ required: true }]}>
                                                <Input />
                                            </Form.Item>
                                            <div className={styles.layout_first_modal_inp_txt_label_item}>
                                                Eg. Project repository
                                            </div>
                                        </Form>
                                    </Modal>
                                </div>
                            </div>
                            <div className={styles.side_bar_layout_itm_oth}>
                                <div className={styles.side_bar_layout_other_item}>
                                    <NavLink to={`/jiraItems/projectSettings/${currentProjectNumberComp}`}>
                                        <FaAmazonPay /> Project settings
                                    </NavLink>
                                </div>
                            </div>
                            <div className={styles.side_bar_layout_itm_oth_last}>
                                <div className={styles.side_bar_layout_itm_oth_last_1_item}>
                                    You're in a team-managed project
                                </div>
                                <div className={styles.side_bar_layout_itm_oth_last_2_item}>
                                    <NavLink to={'/'}>
                                        Learn more
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </Sider>
                    {
                        btnOnCollapsed ?
                            <div className={styles.filter_sider_button_ovrl}>
                                <Button
                                    type="text"
                                    icon={collapsed ? <FaAngleRight /> : <FaAngleLeft />}
                                    onClick={() => {
                                        setCollapsed(!collapsed)
                                    }}
                                    className={styles.filter_sider_button}
                                />
                            </div>
                            : null
                    }
                </div>

                <Layout>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {
                            location.pathname.includes('/jiraItems/issues/') ?
                                <IssuesComp />
                                :
                                location.pathname.includes('/jiraItems/timeline/')
                                    ?
                                    <TimelineComp />
                                    :
                                    location.pathname.includes('/jiraItems/backblog/')
                                        ?
                                        <BackblogComp />
                                        :
                                        location.pathname.includes('/jiraItems/development/')
                                            ?
                                            <DevelopmentComp />
                                            :
                                            location.pathname.includes('/jiraItems/projectPage/')
                                                ?
                                                <ProjectPageComp />
                                                :
                                                location.pathname.includes('/jiraItems/projectSettings/')
                                                    ?
                                                    <ProjectSettingsComp />
                                                    :
                                                    location.pathname.includes('/jiraItems/board/')
                                                        ?
                                                        <BoardComp />
                                                        :
                                                        <div>
                                                            ddd
                                                        </div>
                        }

                    </Content>
                </Layout>

            </Layout>
        </div>

    )
}


export default LayoutUnivComp

type OwnProps = {}