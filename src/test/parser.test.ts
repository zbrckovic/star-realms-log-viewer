import { summarizeGame } from 'domain/summary'
import { astToLog } from 'parser/ast-to-log'
import { logToDomain } from 'parser/log-to-domain'
import { parseToAst } from 'parser/parse-to-ast'
import { sample } from 'test/sample'

describe('parser', () => {
    it('should parse without errors', () => {
        expect(() => {
            const ast = parseToAst(sample)
            const log = astToLog(ast)
            const game = logToDomain(log)
        }).not.toThrow()
    })
})
