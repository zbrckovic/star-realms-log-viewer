import { Game } from 'domain/game'
import { astToLog } from 'log-language/parser/ast-to-log'
import { logToDomain } from 'log-language/parser/log-to-domain'
import { parseToAst } from 'log-language/parser/parse-to-ast'
import { useCallback, useEffect, useState } from 'react'

type State =
    | undefined
    | { type: 'processing', log: string }
    | { type: 'success', game: Game }
    | { type: 'error', error: string }

export const useProcessLog = (): [State, (log: string) => void] => {
    const [state, setState] = useState<State>()

    useEffect(() => {
        if (state?.type !== 'processing') return

        try {
            const ast = parseToAst(state.log)
            const log = astToLog(ast)
            const game = logToDomain(log)
            setState({ type: 'success', game })
        } catch (error) {
            setState({
                type: 'error',
                error: error?.toString() ?? 'unknown error'
            })
        }
    }, [])

    const process = useCallback((log: string) => {
        setState({ type: 'processing', log })
    }, [])

    return [state, process]
}
