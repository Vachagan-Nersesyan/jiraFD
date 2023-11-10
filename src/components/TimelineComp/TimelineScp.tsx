import React, { useState } from 'react'
import styles from './TimelineStl.module.css'
import { Breadcrumb, Button, Checkbox, Col, Dropdown, Input, Modal, Row, Select, Space } from 'antd'
import { NavLink } from 'react-router-dom';
import { FaEllipsis, FaFileExport, FaMicrophone, FaShareNodes, FaUser, FaUserPlus, FaXmark } from 'react-icons/fa6';

const TimelineComp: React.FC<OwnProps> = () => {

    const { Option } = Select;

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

    return (
        <div className={styles.timeline_content}>
            <div className={styles.timeline_content_in_title}>
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
            <div className={styles.timeline_content_in_sec_section}>
                <Row>
                    <Col span={8} className={styles.timeline_content_in_sec_section_title}>
                        Timeline
                    </Col>
                    <Col span={16} className={styles.timeline_content_in_sec_section_sec_part}>
                        <Button >
                            <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay}>
                                <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay_1_item}>
                                    <FaMicrophone />
                                </div>
                                <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay_2_item}>
                                    Give feedback
                                </div>
                            </div>
                        </Button>
                        <Button>
                            <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay}>
                                <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay_1_item}>
                                    <FaShareNodes />
                                </div>
                                <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay_2_item}>
                                    Share
                                </div>
                            </div>
                        </Button>
                        <Button>
                            <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay}>
                                <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay_1_item}>
                                    <FaFileExport />
                                </div>
                                <div className={styles.timeline_content_in_sec_section_sec_part_in_overlay_2_item}>
                                    Export
                                </div>
                            </div>
                        </Button>
                        <Button>
                            <Dropdown menu={{
                                items: [
                                    {
                                        label: <a href="https://www.antgroup.com">Configure Timeline</a>,
                                        key: '0',
                                    }
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className={styles.timeline_content_in_sec_section_sec_part_in_overlay_1_item}>
                                        <FaEllipsis />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className={styles.timeline_content_in_third_section}>
                <Row>
                    <Col span={16} className={styles.timeline_content_in_third_section_first_col}>
                        <div className={styles.timeline_content_in_third_section_in_1_item}>
                            <Input placeholder="Basic usage" />
                        </div>
                        <div className={styles.timeline_content_in_third_section_in_2_item}>
                            <Button ><FaUser /></Button>
                            <Button><FaUser /></Button>
                            <Button ><FaUserPlus /></Button>
                        </div>
                        <div className={styles.timeline_content_in_third_section_in_3_item}>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="select one country"
                                defaultValue={['china']}
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
                        <div className={styles.timeline_content_in_third_section_in_3_item}>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="select one country"
                                defaultValue={['china']}
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
                        <div className={styles.timeline_content_in_third_section_in_4_item}>
                            <Button type="primary">Clear filters</Button>
                        </div>
                    </Col>
                    <Col span={8} className={styles.timeline_content_in_third_section_second_col}>
                        <Button type="primary" onClick={showModal} className={styles.timeline_content_in_third_section_in_4_item}>View settings</Button>
                        <Modal

                            className={styles.timeline_modal}
                            wrapClassName={styles.modal_third_type_wrp_itm}

                            title="Basic Modal" open={isModalOpen} onOk={handleOk}
                            styles={{
                                header: {
                                    borderRadius: 0
                                },
                                body: {
                                    // zIndex: -1,
                                    borderRadius: 5,
                                },
                                mask: {
                                    backgroundColor: 'transparent',
                                    zIndex: -1
                                },
                                content: {
                                    zIndex: 2
                                },
                                footer: {
                                    display: 'none'
                                },
                            }}
                        >
                            <div className={styles.timeline_modal_container}>
                                <div className={styles.timeline_modal_item_1}>
                                    <div className={styles.timeline_modal_item_title}>
                                        Refine your view
                                    </div>
                                    <div onClick={handleCancel} className={styles.timeline_modal_item_title}>
                                        <FaXmark />
                                    </div>
                                </div>
                                <div className={styles.timeline_modal_item_2}>
                                    <div className={styles.timeline_modal_item_2_title}>
                                        Issue display range
                                    </div>
                                    <div className={styles.timeline_modal_item_2_content}>
                                        <Checkbox>
                                            <div>
                                                <div className={styles.timeline_modal_item_2_content_1_item}>
                                                    Show Epic issues completed in the last
                                                </div>
                                                <div className={styles.timeline_modal_item_2_content_2_item}>
                                                    <Select
                                                    className={styles.timeline_modal_item_2_content_2_item_select}
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
                                                <div className={styles.timeline_modal_item_2_content_3_item}>
                                                    Completed Epic issues with due dates outside of this range won't show on your timeline.
                                                </div>
                                            </div>
                                        </Checkbox>
                                    </div>
                                    <div className={styles.timeline_modal_item_2_content}>
                                        <Checkbox>
                                            <div>
                                                <div className={styles.timeline_modal_item_2_content_1_item}>
                                                    Hide all completed Epic issues
                                                </div>
                                                <div className={styles.timeline_modal_item_2_content_3_item}>
                                                    All completed Epic issues will be hidden on the timeline, along with their child issues.
                                                </div>
                                            </div>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className={styles.timeline_modal_item_2}>
                                    <div className={styles.timeline_modal_item_2_title}>
                                        More details
                                    </div>
                                    <div>
                                        <Checkbox className={styles.timeline_modal_item_2_content_3_item_chbx}>
                                            <div className={styles.timeline_modal_item_2_content_1_item}>
                                                Dependencies
                                            </div>
                                            <div className={styles.timeline_modal_item_2_content_3_item}>
                                                Visualize how work streams relate to better understand your risks.
                                            </div>
                                        </Checkbox>
                                        <Checkbox className={styles.timeline_modal_item_2_content_3_item_chbx}>
                                            <div className={styles.timeline_modal_item_2_content_1_item}>
                                                Progress
                                            </div>
                                            <div className={styles.timeline_modal_item_2_content_3_item}>
                                                View the status of child issues and track how work is progressing.
                                            </div>
                                        </Checkbox>
                                        <Checkbox className={styles.timeline_modal_item_2_content_3_item_chbx}>
                                            <div className={styles.timeline_modal_item_2_content_1_item}>
                                                Warnings
                                            </div>
                                            <div className={styles.timeline_modal_item_2_content_3_item}>
                                                View warnings on the timeline.
                                            </div>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className={styles.timeline_modal_item_2}>
                                    <NavLink to={'/'}>
                                        Learn more about timeline view settings
                                    </NavLink>
                                </div>
                            </div>
                        </Modal>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default TimelineComp

type OwnProps = {}