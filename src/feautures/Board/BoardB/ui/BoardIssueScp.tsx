import React, { useEffect, useState } from 'react'
import styles from './BoardIssueStl.module.css'
import { Avatar, Button, Dropdown, Input, InputNumber, List, Modal, Select, SelectProps, Space } from 'antd';
import { FaCheck, FaEllipsis, FaExpand, FaFlag, FaPen, FaUser, FaXmark } from 'react-icons/fa6';

import { IssuesType } from 'entities/issues/issuesReducerTs.interface';
import { ProjectType } from 'entities/project/projectReducerTs.interface';
import { IssueInCntComp } from '../../../../pages/IssuesComp/ui/IssuesScp';
import { AddDesctiptionIssFuncType, AddIssueFlagFuncArgsType, ChangeIssNameFuncType, DeleteIssueFuncArgsType, GetBoardIssueFuncType } from 'pages/BoardComp/ui/BoardTs.interface';
import useSelection from 'antd/es/table/hooks/useSelection';
import { AppStateType, useAppDispatch } from '../../../../entities/store/redux-store';
import { useDispatch, useSelector } from 'react-redux';

import { BoardArrType } from 'entities/project/projectReducerTs.interface';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { OwnProps } from './BoardIssueTs.interface';
import { addDesctiptionIssFunc, addIssueFlagFunc, changeIssNameFunc, deleteIssueFunc, fetchProjects, getBoardIssueFunc } from 'entities/project/projectReducerThunks';


