import React, { useState } from 'react'
import styles from './BoardCreateIssueStl.module.css'
import { IssuesType } from '../../../../entities/issues/issuesReducer';
import { Avatar, Input, List, Select } from 'antd';
import { ProjectType } from '../../../../entities/project/projectReducer';

import { v4 as uuidv4 } from 'uuid';


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


export default BoardCreateIssueComp

type OwnProps = {
    currentProject: ProjectType,
    status: string,

    foo: (obj: IssuesType, uniqtext: string) => void,
    boardIssueArr: Array<IssuesType>,

    // uxxel
    boardArr: any
}