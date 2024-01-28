import * as Domain from 'domain/game'
import { Log } from 'log'

export const logToDomain = (log: Log): Domain.Game => {
    const turns: Domain.Turn[] = []
    let actions: Domain.Action[] = []

    log.actions.forEach(({ header }) => {
        switch (header.type) {
            case 'acquire card':
                actions.push({ type: 'acquire card', card: header.card })
                break
            case 'scrap object card':
                actions.push({ type: 'scrap object card', card: header.card })
                break
            case 'scrap subject card':
                actions.push({ type: 'scrap subject card', card: header.card })
                break
            case 'end turn':
                const player = header.player
                const number = header.turn
                turns.push({ player, number, actions })
                actions = []
        }
    })

    return { turns }
}
