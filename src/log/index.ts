import { Action } from 'log/actions'
import { Effect } from 'log/effects'

export interface Log {
    lines: (Action | Effect)[];
}
