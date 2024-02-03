interface Config {
    version: string;
    mode: string;
    gitCommitHash: string;
    gitCommitDate: Date;
}

const version = process.env.VERSION as string
const mode = process.env.MODE as string
const gitCommitHash = process.env.GIT_COMMIT_HASH as string
const gitCommitDate = new Date(process.env.GIT_COMMIT_DATE as string)

export const config: Config = {
    version,
    mode,
    gitCommitHash,
    gitCommitDate
}
