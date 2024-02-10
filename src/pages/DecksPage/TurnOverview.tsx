import { TurnSummary } from 'log-language/domain/summary'
import { DeckOverview } from 'pages/DecksPage/DeckOverview'
import React, { FC } from 'react'
import styles from './TurnOverview.module.sass'

interface Props {
    turnSummary: TurnSummary
}

export const TurnOverview: FC<Props> = ({ turnSummary }) => {
    return <div className={styles.root}>
        <label className={styles.label}>
            Turn {turnSummary.number}
        </label>
        <DeckOverview deck={turnSummary.endingDeck}/>
    </div>
}
