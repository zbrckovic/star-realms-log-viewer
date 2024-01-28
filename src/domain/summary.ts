import { Game } from 'domain/game'

export interface GameSummary {
    turnSummaries: TurnSummary[]
}

export interface TurnSummary {
    player: string
    number: number
    startingCards: string[]
    acquiredCards: string[]
    scrappedCards: string[]
    endingCards: string[]
}

const defaultStartingCards = [
    'Scout',
    'Scout',
    'Scout',
    'Scout',
    'Scout',
    'Scout',
    'Scout',
    'Scout',
    'Viper',
    'Viper',
]

export const summarizeGame = (
    game: Game,
    player1StartingCards = defaultStartingCards,
    player2StartingCards = defaultStartingCards
): GameSummary => {
    if (game.turns.length < 2) {
        throw new Error('Game must have at least two turns')
    }

    const cards = {
        [game.turns[0].player]: player1StartingCards,
        [game.turns[1].player]: player2StartingCards,
    }

    const turnSummaries = game.turns.map(({ player, number, actions }): TurnSummary => {
        const startingCards: string[] = [...cards[player]]
        const acquiredCards: string[] = []
        const scrappedCards: string[] = []
        const endingCards: string[] = [...startingCards]

        actions.forEach(action => {
            switch (action.type) {
                case 'acquire card':
                    acquiredCards.push(action.card)
                    endingCards.push(action.card)
                    break
                case 'scrap object card':
                    scrappedCards.push(action.card)
                    removeCard(endingCards, action.card)
                    break
                case 'scrap subject card':
                    scrappedCards.push(action.card)
                    removeCard(endingCards, action.card)
                    break
            }
        })

        cards[player] = [...endingCards]

        return { player, number, startingCards, acquiredCards, scrappedCards, endingCards }
    })

    return { turnSummaries }
}

const removeCard = (cards: string[], card: string): void => {
    const index = cards.indexOf(card)
    if (index === -1) {
        throw new Error(`card "${card}" not found`)
    }
    cards.splice(index, 1)
}
