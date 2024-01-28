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
    card: string;
}

export interface ScrapSubjectCard {
    type: 'scrap subject card'
    card: string
}

export interface ScrapObjectCard {
    type: 'scrap object card'
    card: string
}
