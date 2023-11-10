import React, { useState } from 'react';

import styles from './FilterRightBarStl.module.css'


import { Form as FormAnt, Col, Row, Card, Breadcrumb, Input, Collapse, Menu, Checkbox, Dropdown, Space, List, Avatar, Button } from 'antd';

import type { CollapseProps } from 'antd'

import { NavLink } from 'react-router-dom';
import { FaFileExcel, FaFileExport, FaFileWord, FaShareFromSquare } from 'react-icons/fa6';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import FilterRightBarInFirstComp from './FilterRightBarInFirstComp/FilterRIghtBarInFirstScp'
import FilterSecondBarInFirstComp from './FilterSeconBarInSecondComp/FilterSecondBarInSecondScp';
import FilterRightBarThirdComp from './FilterRightBarThirdComp/FilterRightBarThirdScp';
import { IssuesType } from '../../../redux/issuesReducer';





// third item start



export const FilterRightBarNavBarForthComp: React.FC = ({ }) => {




    return (
        <div>
            <FilterRightBarThirdComp />
        </div>
    )
}



const FilterRightBarComp: React.FC<OwnProps> = () => {



    return (
        <div className={styles.filter_right_bar_content}>
            <div className={styles.filter_right_bar_content_container}>


                <FilterRightBarInFirstComp />

                {/* <FilterSecondBarInFirstComp /> */}

                <FilterRightBarNavBarForthComp />
            </div>
        </div>
    )
}

export default FilterRightBarComp

type OwnProps = {}