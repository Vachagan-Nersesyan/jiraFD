import React, { useState, useEffect } from 'react'
import styles from './FilterRightBarThirdInFItemStl.module.css'
import { Breadcrumb, Button, Col, Input, Row, Space } from 'antd'
import { FaChartBar, FaChartLine, FaEllipsis, FaFileWord, FaLink, FaUser, FaUserLarge } from 'react-icons/fa6'
import { IssuesCommentsType, IssuesType } from '../../../../../redux/issuesReducer'
import { AppStateType } from '../../../../../redux/redux-store'
import { connect, useSelector } from 'react-redux'

import { compose } from 'redux'
import { ChangeIssNameFuncType } from '../../../../BoardComp/BoardScp'
import { projectSlice } from '../../../../../redux/projectReducer'

import IssueCommentComp from './FilterItemsIssueCommentComp/FilterItemsIssueCommentScp'

const FilterRightBarThirdInFItemComp: React.FC<OwnProps & MapDispatchToPropsType & MapStateToPropsType> = ({ getBoardIssueItem, deleteCommentIssueFunc, changeCommentIssueFunc, addCommentIssueFunc, changeIssDescriptionFunc, changeIssNameFunc }) => {


    console.log(getBoardIssueItem, 'getBoardIssueItem')


    const [issueNameTp, setIssueNameTp] = useState<boolean>(false)
    const [changeIssueName, setChangeIssueName] = useState<string>(getBoardIssueItem.summary)

    const [issueDescriptionTp, setIssueDescriptionTp] = useState<boolean>(false)
    const [changeIssueDescription, setIssueDescription] = useState<string>(getBoardIssueItem.descriptionText)

    const [issueCommentTp, setIssueCommentTp] = useState<boolean>(false)
    const [issueComment, setIssueComment] = useState<string>('')






    const saveChangedIssueName: (str: string, id: number, boardName: string) => void = (str: string, id: number, boardName: string) => {
        changeIssNameFunc({ str, id, boardName })
    }

    const saveChangedIssueDescription: (str: string, id: number, boardName: string) => void = (str: string, id: number, boardName: string) => {
        changeIssDescriptionFunc({ str, id, boardName })
    }


    const saveChangedIssueComment: (str: string, id: number, boardName: string) => void = (str: string, id: number, boardName: string) => {
        addCommentIssueFunc({ str, id, boardName })
        setIssueComment('')
    }

    console.log(getBoardIssueItem,'getBoardIssueItem')


    return (
        <div className={styles.filter_right_bar_third_in_1_item_content}>
            <div className={styles.filter_right_bar_third_in_1_item_content_1_item}>
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
            <div className={styles.filter_right_bar_third_in_1_item_content_2_item}>
                {
                    !issueNameTp
                        ?
                        <div onClick={() => setIssueNameTp(true)}>
                            {getBoardIssueItem.summary}
                        </div>
                        :
                        <div>
                            <input onChange={(e) => setChangeIssueName(e.target.value)} />
                            <div onClick={() => setIssueNameTp(false)}>
                                x
                            </div>
                            <div onClick={() => {
                                setIssueNameTp(false)
                                saveChangedIssueName(changeIssueName, getBoardIssueItem.id, getBoardIssueItem.issueStatus)
                            }
                            }
                            >
                                save
                            </div>
                        </div>
                }
            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_3_item}>
                <Space className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content}>
                    <Button ><FaLink /></Button>
                    <Button><FaChartBar /></Button>
                    <Button ><FaChartLine /></Button>
                    <Button><FaEllipsis /></Button>
                </Space>
            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_4_item}>
                <div>
                    Description
                </div>

                {
                    !issueDescriptionTp
                        ?
                        <div onClick={() => setIssueDescriptionTp(true)}>
                            {getBoardIssueItem.descriptionText}
                        </div>
                        :
                        <div>
                            <input onChange={(e) => setIssueDescription(e.target.value)} />
                            <div onClick={() => setIssueDescriptionTp(false)}>
                                x
                            </div>
                            <div onClick={() => {
                                setIssueDescriptionTp(false)
                                saveChangedIssueDescription(changeIssueDescription, getBoardIssueItem.id, getBoardIssueItem.issueStatus)
                            }
                            }
                            >
                                save
                            </div>
                        </div>
                }





            </div>
            <div>
                <FilterRightBarNavBarForthItemComp />
            </div>
            <div>
                <div className={styles.filter_right_bar_nav_bar_third_item_content}>
                    <div className={styles.filter_right_bar_nav_bar_third_item_content_1_item}>
                        <FaUserLarge />
                    </div>
                    <div className={styles.filter_right_bar_nav_bar_third_item_content_2_item}>
                        <Input value={issueComment} placeholder="large size" onChange={(e) => setIssueComment(e.target.value)} onClick={() => setIssueCommentTp(true)} />
                    </div>

                    {
                        issueCommentTp
                            ?
                            <div>
                                <Button type='primary' onClick={() => {
                                    setIssueCommentTp(false)
                                    saveChangedIssueComment(issueComment, getBoardIssueItem.id, getBoardIssueItem.issueStatus)
                                }
                                }
                                >
                                    Save
                                </Button>
                                <Button type='primary' onClick={() => {
                                    setIssueCommentTp(false)
                                }
                                }>Cancel</Button>
                            </div>
                            :
                            null
                    }

                </div>


                <div className={styles.filter_right_bar_nav_bar_third_item_content_3_item}>
                    Pro tip: press M to comment
                </div>
            </div>
            <div>
                {
                    getBoardIssueItem.issueComments.map((val) => {
                        return (
                            <IssueCommentComp deleteCommentIssueFunc={deleteCommentIssueFunc} changeCommentIssueFunc={changeCommentIssueFunc} issueCommentInfo={val} getBoardIssueItem={getBoardIssueItem} />
                        )
                    })
                }
            </div>
        </div >
    )

}



