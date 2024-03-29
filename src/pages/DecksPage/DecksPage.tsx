import { Game } from 'domain/game'
import { GameSummary, summarizeGame } from 'domain/summary'
import { TurnOverview } from 'pages/DecksPage/TurnOverview'
import React, { FC, useMemo } from 'react'
import styles from './DecksPage.module.sass'

interface Props {
    game: Game
}

export const DecksPage: FC<Props> = ({ game }) => {
    const summary: GameSummary = useMemo(() => summarizeGame(game), [game])

    const [turn1, turn2] = summary.turnSummaries

    return <div className={styles.root}>
        <label>{turn1?.player ?? '?'}</label>
        <label>{turn2?.player ?? '?'}</label>
        {

            summary.turnSummaries.map(
                (turnSummary) =>
                    <TurnOverview
                        key={turnSummary.number}
                        turnSummary={turnSummary}
                    />
            )
        }
    </div>
}
