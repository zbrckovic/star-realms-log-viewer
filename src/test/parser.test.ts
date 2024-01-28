import { astToLog } from 'parser/ast-to-log'
import { logToDomain } from 'parser/log-to-domain'
import { parseToAst } from 'parser/parse-to-ast'
import { loadSampleLogs } from 'test/load-sample-logs'

describe('parser', () => {
    const rawLogs = loadSampleLogs()

    test.each(
        rawLogs.map(log => [log.filename, log.content])
    )('should parse sample %s without errors', (filename, content) => {
        expect(() => {
            const ast = parseToAst(content)
            const log = astToLog(ast)
            logToDomain(log)
        }).not.toThrow()
    })
})
