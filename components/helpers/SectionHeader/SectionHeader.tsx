import React from 'react'
import styles from "./sectionheader.module.css"

interface Props {
    title: string,
    fontSize: string
}

const SectionHeader: React.FC<Props> = ({ title, fontSize }) => {


    return (
        <div className={styles["header"]}
            style={{
                fontSize: fontSize
            }}
        >
            <p>{title}</p>
        </div>
    )
}

export default SectionHeader