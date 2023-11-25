import React, { useEffect, useState } from 'react'
import styles from './BoardIssueStl.module.css'
import { Avatar, Button, Dropdown, Input, InputNumber, List, Modal, Select, SelectProps, Space } from 'antd';
import { FaCheck, FaEllipsis, FaPen, FaUser, FaXmark } from 'react-icons/fa6';

import { IssuesType } from 'entities/issues/issuesReducerTs.interface';
import { ProjectType } from 'entities/project/projectReducerTs.interface';
import { IssueInCntComp } from '../../../../pages/IssuesComp/ui/IssuesScp';
import { AddDesctiptionIssFuncType, AddIssueFlagFuncArgsType, ChangeIssNameFuncType, DeleteIssueFuncArgsType, GetBoardIssueFuncType } from 'pages/BoardComp/ui/BoardTs.interface';
import useSelection from 'antd/es/table/hooks/useSelection';
import { AppStateType } from '../../../../entities/store/redux-store';
import { useDispatch, useSelector } from 'react-redux';

import { BoardArrType } from 'entities/project/projectReducerTs.interface';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { OwnProps } from './BoardIssueTs.interface';


const BoardIssueComp: React.FC<OwnProps> = ({ boardArr, getBoardIssueFunc, getBoardIssueItem, deleteIssueFunc, addIssueFlagFunc, valueInd, val, addDesctiptionIssFunc, val2, changeIssNameFunc }) => {



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

    const handleChange = (arr: Array<string>, id: number, boardName: string) => {
        addDesctiptionIssFunc({ arr, id, boardName })
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

    const getBoardIssueCompFunc: (id: number, boardName: string) => void = (id: number, boardName: string) => {

        getBoardIssueFunc({ id, boardName })

    }


    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isIssueModalOpen, setIsIssueModalOpen] = useState<boolean>(false);
    const [changeIssNameOpen, setChangeIssNameOpen] = useState<boolean>(false);
    const [changeIssueName, setChangeIssueName] = useState<string>('')





    const changeIssueNameFunc: (str: string, id: number, boardName: string) => void = (str: string, id: number, boardName: string) => {
        str = changeIssueName
        changeIssNameFunc({ str, id, boardName })
    }

    const addFlagCompFunc: (id: number, boardName: string) => void = (id: number, boardName: string) => {
        addIssueFlagFunc({ id, boardName })
    }

    const deleteIssueCompFunc: (id: number, boardName: string) => void = (id: number, boardName: string) => {
        deleteIssueFunc({ id, boardName })
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
                            <div key={val2.id} style={{ backgroundColor: !val2.flag ? '#FFFFFF' : 'red' }} className={styles.timeline_content_in_forth_card_section_in_item_1_item_other_itm}>
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
                                                    <Input placeholder="Basic usage" onChange={(e) => setChangeIssueName(e.target.value)} />
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
                                <div>
                                    {
                                        val2.description?.map((val) => {
                                            return (
                                                <div>
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
                                        <InputNumber
                                            value={val2.storyPoint}
                                            className={styles.timeline_content_in_forth_card_section_in_item_2_item_inp_nm}
                                            min={1}
                                            max={10}
                                        />
                                        <Button type="primary" onClick={() => {
                                            showIssueModal()
                                            getBoardIssueCompFunc(val2.id, val.uniqText)
                                        }
                                        }
                                        >
                                            {
                                                !val2.assignee ? <FaUser /> : null
                                            }
                                        </Button>
                                    </div>
                                    <Modal
                                        className={styles.board_issue_modal_itm}
                                        title="Basic Modal"
                                        open={isIssueModalOpen} onOk={handleIssueOk} onCancel={handleIssueCancel}>
                                        <div>
                                            change modal items
                                            <IssueInCntComp />
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <Modal title="Basic Modal" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
                                <Select
                                    mode="tags"

                                    placeholder="Please select"
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
