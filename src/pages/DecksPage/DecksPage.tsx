import { defaultDeck } from 'log-language/domain/deck'
import { Game } from 'log-language/domain/game'
import { summarizeGame } from 'log-language/domain/summary'
import React, { FC, useEffect, useMemo } from 'react'

interface Props {
    game: Game
}


export const DecksPage: FC<Props> = ({ game }) => {
    const summary = useMemo(() => summarizeGame(game), [game])

    console.log(summary)

    return <div>
        {JSON.stringify(summary, undefined, 4)}
    </div>
}
