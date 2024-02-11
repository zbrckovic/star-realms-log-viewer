import classNames from 'classnames'
import { astToLog } from 'log-language/parser/ast-to-log'
import { logToDomain } from 'log-language/parser/log-to-domain'
import { parseToAst } from 'log-language/parser/parse-to-ast'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { RootState } from 'root-state'
import styles from './InputPage.module.sass'

interface Props {
    className?: string
    state: RootState
    setState: Dispatch<SetStateAction<RootState>>
    onView: () => void
}

export const InputPage: FC<Props> = ({ className, state, setState, onView }) => {
    const [isProcessing, setIsProcessing] = useState(false)

    useEffect(() => {
        if (!isProcessing) return

        try {
            const ast = parseToAst(state.log)
            const log = astToLog(ast)
            const game = logToDomain(log)
            setState(prev => ({ type: 'processing success', log: prev.log, game }))
            setIsProcessing(false)
        } catch (error) {
            setState(prev => ({
                type: 'processing failure',
                log: prev.log,
                error: error?.toString() ?? 'unknown error'
            }))
            setIsProcessing(false)
        }
    }, [isProcessing])

    return <div className={classNames(styles.root, className)}>
        <textarea
            className={styles.textArea}
            disabled={isProcessing || state.type !== 'edit'}
            value={state.log}
            onChange={event => {
                setState({ type: 'edit', log: event.target.value })
            }}
        />
        {
            state.type === 'processing failure' &&
            <pre className={styles.error}>{state.error}</pre>
        }
        <div className={styles.controls}>
            <div className={styles.controlsGroup}>
                <button
                    disabled={isProcessing || state.type !== 'edit'}
                    onClick={() => setIsProcessing(true)}>
                    Process
                </button>
                <button
                    onClick={() => setState({ type: 'edit', log: '' })}>
                    Reset
                </button>
            </div>
            <div className={styles.rightSide}>
                <button
                    disabled={state.type !== 'processing success'}
                    onClick={onView}
                >
                    View
                </button>
            </div>
        </div>
    </div>
}

