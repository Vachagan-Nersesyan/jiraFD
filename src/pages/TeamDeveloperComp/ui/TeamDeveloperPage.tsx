import React, { useState, useEffect } from 'react'
import styles from './TeamDeveloperStyle.module.css'
import { useParams } from 'react-router-dom'
import { AppStateType } from 'entities/store/redux-store'
import { useSelector } from 'react-redux'
import { DeveloperInfoType, ProjectType } from 'entities/project/projectReducerTs.interface'
import { OwnProps } from './TeamDeveloperTs.interface'


const TeamDeveloperPage: React.FC<OwnProps> = () => {

    const { id } = useParams()


    const projectTeamPgArr = useSelector((state: AppStateType) => state.project.projectArr)

    const [developerHkInfo, setDeveloperHkInfo] = useState<DeveloperInfoType | undefined>(undefined)

    console.log(developerHkInfo)

    useEffect(() => {
        projectTeamPgArr.map((val) => {
            val.team?.teamPeaoples.map((val1) => {
                if (val1.uniqId === id) {
                    setDeveloperHkInfo(val1)
                }
            })
        })
    }, [id])


    return (
        <div style={{ paddingTop: '10em' }}>
            {
                developerHkInfo?.name
            }
            {
                developerHkInfo?.teamName
            }
            {
                developerHkInfo?.id
            }
        </div>
    )
}


export default TeamDeveloperPage


