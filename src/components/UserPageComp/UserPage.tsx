import React, { useEffect, useState } from 'react'
import styles from './UserPageStyles.module.css'
import { Button, Col, Input, Row } from 'antd'
import { FaAddressBook, FaAmazon, FaBagShopping, FaBuilding, FaCheck, FaLocationDot, FaMessage, FaRegSnowflake, FaUser, FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { IssuesType } from '../../redux/issuesReducer'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { useDispatch } from 'react-redux'
import { changeUserInfo } from '../../redux/userReducer'
import { changeGetBoardIssueItemFunc, setCurrentProject } from '../../redux/projectReducer'


let issuesUserPageArr: Array<IssuesType> = []

const UserPageComp: React.FC<OwnProps> = () => {

    const issuesArrUspgComp = useSelector((state: AppStateType) => state.project.projectArr)
    const userInfo = useSelector((state: AppStateType) => state.user.info)



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
            text: userInfo.contact

        }

    ]

    useEffect(() => {

        issuesUserPageArr = []

        issuesArrUspgComp.map((val) => {

            val.board.boardArr.map((val1) => {

                val1.boardIssue.map((val2) => {

                    issuesUserPageArr.push(val2)
                })
            })
        })
        console.log(issuesUserPageArr)
    }, [])

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
                                    <img src='https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png' />
                                </div>

                            </div>
                            <div className={styles.userpage_content_container_in_1_item_2_item}>
                                Vachagan
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
                    <Col span={17}>
                        <div>
                            <div>
                                Worked on
                            </div>
                            <div>
                                Others will only see what they can access.
                            </div>
                            <div>
                                {
                                    issuesUserPageArr.map((val) => {
                                        return (
                                            <NavLink onClick={() => dispatch(changeGetBoardIssueItemFunc(val))} to={`/jiraItems/issues/${val.id}`}>
                                                {val.summary}
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                Places you work in
                            </div>
                            <div>
                                {
                                    issuesArrUspgComp.map((val) => {
                                        return (
                                            <NavLink onClick={() => dispatch(setCurrentProject(val.id))} to={`/jiraItems/board/${val.id}`}>
                                                {val.name}
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div>
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










