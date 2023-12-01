import React, { useState } from 'react'
import styles from './FilterRigthBarThirdItemStl.module.css'
import { IssuesType } from 'entities/issues/issuesReducerTs.interface';
import { Col, Collapse, CollapseProps, Row, Select, SelectProps } from 'antd';
import { useSelector } from 'react-redux';
import { AppStateType, useAppDispatch } from 'entities/store/redux-store';
import { useDispatch } from 'react-redux';
import { projectSlice } from 'entities/project/projectReducer';
import { AddDesctiptionIssFuncType } from 'pages/BoardComp/ui/BoardTs.interface';
import { OwnProps } from './FilterRightBarThirdItemTs.interface';
import { addDesctiptionIssFunc, fetchProjects } from 'entities/project/projectReducerThunks';


export const FilterRightBarThirdItemComp: React.FC<OwnProps> = ({ }) => {


    const getBoardIssueCompItem = useSelector((state: AppStateType) => state.project.getBoardIssueItem)

    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()


    const [filterRightBartiLabels, setFilterRightBartiLabels] = useState<boolean>(false)

    let options: SelectProps['options'] = getBoardIssueCompItem.description?.map((val) => {
        return (
            {
                label: val,
                value: val,
            }
        )
    })


    const handleChange = async (arr: Array<string>, id: number, boardName: string) => {
        await aDispatch(addDesctiptionIssFunc({ arr, id, boardName }))
        await aDispatch(fetchProjects())

        setFilterRightBartiLabels(false)
    }


    const LabelSelectComp: React.FC = () => {
        return (

            <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="Tags Mode"
                onChange={(value) => {
                    handleChange(value, getBoardIssueCompItem.id, getBoardIssueCompItem.issueStatus)
                }}
                options={
                    getBoardIssueCompItem.description?.map((val) => {
                        return (
                            {
                                label: val,
                                value: val,
                            }
                        )
                    })
                }
            />


        )
    }



    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Details',
            children: (
                <div>
                    <div className={styles.filt_rig_s_itm_content_ovrl}>
                        <Row>
                            <Col span={12} className={styles.filt_rig_s_itm_content}>
                                Labels
                            </Col>
                            <Col span={12}>
                                {
                                    !filterRightBartiLabels
                                        ?
                                        <div onClick={() => {
                                            setFilterRightBartiLabels(true)
                                        }}
                                            className={styles.filt_rig_s_itm_content_sc_tp_lbl_item}
                                        >
                                            {
                                                getBoardIssueCompItem.description?.length === 0
                                                    ?
                                                    <div className={styles.filt_rig_s_itm_content}>
                                                        None
                                                    </div>
                                                    :
                                                    getBoardIssueCompItem.description?.map((val) => {
                                                        return (
                                                            <div className={styles.filt_rig_s_itm_content_sc_tp}>
                                                                {val}
                                                            </div>
                                                        )
                                                    })

                                            }

                                        </div>
                                        :
                                        <div>
                                            <LabelSelectComp />
                                        </div>
                                }

                            </Col>
                        </Row>
                    </div>
                    <div className={styles.filt_rig_s_itm_content_ovrl}>
                        <Row>
                            <Col span={12} className={styles.filt_rig_s_itm_content}>
                                Sprint
                            </Col>
                            <Col span={12}>
                                <div className={styles.filt_rig_s_itm_content}>
                                    {getBoardIssueCompItem.issuesProject}
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div >
            )
        }
    ];


    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;

}



