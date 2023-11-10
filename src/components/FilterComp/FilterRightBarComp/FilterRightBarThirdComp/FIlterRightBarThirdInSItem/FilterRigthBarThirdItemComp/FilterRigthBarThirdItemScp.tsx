import React, { useState } from 'react'
import styles from './FilterRigthBarThirdItemStl.module.css'
import { IssuesType } from '../../../../../../redux/issuesReducer';
import { Col, Collapse, CollapseProps, Row, Select, SelectProps } from 'antd';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../../../redux/redux-store';
import { useDispatch } from 'react-redux';
import { projectSlice } from '../../../../../../redux/projectReducer';
import { AddDesctiptionIssFuncType } from '../../../../../BoardComp/BoardScp';


export const FilterRightBarThirdItemComp: React.FC<OwnProps> = ({ }) => {


    const getBoardIssueCompItem = useSelector((state: AppStateType) => state.project.getBoardIssueItem)

    const dispatch = useDispatch()

    const [filterRightBartiLabels, setFilterRightBartiLabels] = useState<boolean>(false)

    let options: SelectProps['options'] = getBoardIssueCompItem.description?.map((val) => {
        return (
            {
                label: val,
                value: val,
            }
        )
    })


    const handleChange = (arr: Array<string>, id: number, boardName: string) => {
        dispatch(projectSlice.actions.addDesctiptionIssFunc({ arr, id, boardName }))
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
                                        }}>
                                            {
                                                getBoardIssueCompItem.description?.length === 0
                                                    ?
                                                    <div>
                                                        None
                                                    </div>
                                                    :
                                                    getBoardIssueCompItem.description?.map((val) => {
                                                        return (
                                                            <div>
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
                                <div>
                                    {getBoardIssueCompItem.issuesProject}
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={styles.filt_rig_s_itm_content_ovrl}>
                        <Row>
                            <Col span={12} className={styles.filt_rig_s_itm_content}>
                                Story point estimate
                            </Col>
                            <Col span={12}>
                                <div>
                                    {getBoardIssueCompItem.storyPoint}
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


type OwnProps = {
}

