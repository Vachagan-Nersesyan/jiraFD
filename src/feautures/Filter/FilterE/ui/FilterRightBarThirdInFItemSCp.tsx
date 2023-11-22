import React, { useState, useEffect } from 'react'
import styles from './FilterRightBarThirdInFItemStl.module.css'
import { Breadcrumb, Button, Col, Input, Row, Space } from 'antd'
import { FaChartBar, FaChartLine, FaCheck, FaClosedCaptioning, FaEllipsis, FaEye, FaFileWord, FaLink, FaPencil, FaUser, FaUserLarge } from 'react-icons/fa6'
import { IssuesCommentsType, IssuesType } from 'entities/issues/issuesReducerTs.interface'
import { AppStateType } from '../../../../entities/store/redux-store'
import { connect, useSelector } from 'react-redux'

import { compose } from 'redux'
import { ChangeIssNameFuncType } from 'pages/BoardComp/ui/BoardTs.interface'
import { changeGetBoardIssueItemFunc, projectSlice } from 'entities/project/projectReducer'
import { v4 as uuidv4 } from 'uuid';


import IssueCommentComp from '../../FilterF/ui/FilterItemsIssueCommentScp'
import { useDispatch } from 'react-redux'
import { MapDispatchToPropsType, MapStateToPropsType, OwnProps, SubIssueOwnPropsType } from './FilterRightBarThirdInFItemTs.interface'

const FilterRightBarThirdInFItemComp: React.FC<OwnProps & MapDispatchToPropsType & MapStateToPropsType> = ({ changeIssueInnerIssueSummary, addIssueInnerIssueFunc, issuesInnerItems, getBoardIssueItem, deleteCommentIssueFunc, changeCommentIssueFunc, addCommentIssueFunc, changeIssDescriptionFunc, changeIssNameFunc }) => {


    console.log(getBoardIssueItem, 'getBoardIssueItem')

    const dispatch = useDispatch()


    const [issueNameTp, setIssueNameTp] = useState<boolean>(false)
    const [changeIssueName, setChangeIssueName] = useState<string>(getBoardIssueItem.summary)

    const [issueDescriptionTp, setIssueDescriptionTp] = useState<boolean>(false)
    const [changeIssueDescription, setIssueDescription] = useState<string>(getBoardIssueItem.descriptionText)

    const [issueCommentTp, setIssueCommentTp] = useState<boolean>(false)
    const [issueComment, setIssueComment] = useState<string>('')


    const [addChildItems, setAddChildItems] = useState<boolean>(false)






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

    const [innerIssueSummary, setInnerIssueSummary] = useState<string>('')




    const addIssueInnerIssueCompFunc: () => void = () => {
        let issueInnerObj: IssuesType = {
            id: issuesInnerItems.length + 1,
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
        issueInnerObj.issuesProject = getBoardIssueItem.issuesProject

        issueInnerObj.issueStatus = 'todo'
        issueInnerObj.isSubIssue = true




        issueInnerObj.summary = innerIssueSummary

        issueInnerObj.issueTypePic = '/pictures/issueImages/5.svg'


        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();

        issueInnerObj.currentDate = cDate

        addIssueInnerIssueFunc(issueInnerObj)

        setInnerIssueSummary('')

    }

    console.log(getBoardIssueItem, 'getBoardIssueItem')





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
                    {
                        !getBoardIssueItem.isSubIssue
                            ?
                            <Button onClick={() => setAddChildItems(true)}>Add child</Button>
                            :
                            null
                    }
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

            {
                !getBoardIssueItem.isSubIssue
                    ?
                    <div>
                        {
                            !addChildItems
                                ?
                                null
                                :
                                <div>
                                    <div>
                                        Create inner issues
                                    </div>
                                    <div>
                                        <Input onChange={(e) => setInnerIssueSummary(e.target.value)} placeholder='What needs to be done?' />
                                    </div>
                                    <div>
                                        <Button type='primary' onClick={() => addIssueInnerIssueCompFunc()}>Create</Button>
                                        <Button onClick={() => setAddChildItems(false)}>Cancel</Button>
                                    </div>
                                </div>
                        }

                        {
                            issuesInnerItems.length === 0
                                ?
                                null
                                :
                                <div>
                                    Issue Inner Issues
                                    {
                                        issuesInnerItems.map((val) => {
                                            return (
                                                <SubIssueComp changeIssueInnerIssueSummary={changeIssueInnerIssueSummary} subIssueInfo={val} />
                                            )
                                        })
                                    }
                                </div>
                        }
                    </div>
                    :
                    null

            }





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

    let currentProjectNumberfst = state.project.currentProjectNumber


    return {
        getBoardIssueItem: state.project.getBoardIssueItem,
        issuesInnerItems: state.project.getBoardIssueItem.issuesInnerItems,

    }
}


const FilterRightBarThirdInFItemCompCont = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        changeIssNameFunc: projectSlice.actions.changeIssNameFunc,
        changeIssDescriptionFunc: projectSlice.actions.changeIssDescriptionFunc,
        addCommentIssueFunc: projectSlice.actions.addCommentIssueFunc,
        changeCommentIssueFunc: projectSlice.actions.changeCommentIssueFunc,
        deleteCommentIssueFunc: projectSlice.actions.deleteCommentIssueFunc,
        addIssueInnerIssueFunc: projectSlice.actions.addIssueInnerIssueFunc,
        changeIssueInnerIssueSummary: projectSlice.actions.changeIssueInnerIssueSummary
    })
)(FilterRightBarThirdInFItemComp)


export default FilterRightBarThirdInFItemCompCont




// SUB ISSUE ITEM

const SubIssueComp: React.FC<SubIssueOwnPropsType> = ({ subIssueInfo, changeIssueInnerIssueSummary }) => {

    const dispatch = useDispatch()

    const [innerIssueChangeNameCont, setInnerIssueChangeNameCont] = useState<boolean>(false)
    const [innerIssueChangeName, setInnerIssueChangeName] = useState<string>('')

    const changeIssueInnerIssueSummartCompFunc: (str: string, id: string) => void = (str: string, id: string) => {
        changeIssueInnerIssueSummary({ str, id })
    }




    return (
        <div>
            <div>
                <img src={subIssueInfo.issueTypePic} alt="" />
            </div>
            {
                !innerIssueChangeNameCont
                    ?
                    <div>
                        {
                            subIssueInfo.summary
                        }
                    </div>
                    :
                    <div>
                        <Input onChange={(e) => setInnerIssueChangeName(e.target.value)} />
                        <div onClick={() => {
                            setInnerIssueChangeNameCont(false)
                            changeIssueInnerIssueSummartCompFunc(innerIssueChangeName, subIssueInfo.uniqId)
                        }
                        }>
                            <FaCheck />
                        </div>
                        <div onClick={() => setInnerIssueChangeNameCont(false)}>
                            <FaClosedCaptioning />
                        </div>

                    </div>
            }

            <div onClick={() => {
                setInnerIssueChangeNameCont(true)
            }}>
                <FaPencil />
            </div>

            <div onClick={() => dispatch(changeGetBoardIssueItemFunc(subIssueInfo))}>
                <FaEye />
                Watch
            </div>

            <div>
                {
                    subIssueInfo.assignee
                }
            </div>
            <div>
                {
                    subIssueInfo.issueStatus
                }
            </div>
        </div>
    )
}