const BoardIssueComp: React.FC<OwnProps> = ({ boardArr, getBoardIssueItem, valueInd, val, val2 }) => {

    const aDispatch = useAppDispatch()

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    let options: SelectProps['options'] = val2.description?.map((val) => {
        return (
            {
                label: val,
                value: val,
            }
        )
    })

    const [currentIssue, setCurrentIssue] = useState<IssuesType | null>(null)

    const handleChange = async (arr: Array<string>, id: number, boardName: string) => {
        await aDispatch(addDesctiptionIssFunc({ arr, id, boardName }))
        await aDispatch(fetchProjects())

    }

    const showIssueModal = () => {
        setIsIssueModalOpen(true);
        setCurrentIssue(val2)
    };

    const handleIssueOk = () => {
        setIsIssueModalOpen(false);
    };

    const handleIssueCancel = () => {
        setIsIssueModalOpen(false);
    };

    const getBoardIssueCompFunc: (id: string, boardName: string) => void = async (id: string, boardName: string) => {

        await aDispatch(getBoardIssueFunc({ id, boardName }))
        await aDispatch(fetchProjects())


    }


    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isIssueModalOpen, setIsIssueModalOpen] = useState<boolean>(false);
    const [changeIssNameOpen, setChangeIssNameOpen] = useState<boolean>(false);
    const [changeIssueName, setChangeIssueName] = useState<string>('')





    const changeIssueNameFunc: (str: string, id: number, boardName: string) => void = async (str: string, id: number, boardName: string) => {
        str = changeIssueName
        await aDispatch(changeIssNameFunc({ str, id, boardName }))
        await aDispatch(fetchProjects())

    }

    const addFlagCompFunc: (id: number, boardName: string) => void = async (id: number, boardName: string) => {
        await aDispatch(addIssueFlagFunc({ id, boardName }))
        await aDispatch(fetchProjects())
    }

    const deleteIssueCompFunc: (id: number, boardName: string) => void = async (id: number, boardName: string) => {
        await aDispatch(deleteIssueFunc({ id, boardName }))
        await aDispatch(fetchProjects())

    }


    // drag and drop start



    // drag and drop end

    // let c = useSelector((state: AppStateType) => state.boards.boardArr)

    // let o: any = null
    // // console.log(o)
    // for (let i in c) {
    //     if (c[i].id === valueInd) {
    //         o = c[i]
    //         console.log(c[i])
    //     }
    // }

    return (
        // <DragDropContext

        // >

        // <Droppable droppableId={val2.id + ''} >
        //     {
        //         (provided) => (
        //             <div ref={provided.innerRef} {...provided.droppableProps}>

        <Draggable
            key={val2.uniqId}
            draggableId={val2.uniqId + ''}
            index={val2.id}
        >
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div>
                            <div key={val2.id} style={{ backgroundColor: !val2.flag ? '#FFFFFF' : '#F8E6A0' }} className={styles.timeline_content_in_forth_card_section_in_item_1_item_other_itm}>
                                <div className={styles.timeline_content_in_forth_card_section_in_item_1_item}>
                                    {
                                        !changeIssNameOpen ?
                                            <div className={styles.timeline_content_in_forth_card_section_in_item_1_item_content}>
                                                <div className={styles.timeline_content_in_forth_card_section_in_item_1_item_content_1_item}>
                                                    <div className={styles.timeline_content_in_forth_card_section_in_item_1_item_content_1_item_title}>
                                                        {val2.summary}
                                                    </div>

                                                    <div onClick={() => setChangeIssNameOpen(true)} className={styles.timeline_content_in_forth_card_section_in_item_1_item_content_1_item_icon}>
                                                        <FaPen />
                                                    </div>
                                                </div>
                                                <Button>
                                                    <Dropdown menu={{
                                                        items: [
                                                            {
                                                                label: (
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                                                        Copy issue link
                                                                    </a>
                                                                ),
                                                                key: '1',
                                                            },
                                                            {
                                                                label: (
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                                                        Copy issue key
                                                                    </a>
                                                                ),
                                                                key: '2',
                                                            },
                                                            {
                                                                type: 'divider'
                                                            },
                                                            {
                                                                label: (
                                                                    <div onClick={() => addFlagCompFunc(val2.id, val.uniqText)}>
                                                                        {
                                                                            !val2.flag ? <span>Add flag</span> : <span>Remove flag</span>
                                                                        }
                                                                    </div>
                                                                ),
                                                                key: '3',
                                                            },
                                                            {
                                                                label: (
                                                                    <div onClick={() => setIsModalOpen(true)}>
                                                                        Add label
                                                                    </div>
                                                                ),
                                                                key: '4',
                                                            },
                                                            {
                                                                label: (
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                                                        Add parent
                                                                    </a>
                                                                ),
                                                                key: '5',
                                                            },

                                                            {
                                                                type: 'divider'
                                                            },
                                                            {
                                                                label: (
                                                                    <div onClick={() => deleteIssueCompFunc(val2.id, val.uniqText)}>
                                                                        Delete
                                                                    </div>
                                                                ),
                                                                key: '6',
                                                            },
                                                        ]
                                                    }}>
                                                        <a onClick={(e) => e.preventDefault()}>
                                                            <Space className={styles.timeline_content_in_forth_card_section_in_item_1_item_ellipsis}>
                                                                <FaEllipsis />
                                                            </Space>
                                                        </a>
                                                    </Dropdown>
                                                </Button>

                                            </div>
                                            :
                                            <div className={styles.timeline_content_in_forth_card_section_in_item_1change_name}>
                                                <div className={styles.timeline_content_in_forth_card_section_in_item_1change_name_in_1_item}>
                                                    <Input placeholder="Please write issue's name" onChange={(e) => setChangeIssueName(e.target.value)} />
                                                </div>
                                                <div className={styles.timeline_content_in_forth_card_section_in_item_1change_name_in_2_item}>
                                                    <div onClick={() => setChangeIssNameOpen(false)} className={styles.board_create_issue_feoq_content_issue_content_2_item_ovrl_2_item}>
                                                        <FaXmark />
                                                    </div>
                                                    <div onClick={() => {
                                                        console.log(valueInd, 'valueIndvalueIndvalueInd')
                                                        changeIssueNameFunc(changeIssueName, valueInd, val.uniqText)
                                                        setChangeIssNameOpen(false)
                                                    }} className={styles.board_create_issue_feoq_content_issue_content_2_item_ovrl_1_item}>
                                                        <FaCheck />
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                </div>

                                {/* set styles */}
                                <div className={styles.board_issue_description_items_content}>
                                    {
                                        val2.description?.map((val) => {
                                            return (
                                                <div className={styles.board_issue_description_items_content_in_item}>
                                                    {val}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.timeline_content_in_forth_card_section_in_item_2_item}>
                                    <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_title}>
                                        <img src={val2.issueTypePic} /> {val2.issueShortName}
                                    </div>
                                    <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_in_sec_item}>
                                        <div className={styles.timeline_content_in_forth_card_section_in_item_2_item_in_sec_item_flag}>
                                            {val2.flag ? <FaFlag /> : null}
                                        </div>
                                        <div onClick={() => {
                                            showIssueModal()
                                            getBoardIssueCompFunc(val2.uniqId, val.uniqText)
                                        }

                                        }
                                            className={styles.timeline_content_in_forth_card_section_in_item_2_item_in_sec_item_in_itvd_item}
                                        >
                                            {
                                                !val2.assignee ? <FaExpand /> : null
                                            }
                                        </div>
                                    </div>
                                    <Modal
                                        className={styles.board_issue_modal_itm}
                                        open={isIssueModalOpen} onOk={handleIssueOk} onCancel={handleIssueCancel}>
                                        <div>
                                            <IssueInCntComp />
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <Modal open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>

                                <div className={styles.label_modal_veqd_content_item_1}>
                                    Add labels to {val2.summary}
                                </div>
                                <div className={styles.label_modal_veqd_content_item_2}>
                                    Begin typing to find and create labels
                                </div>
                                <Select
                                    mode="tags"
                                    className={styles.label_modal_veqd_content_item_3}
                                    placeholder="Labels"
                                    style={{ width: '100%' }}
                                    options={
                                        val2.description?.map((val) => {
                                            return (
                                                {
                                                    label: val,
                                                    value: val,
                                                }
                                            )
                                        })
                                    }
                                    onChange={(value) => {
                                        handleChange(value, val2.id, val.uniqText)
                                    }}
                                />
                            </Modal>


                        </div>
                    </div>
                )
            }

        </Draggable>

        //             </div>
        //         )
        //     }

        // </Droppable>



        // </DragDropContext>

    )
}



export default BoardIssueComp
