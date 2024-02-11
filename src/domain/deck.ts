import { CardName } from 'domain/card-name'

export type Deck = Partial<Record<CardName, number>>

export const defaultDeck: Deck = {
    Scout: 8,
    Viper: 2
}

export const addCardToDeck = (deck: Deck, cardName: CardName, quantity = 1) => {
    deck[cardName] = (deck[cardName] ?? 0) + quantity
}

export const removeCardFromDeck = (deck: Deck, cardName: CardName, quantity = 1) => {
    const nextQuantity = (deck[cardName] ?? 0) - quantity
    if (nextQuantity < 0) throw new Error(`removing card \"${cardName}\" from deck which doesn't contain it`)
    if (nextQuantity === 0) {
        delete deck[cardName]
    } else {
        deck[cardName] = nextQuantity
    }
}
