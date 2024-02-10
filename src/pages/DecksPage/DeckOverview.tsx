import { CardName } from 'log-language/domain/card-name'
import { Deck } from 'log-language/domain/deck'
import { CardStack } from 'pages/DecksPage/CardStack'
import React, { FC } from 'react'
import styles from './DeckOverview.module.sass'

interface Props {
    deck: Deck
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
