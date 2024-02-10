import { CardName } from 'log-language/domain/card-name'

export interface Game {
    turns: Turn[];
}

export interface Turn {
    player: string;
    number: number;
    actions: Action[];
}

export type Action = AcquireCard | ScrapSubjectCard | ScrapObjectCard;

export interface AcquireCard {
    type: 'acquire card';
    card: CardName;
}

export interface ScrapSubjectCard {
    type: 'scrap subject card'
    card: CardName
}

export interface ScrapObjectCard {
    type: 'scrap object card'
    card: CardName
}
