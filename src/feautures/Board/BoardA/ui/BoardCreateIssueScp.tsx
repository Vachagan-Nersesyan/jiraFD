import React, { useState } from 'react'
import styles from './BoardCreateIssueStl.module.css'
import { IssuesType } from 'entities/issues/issuesReducerTs.interface';
import { Avatar, Input, List, Select } from 'antd';
import { ProjectType } from 'entities/project/projectReducerTs.interface';

import { v4 as uuidv4 } from 'uuid';
import { OwnProps } from './BoardCreateIssueTs.interface';
import { FaCheck, FaXmark } from 'react-icons/fa6';


const BoardCreateIssueComp: React.FC<OwnProps> = ({ boardArr, foo, boardIssueArr, currentProject, status }) => {

    // debugger

    // let sum = 0

    // for(let t in boardArr){
    //     sum += boardArr[t].boardIssue.length
    // }


    const [createIssueCompTp, setCreateIssueCompTp] = useState<boolean>(false);
    const [addIssueName, setAddIssueName] = useState<string>('');


    const mainbarcreatissThrdArrData = [
        {

            id: 0,
            title: 'Story',
            picture: '/pictures/issueImages/3.svg'
        },
        {
            id: 1,
            title: 'Bug',
            picture: '/pictures/issueImages/1.svg'
        },
        {
            id: 2,
            title: 'Task',
            picture: '/pictures/issueImages/4.svg'
        },
        {
            id: 3,
            title: 'Epic',
            picture: '/pictures/issueImages/2.svg'
        },
    ]

    let issueObj: IssuesType = {
        id: boardIssueArr.length + 1,
        uniqId: uuidv4(),
        issuesProject: '',
        issueTypeName: 'Task',
        issueTypePic: '',
        issueStatus: '',
        currentDate: '',
        descriptionText: '',
        summary: '',
        description: [],
        assignee: '',
        storyPoint: 0,
        reporter: 'Vachagan',
        issueShortName: '',
        issueComments: [],
        doneRecently: '',
        issuesChilds: [],
        flag: false,
        issueLabel: [],

        issuesInnerItems: [],
        isSubIssue: false


    }


    const createIssueInBoardComp: () => void = () => {
        issueObj.issuesProject = currentProject.name

        issueObj.issueStatus = status

        issueObj.summary = addIssueName

        if (issueObj.issueTypeName === 'Story') {
            issueObj.issueTypePic = '/pictures/issueImages/3.svg'
        } else if (issueObj.issueTypeName === 'Bug') {
            issueObj.issueTypePic = '/pictures/issueImages/1.svg'
        } else if (issueObj.issueTypeName === 'Task') {
            issueObj.issueTypePic = '/pictures/issueImages/4.svg'
        } else {
            issueObj.issueTypePic = '/pictures/issueImages/2.svg'
        }

        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();

        issueObj.currentDate = cDate

        if (issueObj.issueStatus === 'done') {

            issueObj.doneRecently = cDate
        }


        setCreateIssueCompTp(false)

        foo(issueObj, status)
    }




    return (
        <div className={styles.board_create_issue_feoq_content}>
            {
                createIssueCompTp
                    ?
                    <div className={styles.board_create_issue_feoq_content_issue_content}>
                        <div className={styles.board_create_issue_feoq_content_issue_content_1_item}>
                            <Input placeholder="Please write issue's name" onChange={(e) => setAddIssueName(e.target.value)} />
                        </div>
                        <div className={styles.board_create_issue_feoq_content_issue_content_2_item}>
                            <div className={styles.board_create_issue_feoq_content_issue_content_2_item_2_1s_item}>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    className={styles.board_create_issue_feoq_content_issue_content_2_item_2_1s_item_slct}
                                    options={
                                        mainbarcreatissThrdArrData.map((val) => {
                                            return (
                                                {
                                                    value: val.title,
                                                    label: (
                                                        <div
                                                            onClick={() => {
                                                                issueObj.issueTypeName = val.title

                                                            }}
                                                            className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item_1_item_stts_item_txt}
                                                        >
                                                            <img src={val.picture} className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item_1_item_stts_item_pic} />
                                                            {val.title}
                                                        </div>
                                                    ),
                                                }
                                            )
                                        })
                                    }
                                />
                            </div>
                            <div className={styles.board_create_issue_feoq_content_issue_content_2_item_ovrl}>
                                <div onClick={createIssueInBoardComp} className={styles.board_create_issue_feoq_content_issue_content_2_item_ovrl_1_item}>
                                    <FaCheck />
                                </div>
                                <div onClick={() => setCreateIssueCompTp(false)} className={styles.board_create_issue_feoq_content_issue_content_2_item_ovrl_2_item}>
                                    <FaXmark />
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div onClick={() => setCreateIssueCompTp(true)} className={styles.board_create_issue_feoq_content_btn_item}>
                        + Create issue
                    </div>

            }

        </div>
    )
}


export default BoardCreateIssueComp

