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

    console.log(summary)

    return <div className={styles.root}>
        {summary.turnSummaries.map((turnSummary) => <TurnOverview turnSummary={turnSummary}/>)}
    </div>
}
