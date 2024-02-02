export type Action =
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
    | NoDiscardCardAction
    | ResolveDiscardAction
    | ResolveDiscardAndRedrawAction
    | ActivateCardAction
    | ChoseAction
    | GenericResolveAction
    | SelectCardAction
    | ReturnCardAction

interface BaseAction {
    type: 'action'
}

export interface PlayAllCardsAction extends BaseAction {
    subtype: 'play all cards',
}

export interface PlayOneCardAction extends BaseAction {
    subtype: 'play card',
    card: string;
}

export interface AcquireCardAction extends BaseAction {
    subtype: 'acquire card',
    card: string;
}

export interface EndTurnAction extends BaseAction {
    subtype: 'end turn',
    player: string;
    turn: number;
}

export interface AttackPlayerAction extends BaseAction {
    subtype: 'attack player'
    targetPlayer: string
    damage: number
    newAuthority: number
}

export interface AttackBaseAction extends BaseAction {
    subtype: 'attack base'
    base: string
}

export interface ScrapSubjectCardAction extends BaseAction {
    subtype: 'scrap subject card',
    card: string
}

export interface ScrapObjectCardAction extends BaseAction {
    subtype: 'scrap object card',
    player: string,
    card: string
}

export interface NoScrapObjectCardAction extends BaseAction {
    subtype: 'no scrap object card',
    player: string
}

export interface DiscardCardAction extends BaseAction {
    subtype: 'discard card',
    player: string
    card: string
}

export interface NoDiscardCardAction extends BaseAction {
    subtype: 'no discard card',
    player: string
}

export interface ResolveDiscardAction extends BaseAction {
    subtype: 'resolve discard',
    cards: number
}

export interface ResolveDiscardAndRedrawAction extends BaseAction {
    subtype: 'resolve discard and redraw',
    cards: number
}

export interface ActivateCardAction extends BaseAction {
    subtype: 'activate card',
    card: string
}

export interface ChoseAction extends BaseAction {
    subtype: 'chose',
    amount: number
    stat: 'trade' | 'combat' | 'authority'
}

export interface GenericResolveAction extends BaseAction {
    subtype: 'generic resolve'
}

export interface SelectCardAction extends BaseAction {
    subtype: 'select card',
    player: string;
    card: string
}

export interface ReturnCardAction extends BaseAction {
    subtype: 'return card',
    player: string;
    card: string
}
