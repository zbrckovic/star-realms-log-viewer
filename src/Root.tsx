import React, { FC } from "react";
import { config } from 'config'

const gitCommit = process.env.GIT_COMMIT_HASH

export const Root: FC = () => {
    return <main>
        <ul>
            <li>{config.version}</li>
            <li>{config.mode}</li>
            <li>{config.gitCommitHash}</li>
            <li>{config.gitCommitDate.toDateString()}</li>
        </ul>
    </main>
}
