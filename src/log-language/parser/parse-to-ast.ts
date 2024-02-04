import { CharStream, CommonTokenStream, ErrorListener } from 'antlr4'
import { RecognitionException } from 'antlr4/src/antlr4/error/RecognitionException'
import { Recognizer } from 'antlr4/src/antlr4/Recognizer'
import LogLexer from 'log-language/antlr-generated/LogLexer'
import LogParser, { StartContext } from 'log-language/antlr-generated/LogParser'

class MyErrorListener<TSymbol> extends ErrorListener<TSymbol> {
    syntaxError(
        _recognizer: Recognizer<TSymbol>,
        _offendingSymbol: TSymbol,
        _line: number,
        _column: number,
        msg: string,
        _e: RecognitionException | undefined
    ): void {
        throw new Error(msg)
    }
}

export function parseToAst(input: string): StartContext {
    const chars = new CharStream(input)
    const lexer = new LogLexer(chars)
    const tokens = new CommonTokenStream(lexer)
    const parser = new LogParser(tokens)

    parser.addErrorListener(new MyErrorListener())

    return parser.start()
}

