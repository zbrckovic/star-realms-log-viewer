import { cards } from 'log-language/domain/cards'
import * as Domain from 'log-language/domain/game'
import { Log } from 'log-language/log'

const deckCardType = new Set(['Ship', 'Base'])

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
                        const card = cards[line.card]
                        if (deckCardType.has(card.type)) {
                            actions.push({ type: 'scrap subject card', card: line.card })
                        } else {
                            console.log(`skipping scrapped card "${card.name}"`)
                        }
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
                    case 'acquired to hand': {
                        actions.push({ type: 'acquire card', card: line.card })
                    }
                    case 'acquired to the top of deck': {
                        actions.push({ type: 'acquire card', card: line.card })
                    }
                    case 'scrapped card': {
                        // TODO: think about what to do here
                        break
                    }
                }
            }
        }
    })

    return { turns }
}
