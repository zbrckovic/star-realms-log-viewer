import classNames from 'classnames'
import { CardName } from 'domain/card-name'
import React, { CSSProperties, FC, useMemo } from 'react'
import { cardImages } from 'domain/card-images'

import styles from './Card.module.sass'

interface Props {
    cardName?: CardName
    className?: string
    style?: CSSProperties
}

export const Card: FC<Props> = ({ className, style, cardName }) => {
    const cardImageUrl = useMemo(() => {
        if (cardName === undefined) return undefined
        return cardImages[cardName]
    }, [])

    return <div title={cardName} style={style} className={classNames(styles.root, className)}>
        {cardImageUrl !== undefined &&
            <img className={styles.image} src={cardImageUrl} alt={cardName}/>}
    </div>
}
