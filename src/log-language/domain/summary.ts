import { addCardToDeck, Deck, defaultDeck, removeCardFromDeck } from 'log-language/domain/deck'
import { Game } from 'log-language/domain/game'

export interface GameSummary {
    turnSummaries: TurnSummary[]
}

export interface TurnSummary {
    player: string
    number: number
    startingDeck: Deck
    acquiredCards: Deck
    scrappedCards: Deck
    endingDeck: Deck
}

export const summarizeGame = (
    game: Game,
    deck1 = defaultDeck,
    deck2 = defaultDeck
): GameSummary => {
    if (game.turns.length < 2) {
        throw new Error('Game must have at least two turns')
    }

    const decks = {
        [game.turns[0].player]: deck1,
        [game.turns[1].player]: deck2
    }

    const turnSummaries = game.turns.map(({ player, number, actions }): TurnSummary => {
        const startingDeck: Deck = { ...decks[player] }
        const acquiredCards: Deck = {}
        const scrappedCards: Deck = {}
        const endingDeck: Deck = { ...startingDeck }

        try {
            actions.forEach(action => {
                switch (action.type) {
                    case 'acquire card':
                        addCardToDeck(acquiredCards, action.card)
                        addCardToDeck(endingDeck, action.card)
                        break
                    case 'scrap object card':
                        addCardToDeck(scrappedCards, action.card)
                        removeCardFromDeck(endingDeck, action.card)
                        break
                    case 'scrap subject card':
                        addCardToDeck(scrappedCards, action.card)
                        removeCardFromDeck(endingDeck, action.card)
                        break
                }
            })

        } catch (err) {
            throw new Error(`error at turn ${number}: ${err}`)
        }

        decks[player] = { ...endingDeck }

        return { player, number, startingDeck, acquiredCards, scrappedCards, endingDeck }
    })

    return { turnSummaries }
}
