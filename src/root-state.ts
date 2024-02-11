import { Game } from 'domain/game'

export type RootState =
    | { type: 'edit', log: string }
    | { type: 'processing success', log: string, game: Game }
    | { type: 'processing failure', log: string, error: string }
