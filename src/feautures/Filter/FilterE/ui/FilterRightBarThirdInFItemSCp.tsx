import React, { useState, useEffect } from 'react'
import styles from './FilterRightBarThirdInFItemStl.module.css'
import { Breadcrumb, Button, Col, Input, Row, Space } from 'antd'
import { FaChartBar, FaChartLine, FaCheck, FaClosedCaptioning, FaEllipsis, FaEye, FaFileWord, FaLink, FaPencil, FaRegUser, FaSitemap, FaUser, FaUserLarge, FaXmark } from 'react-icons/fa6'
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
import { NavLink } from 'react-router-dom'

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
                            title: <NavLink to={'/jiraItems/allProjects'}>Home</NavLink>,
                        },
                    ]}
                />
            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_2_item}>
                {
                    !issueNameTp
                        ?
                        <div onClick={() => setIssueNameTp(true)} className={styles.filter_right_bar_third_in_1_item_content_2_item_1_item}>
                            {getBoardIssueItem.summary}
                        </div>
                        :
                        <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item}>
                            <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_1_item}>
                                <input value={getBoardIssueItem.summary} onChange={(e) => setChangeIssueName(e.target.value)} />

                            </div>
                            <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item}>
                                <div onClick={() => setIssueNameTp(false)} className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}>
                                    <FaXmark />
                                </div>
                                <div onClick={() => {
                                    setIssueNameTp(false)
                                    saveChangedIssueName(changeIssueName, getBoardIssueItem.id, getBoardIssueItem.issueStatus)
                                }
                                }
                                    className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}
                                >
                                    <FaCheck />
                                </div>
                            </div>

                        </div>
                }
            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_3_item}>
                <Space className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_ovrl}>

                    {
                        !getBoardIssueItem.isSubIssue
                            ?
                            <div onClick={() => setAddChildItems(true)} className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content}><FaSitemap /> Add a child issue</div>
                            :
                            null
                    }
                </Space>
            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_4_item}>
                <div onClick={() => setIssueDescriptionTp(true)} className={styles.filter_right_bar_third_in_1_item_content_4_item_1_item}>
                    Description
                </div>

                {
                    !issueDescriptionTp
                        ?
                        <div onClick={() => setIssueDescriptionTp(true)} className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_ovrl_2_item}>
                            {
                                getBoardIssueItem.descriptionText === ''
                                    ?
                                    <span>
                                        Ther is not description...
                                    </span>
                                    :
                                    <span>
                                        {getBoardIssueItem.descriptionText}
                                    </span>
                            }
                        </div>
                        :
                        <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item}>
                            <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_1_item_sec}>
                                <input onChange={(e) => setIssueDescription(e.target.value)} />

                            </div>
                            <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item}>
                                <div onClick={() => setIssueDescriptionTp(false)} className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}>
                                    <FaXmark />
                                </div>
                                <div onClick={() => {
                                    setIssueDescriptionTp(false)
                                    saveChangedIssueDescription(changeIssueDescription, getBoardIssueItem.id, getBoardIssueItem.issueStatus)
                                }
                                }
                                    className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}
                                >
                                    <FaCheck />
                                </div>
                            </div>

                        </div>
                }





            </div>

            <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont}>

                {
                    !getBoardIssueItem.isSubIssue
                        ?
                        <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl}>
                            {
                                !addChildItems
                                    ?
                                    null
                                    :
                                    <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1}>
                                        <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1_in_1item}>
                                            Create child issues
                                        </div>
                                        <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1_in_2item}>
                                            <input onChange={(e) => setInnerIssueSummary(e.target.value)} placeholder='What needs to be done?' />
                                        </div>
                                        <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1_in_3item}>
                                            <div onClick={() => addIssueInnerIssueCompFunc()} className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1_in_3item_1_item}>Create</div>
                                            <div onClick={() => setAddChildItems(false)} className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1_in_3item_2_item}>Cancel</div>
                                        </div>
                                    </div>
                            }

                            {
                                issuesInnerItems.length === 0
                                    ?
                                    null
                                    :
                                    <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2}>
                                        <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_1_in_1item}>
                                            Child Issues
                                        </div>
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
            </div>




            {/* <div>
                <FilterRightBarNavBarForthItemComp />
            </div> */}

            <div className={styles.filter_right_bar_third_in_1_item_content_4_item}>

                <div className={styles.filter_right_bar_third_in_1_item_content_4_item_1_item}>
                    Add comment
                </div>

                <div className={styles.filter_right_bar_nav_bar_third_item_content}>
                    <div className={styles.filter_right_bar_nav_bar_third_item_content_1_item}>
                        <FaRegUser />
                    </div>
                    <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item}>
                        <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_1_item}>
                            <input value={issueComment} onChange={(e) => setIssueComment(e.target.value)} onClick={() => setIssueCommentTp(true)} />
                        </div>

                        {
                            issueCommentTp
                                ?


                                <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item}>
                                    <div onClick={() => setIssueCommentTp(false)} className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}>
                                        <FaXmark />
                                    </div>
                                    <div onClick={() => {
                                        setIssueCommentTp(false)
                                        saveChangedIssueComment(issueComment, getBoardIssueItem.id, getBoardIssueItem.issueStatus)
                                    }
                                    }
                                        className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}
                                    >
                                        <FaCheck />
                                    </div>
                                </div>


                                :
                                null
                        }
                    </div>


                </div>

                <div className={styles.filter_right_bar_third_in_1_item_content_4_item_1_item}>
                    Comments
                </div>
                <div>
                    {
                        getBoardIssueItem.issueComments.length === 0
                            ?
                            <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_ovrl_2_item}>
                                <span>There is not a comment</span>
                            </div>
                            :
                            getBoardIssueItem.issueComments.map((val) => {
                                return (
                                    <IssueCommentComp deleteCommentIssueFunc={deleteCommentIssueFunc} changeCommentIssueFunc={changeCommentIssueFunc} issueCommentInfo={val} getBoardIssueItem={getBoardIssueItem} />
                                )
                            })
                    }
                </div>
            </div>
        </div >
    )

}



