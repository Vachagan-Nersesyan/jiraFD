import React from 'react'
import styles from './LoaderStl.module.css'

import loaderGif from '../images/1.gif'

const LoaderComp: React.FC<OwnProps> = () => {
    return (
        <div className={styles.loader_gif_comp_content}>
            <img src={loaderGif} />
        </div>
    )
}

export default LoaderComp

type OwnProps = {}