import * as Domain from 'log-language/domain/game'
import { Log } from 'log-language/log'

export const logToDomain = (log: Log): Domain.Game => {
    const turns: Domain.Turn[] = []
    let actions: Domain.Action[] = []

    log.lines.forEach((line) => {
        switch (line.type) {
            case 'action': {
                switch (line.subtype) {
                    case 'end turn': {
                        turns.push({ player: line.player, number: line.turn, actions })
                        actions = []
                        break
                    }
                    case 'acquire card': {
                        actions.push({ type: 'acquire card', card: line.card })
                        break
                    }
                    case 'scrap subject card': {
                        actions.push({ type: 'scrap subject card', card: line.card })
                        break
                    }
                    case 'scrap object card': {

                        break
                    }
                }
                break
            }
            case 'effect': {
                switch (line.subtype) {
                    case 'scrapped card': {
                        break
                    }
                }
            }
        }
    })

    return { turns }
}
