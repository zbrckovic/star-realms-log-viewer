import fs from 'fs'
import path from 'path'

const sampleLogsDirPath = path.resolve(__dirname, '../test/sample-logs')

interface RawLog {
    filename: string
    content: string
}

/** Loads all sample logs from the sample-logs directory. */
export const loadSampleLogs = () => {
    const result: RawLog[] = []

    fs.readdirSync(sampleLogsDirPath).forEach((filename) => {
        const filePath = path.resolve(sampleLogsDirPath, filename)
        const content = fs.readFileSync(filePath, 'utf8')
        const rawLog: RawLog = { filename, content }
        result.push(rawLog)
    })

    return result
}
