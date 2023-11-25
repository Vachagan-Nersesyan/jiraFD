import React, { useState } from 'react'
import styles from './BacklogCreateIssueStl.module.css'
import { ProjectType } from 'entities/project/projectReducerTs.interface';
import { IssuesType } from 'entities/issues/issuesReducerTs.interface';
import { Avatar, Input, List, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { OwnProps } from './BacklogCreateIssueTs.interface';
import { FaCheck, FaXmark } from 'react-icons/fa6';


const BacklogCreateIssueComp: React.FC<OwnProps> = ({ currentProjectName, backlogCreateIssueCompFunc }) => {


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
        id: 9999,
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
        issueObj.issuesProject = currentProjectName

        issueObj.issueStatus = 'todo'

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


        setCreateIssueCompTp(false)

        backlogCreateIssueCompFunc(issueObj)
    }




    return (
        <div>
            {
                createIssueCompTp
                    ?
                    <div className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content}>
                        <div className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content__item}>
                            <div className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item_1_item}>
                                <Select
                                    showSearch
                                    placeholder="Select a status"
                                    optionFilterProp="children"
                                    className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item_1_item_stts_item}
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
                            <div className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item}>
                                <Input placeholder="Please write issues's name" onChange={(e) => setAddIssueName(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_thr_item}>
                            <div onClick={createIssueInBoardComp} className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item_2_item}>
                                <FaCheck />
                            </div>
                            <div onClick={() => setCreateIssueCompTp(false)} className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_sec_content_1_item_3_item}>
                                <FaXmark />
                            </div>
                        </div>
                    </div>

                    :
                    <div onClick={() => setCreateIssueCompTp(true)} className={styles.ftrs_backlog_crt_iss_sc_first_fts_a_item_content}>
                        Create issue +
                    </div>

            }

        </div>
    )
}




export default BacklogCreateIssueComp