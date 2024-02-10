import _ from 'lodash'
import { CardName } from 'log-language/domain/card-name'
import { Card } from 'pages/DecksPage/Card'
import React, { FC, useMemo } from 'react'
import { cardHeight, cardStackOffset } from 'styles/definitions'
import styles from './CardStack.module.sass'

interface Props {
    cardName: CardName
    quantity: number
}

export const CardStack: FC<Props> = ({ cardName, quantity }) => {
    const bottomCardIndices = useMemo(() => _.range(0, quantity - 1), [])

    return <div className={styles.root} style={{
        height: cardHeight + (cardStackOffset * (quantity - 1))
    }}>
        {
            bottomCardIndices.map((i) =>
                <Card
                    key={i}
                    className={styles.card}
                    style={{ transform: `translateY(${i * cardStackOffset}px)` }}
                />
            )
        }
        <Card
            cardName={cardName}
            style={{ transform: `translateY(${(quantity - 1) * cardStackOffset}px)` }}
        />
    </div>
}
