import classNames from 'classnames'
import { config } from 'config'
import React, { FC } from 'react'
import styles from './Version.module.sass'

interface Props {
    className?: string
}

export const Version: FC<Props> = ({ className }) => (
    <div className={classNames(styles.root, className)} title={config.gitCommitHash}>
        <span>{config.mode}</span>
        <span>{config.version}</span>
        <span>{config.gitCommitDate.toDateString()}</span>
    </div>
)
