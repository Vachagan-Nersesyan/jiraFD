import React, { useState, useEffect } from 'react'
import styles from './TeamPageStyle.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { ProjectType, TeamType } from 'entities/project/projectReducerTs.interface'
import { OwnProps } from './TeamTs.interface'

const TeamPage: React.FC<OwnProps> = () => {



    const { id } = useParams()

    const projectTeamPgArr = useSelector((state: AppStateType) => state.project.projectArr)

    const [activeTeam, setActiveTeam] = useState<ProjectType | undefined>(undefined)

    console.log(activeTeam)

    useEffect(() => {
        projectTeamPgArr.map((val) => {
            if (val.team?.id === id) {
                setActiveTeam(val)
            }
        })
    }, [id])

    console.log(id)

    return (
        <div style={{ paddingTop: '10em' }}>
            <div>
                {activeTeam?.name}
            </div>
            <div>
                {activeTeam?.team?.teamName}
            </div>
            <div>
                {
                    activeTeam?.team?.teamPeaoples.length === 0
                        ?
                        <div>
                            There isnt developers in this team
                        </div>
                        :
                        <div>
                            {
                                activeTeam?.team?.teamPeaoples.map((val) => {
                                    return (
                                        <div>
                                            <NavLink to={`/jiraItems/teamDeveloper/${val.uniqId}`}>
                                                {val.name}
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>

                }
            </div>
        </div>
    )
}


export default TeamPage

