export type Effect =
    | ShuffledEffect
    | TurnChangedEffect
    | CardToOwnerEffect
    | CardToOpponentEffect
    | SideEffect
    | DrewCardsEffect
    | RefreshedAllyIndicatorsEffect
    | ScrappedCardEffect
    | NoMoreCardsToDiscardEffect
    | DiscardedCardEffect
    | WonGameEffect
    | DestroyedBaseEffect

export interface ShuffledEffect {
    type: 'shuffled',
}

export interface TurnChangedEffect {
    type: 'turn changed',
    player: string;
    turn: number;
}

export interface CardToOwnerEffect {
    type: 'card to owner',
    player: string;
    card: string;
    effect: StatChange<'trade' | 'combat' | 'authority'> | 'ability available'
}

export interface CardToOpponentEffect {
    type: 'card to opponent',
    player: string;
    card: string;
    effect: StatChange<'discard'>;
}

export interface SideEffect {
    type: 'side',
    player: string;
    effect: StatChange<'trade' | 'combat' | 'authority'>;
}

export interface DrewCardsEffect {
    type: 'drew cards',
    cards: number;
}

export interface RefreshedAllyIndicatorsEffect {
    type: 'refreshed ally indicators',
}

export interface ScrappedCardEffect {
    type: 'scrapped card',
    card: string;
}

export interface NoMoreCardsToDiscardEffect {
    type: 'no more cards to discard'
}

export interface DiscardedCardEffect {
    type: 'discarded card',
    card: string;
}

export interface WonGameEffect {
    type: 'won game',
    player: string;
}

export interface DestroyedBaseEffect {
    type: 'destroyed base',
    base: string;
}

export interface StatChange<T extends 'trade' | 'combat' | 'authority' | 'discard'> {
    type: T,
    change: number;
    final: number;
}