export const FilterRightBarNavBarForthItemComp: React.FC<{}> = () => {
    return (
        <div>
            <div className={styles.filter_right_bar_third_in_1_item_content_4_item}>
                Activity
            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_4_item_content}>
                <Row>
                    <Col span={18} className={styles.filter_rght_br_col_content}>
                        <div className={styles.filter_rght_br_col_cnt}>Show : </div>
                        <Button>All</Button>
                        <Button>Comments</Button>
                        <Button>History</Button>
                    </Col>
                    <Col span={6} className={styles.filter_rght_br_sec_col_content}>
                        <Button className={styles.filter_rght_br_sec_col_content_item}>Newest first</Button>
                    </Col>
                </Row>
            </div>

        </div>
    )
}




function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        getBoardIssueItem: state.project.getBoardIssueItem
    }
}


const FilterRightBarThirdInFItemCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        changeIssNameFunc: projectSlice.actions.changeIssNameFunc,
        changeIssDescriptionFunc: projectSlice.actions.changeIssDescriptionFunc,
        addCommentIssueFunc: projectSlice.actions.addCommentIssueFunc,
        changeCommentIssueFunc: projectSlice.actions.changeCommentIssueFunc,
        deleteCommentIssueFunc: projectSlice.actions.deleteCommentIssueFunc
    })
)(FilterRightBarThirdInFItemComp)


export default FilterRightBarThirdInFItemCompCont

type OwnProps = {

}

type MapStateToPropsType = {
    getBoardIssueItem: IssuesType
}

type MapDispatchToPropsType = {
    changeIssNameFunc: ({ str, id, boardName }: ChangeIssNameFuncType) => void,
    changeIssDescriptionFunc: ({ str, id, boardName }: ChangeIssDescriptionFuncType) => void,
    addCommentIssueFunc: ({ str, id, boardName }: ChangeIssDescriptionFuncType) => void,
    changeCommentIssueFunc: ({ str, id, boardName, commId }: ChangeCommentIssueFuncType) => void,
    deleteCommentIssueFunc: ({ str, id, boardName, commId }: ChangeCommentIssueFuncType) => void

}

export type ChangeCommentIssueFuncType = {
    str: string,
    id: number,
    boardName: string,
    commId: number
}

export type ChangeIssDescriptionFuncType = {
    str: string,
    id: number,
    boardName: string
}