// export const FilterRightBarNavBarForthItemComp: React.FC<{}> = () => {
//     return (
//         <div className={styles.filter_right_bar_third_in_1_item_content_4_item}>
//             Activity
//         </div>
//     )
// }




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
        <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container}>
            <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_ovrl_1_item}>
                <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_1_item}>
                    <img src={subIssueInfo.issueTypePic} alt="" />
                </div>
                <div onClick={() => {
                    setInnerIssueChangeNameCont(true)
                }}
                    className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_ovrl_1_item_1_item}
                >
                    <FaPencil />
                </div>

                <div onClick={() => dispatch(changeGetBoardIssueItemFunc(subIssueInfo))} className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_ovrl_1_item_1_item}>
                    <FaEye />
                </div>

                <div>
                    {
                        !innerIssueChangeNameCont
                            ?
                            <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_2_item}>
                                {
                                    subIssueInfo.summary
                                }
                            </div>
                            :
                            <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item}>
                                <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_1_item_sec}>
                                    <input onChange={(e) => setInnerIssueChangeName(e.target.value)} />

                                </div>
                                <div className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item}>
                                    <div onClick={() => setInnerIssueChangeNameCont(false)} className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}>
                                        <FaXmark />
                                    </div>
                                    <div onClick={() => {
                                        setInnerIssueChangeNameCont(false)
                                        changeIssueInnerIssueSummartCompFunc(innerIssueChangeName, subIssueInfo.uniqId)
                                    }
                                    }
                                        className={styles.filter_right_bar_third_in_1_item_content_2_item_2_item_2_item_1_item}
                                    >
                                        <FaCheck />
                                    </div>
                                </div>

                            </div>
                    }
                </div>

            </div>
            <div className={styles.filter_right_bar_third_in_1_item_content_3_item_btns_content_txt_cont_in_ovrl_in_item_2_overlay_container_ovrl_2_item}>
                {
                    subIssueInfo.assignee === ''
                        ?
                        <span>
                            Unassigned
                        </span>
                        :
                        <span>
                            {subIssueInfo.assignee}
                        </span>
                }
                <span>
                    {
                        subIssueInfo.issueStatus
                    }
                </span>
            </div>

        </div>
    )
}


