import { Effect } from './effects'

export interface Action {
    header: ActionHeader;
    effects: Effect[];
}

export type ActionHeader =
    | PlayAllCardsAction
    | PlayOneCardAction
    | AcquireCardAction
    | EndTurnAction
    | AttackPlayerAction
    | AttackBaseAction
    | ScrapSubjectCardAction
    | ScrapObjectCardAction
    | NoScrapObjectCardAction
    | DiscardCardAction
    | ResolveDiscardAction
    | ActivateCardAction
    | ChoseAction

export interface PlayAllCardsAction {
    type: 'play all cards',
}

export interface PlayOneCardAction {
    type: 'play card',
    card: string;
}

export interface AcquireCardAction {
    type: 'acquire card',
    card: string;
}

export interface EndTurnAction {
    type: 'end turn',
    player: string;
    turn: number;
}

export interface AttackPlayerAction {
    type: 'attack player'
    targetPlayer: string
    damage: number
    newAuthority: number
}

export interface AttackBaseAction {
    type: 'attack base'
    base: string
}

export interface ScrapSubjectCardAction {
    type: 'scrap subject card',
    card: string
}

export interface ScrapObjectCardAction {
    type: 'scrap object card',
    player: string,
    card: string
}

export interface NoScrapObjectCardAction {
    type: 'no scrap object card',
    player: string
}

export interface DiscardCardAction {
    type: 'discard card',
    player: string
    card: string
}

export interface ResolveDiscardAction {
    type: 'resolve discard',
    cards: number
}

export interface ActivateCardAction {
    type: 'activate card',
    card: string
}

export interface ChoseAction {
    type: 'chose',
    amount: number
    stat: 'trade' | 'combat' | 'authority'
}
