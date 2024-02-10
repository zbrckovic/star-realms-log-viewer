import { CardName } from 'log-language/domain/card-name'

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
    | RevealedEffect
    | AcquiredToTheTopOfDeckEffect
    | AcquiredToHandEffect
    | ChangedToOnTableImageEffect
    | ChangedCardToCardEffect

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
    card: CardName;
    effect: StatChange<'trade' | 'combat' | 'authority'> | 'ability available'
}

export interface CardToOpponentEffect extends BaseEffect {
    subtype: 'card to opponent',
    player: string;
    card: CardName;
    effect: StatChange<'discard' | 'authority'>;
}

export interface SideEffect extends BaseEffect {
    subtype: 'side',
    player: string;
    effect: StatChange<'trade' | 'combat' | 'authority' | 'discard'>;
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
    card: CardName;
}

export interface NoMoreCardsToDiscardEffect extends BaseEffect {
    subtype: 'no more cards to discard'
}

export interface DiscardedCardEffect extends BaseEffect {
    subtype: 'discarded card',
    card: CardName;
}

export interface WonGameEffect extends BaseEffect {
    subtype: 'won game',
    player: string;
}

export interface DestroyedBaseEffect extends BaseEffect {
    subtype: 'destroyed base',
    base: CardName;
}

export interface RevealedEventEffect extends BaseEffect {
    subtype: 'revealed event',
    event: string;
}

export interface RevealedEffect extends BaseEffect {
    subtype: 'revealed',
    card: CardName;
}

export interface AcquiredToTheTopOfDeckEffect extends BaseEffect {
    subtype: 'acquired to the top of deck',
    card: CardName;
}

export interface AcquiredToHandEffect extends BaseEffect {
    subtype: 'acquired to hand',
    card: CardName;
}

export interface ChangedToOnTableImageEffect extends BaseEffect {
    subtype: 'changed to on table image',
    card: CardName;
}

export interface ChangedCardToCardEffect extends BaseEffect {
    subtype: 'changed card to card',
    card: CardName;
    toCard: CardName;
}

export interface StatChange<T extends 'trade' | 'combat' | 'authority' | 'discard'> {
    type: T,
    change: number;
    final: number;
}
