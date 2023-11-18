import React, { useState } from 'react'
import styles from './BacklogSecCreateIssueStl.module.css'
import { Avatar, Input, List, Select } from 'antd';
import { IssuesType } from '../../../../entities/issues/issuesReducer';
import { AddIssueToBacklogArrArgsType } from '../../../../pages/BackblogComp/ui/BackblogScp';

import { v4 as uuidv4 } from 'uuid';


const BacklogSecCreateIssueComp: React.FC<OwnProps> = ({ backlogSecCreateIssueCompFunc, currentProjectName }) => {
    const [createIssueCompTp, setCreateIssueCompTp] = useState<boolean>(false);
    const [addIssueName, setAddIssueName] = useState<string>('');




    const mainbarcreatissThrdArrData = [
        {
            title: 'Story',
        },
        {
            title: 'Bug',
        },
        {
            title: 'Task',
        },
        {
            title: 'Epic',
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

        backlogSecCreateIssueCompFunc(currentProjectName, issueObj)
    }




    return (
        <div>
            {
                createIssueCompTp
                    ?
                    <div>
                        <div>
                            <Input placeholder="Basic usage" onChange={(e) => setAddIssueName(e.target.value)} />
                        </div>
                        <div>
                            <div>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    options={
                                        mainbarcreatissThrdArrData.map((val) => {
                                            return (
                                                {
                                                    value: val.title,
                                                    label: (
                                                        <List.Item>
                                                            <List.Item.Meta
                                                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=0`} />}
                                                                title={<div onClick={() => {
                                                                    issueObj.issueTypeName = val.title

                                                                }}>{val.title}</div>}
                                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                            />
                                                        </List.Item>
                                                    ),
                                                }
                                            )
                                        })
                                    }
                                />
                            </div>
                            <div onClick={createIssueInBoardComp}>
                                done
                            </div>
                            <div onClick={() => setCreateIssueCompTp(false)}>
                                X
                            </div>
                        </div>
                    </div>

                    :
                    <div onClick={() => setCreateIssueCompTp(true)}>
                        Create issue +
                    </div>

            }

        </div>
    )
}

export default BacklogSecCreateIssueComp

type OwnProps = {

    currentProjectName: string,
    backlogSecCreateIssueCompFunc: (str: string, obj: IssuesType) => void

}