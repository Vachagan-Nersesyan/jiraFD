import React from 'react'
import styles from './FilterRightBarInFirstStl.module.css'
import { Checkbox, Col, Dropdown, Form, Menu, Row, Space } from 'antd'
import { NavLink } from 'react-router-dom'
import { FaBarsStaggered, FaFileExcel, FaFileExport, FaFileWord, FaShareFromSquare } from 'react-icons/fa6'
import { OwnProps, SecOwnProps } from './FIlterRightBarInFirstTs.interface'


const FilterRightBarNavBarComp: React.FC<SecOwnProps> = () => {

    return (
        <Row className={styles.filter_right_bar_first_content}>
            <Col span={12}>
                <div className={styles.filter_right_bar_first_content_in_container}>
                    <div className={styles.filter_right_bar_first_content_title}>
                        Search
                    </div>
                    <div>
                        <NavLink to={'/'} className={styles.filter_right_bar_first_content_lnk}>
                            Save as
                        </NavLink>
                    </div>
                </div>
            </Col>
            <Col span={12} className={styles.filter_right_bar_first_content_sec_col_content}>
                <div className={styles.filter_right_bar_first_content_sec_col_content_in_container}>
                    <div className={styles.filter_right_bar_first_content_sec_col_content_in_container_in_item}>
                        <NavLink to={'/'}>
                            <FaFileExcel />
                        </NavLink>
                    </div>
                    <div className={styles.filter_right_bar_first_content_sec_col_content_in_container_in_item}>
                        <NavLink to={'/'}>
                            <FaFileWord />
                        </NavLink>
                    </div>
                    <div className={styles.filter_right_bar_first_content_sec_col_content_in_container_in_item}>
                        <NavLink to={'/'}>
                            <FaShareFromSquare />
                            Share
                        </NavLink>
                    </div>
                    <div className={styles.filter_right_bar_first_content_sec_col_content_in_container_in_item}>
                        <NavLink to={'/'}>
                            <FaFileExport />
                            Export
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/'}>
                            <Dropdown menu={{
                                items: [
                                    {
                                        label: (
                                            <div>
                                                Bull change all 9 issue(s)
                                            </div>
                                        ),
                                        key: '0',
                                    },
                                    {
                                        label: (
                                            <div>
                                                Clear sorts
                                            </div>
                                        ),
                                        key: '1',
                                    },
                                    {
                                        label: (
                                            <div>
                                                Import issues from CSV
                                            </div>
                                        ),
                                        key: '2',
                                    },
                                ]
                            }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className={styles.filter_right_bar_sec_content_itm}>
                                        <FaBarsStaggered />
                                    </Space>
                                </a>
                            </Dropdown>
                        </NavLink>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

const FilterRightBarInFirstComp: React.FC<OwnProps> = () => {
    return (
        <FilterRightBarNavBarComp />
    )
}

export default FilterRightBarInFirstComp

