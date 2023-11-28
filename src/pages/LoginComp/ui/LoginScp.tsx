import React, { useEffect, useState } from 'react'
import styles from './LoginStl.module.css'


import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FaAtlassian, FaCircle, FaJira, FaTriangleExclamation } from 'react-icons/fa6';
import { Button, Input } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import SignIn from '../../SignIn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { changeUserOtherInfoFBFunc } from 'entities/user/userReducer';
import { useDispatch } from 'react-redux';

import pic from '../images/1.png'
import { OwnProps } from './LoginTs.interface';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const LoginScp: React.FC<OwnProps> = ({ setLocalStorageHook }) => {

    const navigate = useNavigate()

    //  &&&

    const [userEmail, setUserEmail] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    const [errorMessage, setErrorMessage] = useState<string>('')



    const dispatch = useDispatch()

    const loginEmailPassword = () => {



        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {

                console.log(userCredential)

                // let frbsuser = userCredential.user

                console.log(userCredential)

                localStorage.setItem('user', JSON.stringify(userCredential.user));
                setLocalStorageHook(true)

                setErrorMessage('')

                dispatch(changeUserOtherInfoFBFunc({
                    name: userCredential.user.email?.slice(0, userCredential.user.email?.indexOf('@')),
                    picture: userCredential.user.photoURL ? null : pic,
                    email: userCredential.user.email,
                }))
            })

            .catch((error) => {

                setErrorMessage(error.message)
            })



        navigate('/jiraItems/userPage')


    }

    // &&& end


    return (
        <div className={styles.register_bg}>

            <div className={styles.register_content}>



                <div className={styles.register_content_1_item}>
                    <div className={styles.register_content_1_item_1_item}>
                        <FaJira />
                    </div>
                    <div className={styles.register_content_1_item_2_item}>
                        Jira
                    </div>
                </div>



                <div className={styles.register_content_2_item}>
                    Log out of your Atlassian account
                </div>


                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {

                        setUserEmail(values.email)
                        setUserPassword(values.password)
                        loginEmailPassword()
                    }}
                >
                    {({ }) => (
                        <Form style={{ width: '100%' }}>
                            <div className={styles.register_content_3_item_overlay}>
                                <div className={styles.register_content_3_item}>
                                    <div className={styles.register_content_3_item_1_item}>
                                        <Field name="email" placeholder="Please Write Your Email" />
                                        <div className={styles.register_content_3_item_1_item_1_item}>
                                            <ErrorMessage name="email" />
                                            {/* <FaTriangleExclamation /> */}
                                        </div>
                                    </div>
                                    <div className={styles.register_content_3_item_1_item}>
                                        <Field name="password" type='password' placeholder="Please Write Your Password" />
                                        <div className={styles.register_content_3_item_1_item_1_item}>
                                            <ErrorMessage name="password" />
                                            {/* <FaTriangleExclamation /> */}

                                        </div>
                                    </div>
                                </div>
                                {
                                    errorMessage !== ''
                                        ?
                                        <div className={styles.register_content_3_item_1_item_1_item_sec}>
                                            {
                                                errorMessage
                                            }
                                        </div>
                                        :
                                        null
                                }
                                <div className={styles.register_content_4_item}>
                                    <button type="submit">Log in</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>



                <SignIn setLocalStorageHook={setLocalStorageHook} />



                <div className={styles.register_content_5_item}>
                    <NavLink to='/'>
                        Log in to another account
                    </NavLink>
                </div>



                <div className={styles.register_content_6_item}>
                    <div className={styles.register_content_6_item_1_item}>
                        <FaAtlassian />
                    </div>
                    <div className={styles.register_content_6_item_2_item}>
                        ATLASSIAN
                    </div>
                </div>



                <div className={styles.register_content_6_item}>
                    One account for Trello, Jira, Confluence and <NavLink to='/'>more</NavLink>.
                </div>



                <div className={styles.register_content_7_item}>
                    <NavLink to='/'>
                        Privacy Policy
                    </NavLink>
                    <span><FaCircle /></span>
                    <NavLink to='/'>
                        User Notice
                    </NavLink>
                </div>

            </div>
        </div>
    )
}


export default LoginScp

