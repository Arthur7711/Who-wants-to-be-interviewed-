import React from 'react'
import styles from './Questions.module.css'

export default function Questions({item}) {
    return (
        <div className={styles.questions}>
            {item}
        </div>
    )
}
