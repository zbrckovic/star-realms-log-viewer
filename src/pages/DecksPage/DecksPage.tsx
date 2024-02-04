import { Game } from 'log-language/domain/game'
import React, { FC } from 'react'

interface Props {
    game: Game
}

export const DecksPage: FC<Props> = ({ game }) => {
    console.log(game)

    return <div>
        Decks
    </div>
}
