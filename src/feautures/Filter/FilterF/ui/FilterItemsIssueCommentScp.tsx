import React, { useState } from 'react'
import styles from './FilterItemsIssueCommentStl.module.css'
import { FaUser } from 'react-icons/fa6'
import { Button } from 'antd'
import { IssuesCommentsType, IssuesType } from 'entities/issues/issuesReducerTs.interface'
import { ChangeCommentIssueFuncType } from '../../FilterE/ui/FilterRightBarThirdInFItemTs.interface'
import { IssueCommentCompOwnProps } from './FilterItemsIssueCommentTs.interface'



const IssueCommentComp: React.FC<IssueCommentCompOwnProps> = ({ issueCommentInfo, getBoardIssueItem, changeCommentIssueFunc, deleteCommentIssueFunc }) => {

    const [commentDvStr, setCommentStr] = useState<string>('')
    const [commentDvTp, setCommentDvTp] = useState<boolean>(false)

    const saveChangedCommentIssue: (str: string, id: number, boardName: string, commId: number) => void = (str: string, id: number, boardName: string, commId: number) => {
        changeCommentIssueFunc({ str, id, boardName, commId })
    }

    const deleteCommentCompIssue: (str: string, id: number, boardName: string, commId: number) => void = (str: string, id: number, boardName: string, commId: number) => {
        deleteCommentIssueFunc({ str, id, boardName, commId })
    }

    return (
        <div >
            <div>
                <FaUser />
            </div>
            <div>
                <div>
                    {issueCommentInfo.name} {issueCommentInfo.date}
                </div>
                <div>
                    {
                        !commentDvTp
                            ?
                            <div>
                                {issueCommentInfo.text}
                            </div>
                            :
                            <div>
                                <input onChange={(e) => setCommentStr(e.target.value)} />
                                <div onClick={() => setCommentDvTp(false)}>
                                    x
                                </div>
                                <div onClick={() => {
                                    setCommentDvTp(false)
                                    saveChangedCommentIssue(commentDvStr, getBoardIssueItem.id, getBoardIssueItem.issueStatus, issueCommentInfo.id)
                                }
                                }
                                >
                                    save
                                </div>
                            </div>
                    }

                </div>
                <div>
                    <Button
                        onClick={() => {
                            setCommentDvTp(true)
                        }
                        }
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => {
                            deleteCommentCompIssue(commentDvStr, getBoardIssueItem.id, getBoardIssueItem.issueStatus, issueCommentInfo.id)
                        }
                        }
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}




export default IssueCommentComp
