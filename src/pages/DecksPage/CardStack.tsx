import { CardName } from 'domain/card-name'
import { Card } from 'pages/DecksPage/Card'
import React, { FC } from 'react'
import styles from './CardStack.module.sass'

interface Props {
    cardName: CardName
    quantity: number
    acquired: number
    scrapped: number
}

export const CardStack: FC<Props> = ({ cardName, quantity, acquired, scrapped }) =>
    <div className={styles.root}>
        <header className={styles.header}>
            {acquired > 0 && <div className={styles.acquired}>{acquired}</div>}
            {scrapped > 0 && <div className={styles.scrapped}>-{scrapped}</div>}
        </header>
        <Card cardName={cardName}/>
        <footer className={styles.footer}>
            <div className={styles.cardname}>{cardName}</div>
            {quantity > 1 && <div className={styles.quantity}>{quantity}</div>}
        </footer>
    </div>
