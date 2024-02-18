import { CardName } from 'domain/card-name'
import { Card } from 'pages/DecksPage/Card'
import React, { FC } from 'react'
import styles from './CardStack.module.sass'

interface Props {
    cardName: CardName
    quantity: number
}

export const CardStack: FC<Props> = ({ cardName, quantity }) =>
    <div className={styles.root}>
        <Card cardName={cardName}/>
        {quantity > 1 && <div className={styles.quantity}>{quantity}</div>}
    </div>
