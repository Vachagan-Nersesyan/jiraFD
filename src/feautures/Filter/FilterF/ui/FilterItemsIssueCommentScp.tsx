import React, { useState } from 'react'
import styles from './FilterItemsIssueCommentStl.module.css'
import { FaRegUser, FaUser } from 'react-icons/fa6'
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
        <div className={styles.filter_items_sub_issue_comments}>
            <div className={styles.filter_items_sub_issue_comments_1_item}>
                <FaRegUser />
            </div>
            <div className={styles.filter_items_sub_issue_comments_2_item}>
                <div className={styles.filter_items_sub_issue_comments_2_item_1_item}>
                    <span>{issueCommentInfo.name}</span>
                    <span>{issueCommentInfo.date}</span>
                </div>
                <div className={styles.filter_items_sub_issue_comments_2_item_2_item}>
                    {
                        !commentDvTp
                            ?
                            <div className={styles.filter_items_sub_issue_comments_2_item_2_item_1_item}>
                                {issueCommentInfo.text}
                            </div>
                            :
                            <div className={styles.filter_items_sub_issue_comments_2_item_2_item_2_item}>
                                <input onChange={(e) => setCommentStr(e.target.value)} />
                            </div>
                    }

                </div>
                <div className={styles.filter_items_sub_issue_comments_2_item_3_item}>
                    <div
                        onClick={() => {
                            setCommentDvTp(!commentDvTp)
                        }
                        }
                        className={styles.filter_items_sub_issue_comments_2_item_3_item_1_item}
                    >
                        {
                            commentDvTp
                                ?
                                <span
                                    onClick={() => {
                                        saveChangedCommentIssue(commentDvStr, getBoardIssueItem.id, getBoardIssueItem.issueStatus, issueCommentInfo.id)
                                    }
                                    }
                                >
                                    Save
                                </span>
                                :
                                <span>
                                    Edit
                                </span>
                        }
                    </div>
                    <div
                        onClick={() => {
                            deleteCommentCompIssue(commentDvStr, getBoardIssueItem.id, getBoardIssueItem.issueStatus, issueCommentInfo.id)
                        }
                        }
                        className={styles.filter_items_sub_issue_comments_2_item_3_item_1_item}
                    >
                        Delete
                    </div>
                </div>
            </div>
        </div>
    )
}




export default IssueCommentComp
