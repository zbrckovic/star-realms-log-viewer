import * as Domain from 'domain/game'
import { Log } from 'log'

export const logToDomain = (log: Log): Domain.Game => {
    const turns: Domain.Turn[] = []
    let actions: Domain.Action[] = []

    log.lines.forEach((line) => {
        switch (line.type) {
            case 'action':
                break
            case 'effect':
                break
        }
    })

    return { turns }
}
