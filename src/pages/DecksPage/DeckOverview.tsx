import { CardName } from 'domain/card-name'
import { Deck } from 'domain/deck'
import { CardStack } from 'pages/DecksPage/CardStack'
import React, { FC } from 'react'
import styles from './DeckOverview.module.sass'

interface Props {
    deck: Deck
    acquired: Deck
    scrapped: Deck
}

export const DeckOverview: FC<Props> = ({ deck }) =>
    <div className={styles.root}>
        {
            Object
                .entries(deck)
                .map(([cardName, quantity]) => (
                    <CardStack
                        key={cardName}
                        cardName={cardName as CardName}
                        quantity={quantity}
                    />
                ))
        }
    </div>
