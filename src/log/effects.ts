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
    | RevealedEventEffect
    | AcquiredToTheTopOfDeckEffect

interface BaseEffect {
    type: 'effect'
}

export interface ShuffledEffect extends BaseEffect {
    subtype: 'shuffled',
}

export interface TurnChangedEffect extends BaseEffect {
    subtype: 'turn changed',
    player: string;
    turn: number;
}

export interface CardToOwnerEffect extends BaseEffect {
    subtype: 'card to owner',
    player: string;
    card: string;
    effect: StatChange<'trade' | 'combat' | 'authority'> | 'ability available'
}

export interface CardToOpponentEffect extends BaseEffect {
    subtype: 'card to opponent',
    player: string;
    card: string;
    effect: StatChange<'discard'>;
}

export interface SideEffect extends BaseEffect {
    subtype: 'side',
    player: string;
    effect: StatChange<'trade' | 'combat' | 'authority'>;
}

export interface DrewCardsEffect extends BaseEffect {
    subtype: 'drew cards',
    cards: number;
}

export interface RefreshedAllyIndicatorsEffect extends BaseEffect {
    subtype: 'refreshed ally indicators',
}

export interface ScrappedCardEffect extends BaseEffect {
    subtype: 'scrapped card',
    card: string;
}

export interface NoMoreCardsToDiscardEffect extends BaseEffect {
    subtype: 'no more cards to discard'
}

export interface DiscardedCardEffect extends BaseEffect {
    subtype: 'discarded card',
    card: string;
}

export interface WonGameEffect extends BaseEffect {
    subtype: 'won game',
    player: string;
}

export interface DestroyedBaseEffect extends BaseEffect {
    subtype: 'destroyed base',
    base: string;
}

export interface RevealedEventEffect extends BaseEffect {
    subtype: 'revealed event',
    event: string;
}

export interface AcquiredToTheTopOfDeckEffect extends BaseEffect {
    subtype: 'acquired to the top of deck',
    card: string;
}

export interface StatChange<T extends 'trade' | 'combat' | 'authority' | 'discard'> {
    type: T,
    change: number;
    final: number;
}
