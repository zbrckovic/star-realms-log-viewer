import { Action } from 'log-language/log/actions'
import { Effect } from 'log-language/log/effects'

export interface Log {
    lines: (Action | Effect)[];
}
