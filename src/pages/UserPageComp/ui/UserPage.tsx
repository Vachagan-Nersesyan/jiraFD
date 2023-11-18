import React, { useEffect, useState } from 'react'
import styles from './UserPageStyles.module.css'
import { Button, Col, Input, Row } from 'antd'
import { FaAddressBook, FaAmazon, FaBagShopping, FaBuilding, FaCheck, FaLocationDot, FaMessage, FaRegSnowflake, FaUser, FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { IssuesType } from '../../../entities/issues/issuesReducer'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../entities/store/redux-store'
import { useDispatch } from 'react-redux'
import { changeUserInfo } from '../../../entities/user/userReducer'
import { changeGetBoardIssueItemFunc, setCurrentProject } from '../../../entities/project/projectReducer'



const UserPageComp: React.FC<OwnProps> = () => {

    const issuesArrUspgComp = useSelector((state: AppStateType) => state.project.projectArr)
    const userInfo = useSelector((state: AppStateType) => state.user.info)

    const [issuesUserPageArr, setIssuesUserPageArr] = useState<Array<IssuesType>>([])

    const dispatch = useDispatch()

    let userPageInfoCompArr = [
        {
            id: 0,
            type: 'title',
            title: 'ABOUT'
        },
        {
            id: 1,
            icon: <FaBagShopping />,
            title: 'IT Support Manager',
            type: 'information',
            text: userInfo.itSupportManager
        },
        {
            id: 2,
            icon: <FaRegSnowflake />,
            title: 'Your department',
            type: 'information',
            text: userInfo.department
        },
        {
            id: 3,
            icon: <FaBuilding />,
            title: 'Your organization',
            type: 'information',
            text: userInfo.organization
        },
        {
            id: 4,
            icon: <FaLocationDot />,
            title: 'Your location',
            type: 'information',
            text: userInfo.location
        },
        {
            id: 5,
            type: 'title',
            title: 'CONTACT',

        },
        {
            id: 6,
            icon: <FaAddressBook />,
            title: 'email',
            type: 'information',
            text: userInfo.email

        }

    ]



    useEffect(() => {

        let issuesUserPageFstArr: Array<IssuesType> = []

        issuesArrUspgComp.map((val) => {

            val.board.boardArr.map((val1) => {

                val1.boardIssue.map((val2) => {

                    issuesUserPageFstArr.push(val2)
                })
            })
        })

        setIssuesUserPageArr(issuesUserPageFstArr)
        console.log(issuesUserPageArr)

    }, [issuesArrUspgComp])

    const [userInfoHk, setUserInfoHk] = useState<string>('')

    const [userActiveInfo, setUserActiveInfo] = useState<number | null>(null)

    const changeCurrentUserInfoFunc: (str: string) => void = (str: string) => {
        dispatch(changeUserInfo({ str, infoName: userInfoHk }))
    }

    return (
        <div className={styles.userpage_content}>
            <div className={styles.userpage_content_first_content}>

            </div>

            <div className={styles.userpage_content_container}>
                <Row>
                    <Col span={7} className={styles.userpage_content_container_first_col}>
                        <div className={styles.userpage_content_container_in_1_item}>
                            <div className={styles.userpage_content_container_in_1_item_1_item}>
                                <div className={styles.userpage_content_container_in_1_item_1_item}>
                                    <img src={`${userInfo.picture}`} />
                                </div>

                            </div>
                            <div className={styles.userpage_content_container_in_1_item_2_item}>
                                {userInfo.name}
                            </div>
                            <div className={styles.userpage_content_container_in_1_item_3_item}>
                                <Button>Manage your account</Button>
                            </div>
                        </div>
                        <div className={styles.userpage_content_container_in_2_item}>
                            <div className={styles.userpage_content_container_in_2_item_1_item}>
                                {
                                    userPageInfoCompArr.map((val) => {
                                        if (val.type === 'title') {
                                            return (
                                                <div className={styles.userpage_content_container_in_2_item_1_item_title}>
                                                    {val.title}
                                                </div>
                                            )
                                        } else {
                                            if (userActiveInfo === val.id) {
                                                return (
                                                    <div className={styles.userpage_content_container_in_2_item_1_item_inp}>
                                                        <div className={styles.userpage_content_container_in_2_item_1_item_inp_1_item}>
                                                            <Input onChange={(e) => setUserInfoHk(e.target.value)} />
                                                        </div>
                                                        <div className={styles.userpage_content_container_in_2_item_1_item_inp_2_item}>
                                                            <button onClick={() => setUserActiveInfo(null)}><FaXmark /></button>
                                                            <button onClick={() => {
                                                                setUserActiveInfo(null)
                                                                changeCurrentUserInfoFunc(val.title)
                                                            }}><FaCheck /></button>
                                                        </div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div onClick={() => setUserActiveInfo(val.id)} className={styles.userpage_content_container_in_2_item_2_item}>
                                                        <div className={styles.userpage_content_container_in_2_item_2_item_ovrl}>
                                                            <div className={styles.userpage_content_container_in_2_item_2_item_2_item}>
                                                                {val.icon}
                                                            </div>
                                                            <div className={styles.userpage_content_container_in_2_item_2_item_1_item}>
                                                                {val.title}
                                                            </div>

                                                        </div>
                                                        <div className={styles.userpage_content_container_in_2_item_2_item_3_item}>
                                                            {val.text}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                            <NavLink to={'/'} className={styles.userpage_content_container_in_privacy_policy}>
                                View privacy policy
                            </NavLink>
                        </div>
                    </Col>
                    <Col span={17} className={styles.userpage_content_container_second_col}>
                        <div className={styles.userpage_content_container_second_col_content}>
                            <div className={styles.userpage_content_container_second_col_content_title}>
                                Worked on
                            </div>
                            <div className={styles.userpage_content_container_second_col_content_subtitle}>
                                Others will only see what they can access.
                            </div>
                            <div className={styles.userpage_content_container_second_col_content_third_item}>
                                {
                                    issuesUserPageArr.length === 0
                                        ?
                                        <div className={styles.userpage_content_container_second_col_content_subtitle}>
                                            There is not a project
                                        </div>
                                        :
                                        issuesUserPageArr.map((val) => {
                                            return (
                                                <div className={styles.userpage_content_container_second_col_content_third_item_in_content}>
                                                    <NavLink onClick={() => dispatch(changeGetBoardIssueItemFunc(val))} to={`/jiraItems/issues/${val.id}`}>

                                                        <div className={styles.userpage_content_container_second_col_content_third_item_in_content_in_item}>
                                                            <div className={styles.userpage_content_container_second_col_content_third_item_in_content_in_item_pic}>
                                                                <img src={val.issueTypePic} />
                                                            </div>
                                                            <div className={styles.userpage_content_container_second_col_content_third_item_in_content_in_item_txt_content}>
                                                                <div className={styles.userpage_content_container_second_col_content_third_item_in_content_in_item_txt_title}>
                                                                    {val.summary}
                                                                </div>
                                                                <div className={styles.userpage_content_container_second_col_content_third_item_in_content_in_item_txt_subtitle}>
                                                                    {val.issuesProject}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <div className={styles.userpage_content_container_second_col_content}>
                            <div className={styles.userpage_content_container_second_col_content_title}>
                                Places you work in
                            </div>
                            <div className={styles.userpage_content_container_second_col_content_project_items}>
                                {
                                    issuesArrUspgComp.length === 0
                                        ?
                                        <div className={styles.userpage_content_container_second_col_content_subtitle}>
                                            There is not a project
                                        </div>
                                        :
                                        issuesArrUspgComp.map((val) => {
                                            return (
                                                <div className={styles.userpage_content_container_second_col_content_project_items_in_content}>
                                                    <NavLink onClick={() => dispatch(setCurrentProject(val.id))} to={`/jiraItems/board/${val.id}`}>
                                                        <div className={styles.userpage_content_container_second_col_content_project_items_in_content_in_item}>
                                                            <div className={styles.userpage_content_container_second_col_content_project_items_in_content_in_item_1_item}>
                                                                <img src={val.picture} />
                                                            </div>
                                                            <div className={styles.userpage_content_container_second_col_content_project_items_in_content_in_item_2_item}>
                                                                {val.name}
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <div className={styles.userpage_content_container_second_col_content}>
                            <div className={styles.userpage_content_container_second_col_content_subtitle}>
                                Tell us about your experience with profiles and search within this directory.
                            </div>
                            <Button>
                                Send feedback
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}


export default UserPageComp

type OwnProps = {}










