import { astToLog } from 'log-language/parser/ast-to-log'
import { logToDomain } from 'log-language/parser/log-to-domain'
import { parseToAst } from 'log-language/parser/parse-to-ast'
import { summarizeGame } from 'log-language/domain/summary'
import { loadSampleLogs } from 'test/load-sample-logs'

describe('parser', () => {
    const rawLogs = loadSampleLogs()

    test.each(
        rawLogs.map(log => [log.filename, log.content])
    )('should parse sample %s without errors', (filename, content) => {
        expect(() => {
            const ast = parseToAst(content)
            const log = astToLog(ast)
            const game = logToDomain(log)
            const summary = summarizeGame(game)
            expect(summary).toBeDefined()
        }).not.toThrow()
    })
})
