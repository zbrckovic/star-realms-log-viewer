import classNames from 'classnames'
import { config } from 'config'
import _ from 'lodash'
import { CardName } from 'domain/card-name'
import React, { CSSProperties, FC, useMemo } from 'react'

import styles from './Card.module.sass'

interface Props {
    cardName?: CardName
    className?: string
    style?: CSSProperties
}

export const Card: FC<Props> = ({ className, style, cardName }) => {
    const cardImageUrl = useMemo(() => {
        if (cardName === undefined) return undefined
        return config.cardImagesUrl + `/${convertCardNameToUrlSegment(cardName)}`
    }, [])

    return <div style={style} className={classNames(styles.root, className)}>
        {cardImageUrl !== undefined && <img src={cardImageUrl} alt={cardName}/>}
    </div>
}

const convertCardNameToUrlSegment = (cardName: string) => {
    const adaptedName = _.replace(cardName, / /, '')
    return `SRHALF_Card_${adaptedName}.jpg`
}
