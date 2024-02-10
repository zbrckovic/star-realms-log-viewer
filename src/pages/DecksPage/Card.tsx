import classNames from 'classnames'
import { CardName } from 'log-language/domain/card-name'
import React, { CSSProperties, FC } from 'react'

import styles from './Card.module.sass'

interface Props {
    cardName?: CardName
    className?: string
    style?: CSSProperties
}

export const Card: FC<Props> = ({ className, style, cardName }) =>
    <div style={style} className={classNames(styles.root, className)}>
        {cardName !== undefined && <label className={styles.label}>{cardName}</label>}
    </div>

