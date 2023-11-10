import React, { useState } from 'react';

import styles from './IssuesStl.module.css'
import secStyles from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FilterRightBarThirdInFItemComp/FilterRightBarThirdInFItemStl.module.css'


import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Collapse, Dropdown, Input, Menu, Row, Select, Space } from 'antd';

import type { CollapseProps } from 'antd'
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaChartBar, FaChartLine, FaEllipsis, FaEye, FaFileWord, FaGear, FaLink, FaLockOpen, FaRegThumbsUp, FaShareFromSquare, FaShareNodes, FaUser, FaUserLarge } from 'react-icons/fa6';
import FilterRightBarThirdInSItemComp from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FIlterRightBarThirdInSItem/FIlterRightBarThirdInSItemScp';
import FilterRightBarThirdInFItemComp from '../FilterComp/FilterRightBarComp/FilterRightBarThirdComp/FilterRightBarThirdInFItemComp/FilterRightBarThirdInFItemSCp';
import { IssuesType } from '../../redux/issuesReducer';



export const IssuesComp: React.FC = () => {


    return (
        <div className={secStyles.filter_rg_br_rg_prt_content_container}>
            <Row>
                <Col span={12} className={secStyles.filter_second_col}>
                    <FilterRightBarThirdInFItemComp />
                </Col>
                <Col span={12} >
                    <FilterRightBarThirdInSItemComp />
                </Col>
            </Row>
        </div>
    )

}

export const IssueInCntComp: React.FC<OwnProps> = ({ }) => {
    return (
        <div className={secStyles.filter_rg_br_rg_prt_content_container}>
            <Row>
                <Col span={12} className={secStyles.filter_second_col}>
                    <FilterRightBarThirdInFItemComp />
                </Col>
                <Col span={12} >
                    <FilterRightBarThirdInSItemComp />
                </Col>
            </Row>
        </div>
    )
}



// export default IssuesComp

type OwnProps = {
}