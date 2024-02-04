import { DecksPage } from 'pages/DecksPage'
import { InputPage } from 'pages/InputPage'
import { NoMatchPage } from 'pages/NoMatchPage'
import React, { FC, useCallback, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { RootState } from 'root-state'

export const Root: FC = () => {
    const [state, setState] = useState<RootState>({ type: 'edit', log: '' })

    const navigate = useNavigate()

    const handleView = useCallback(() => {
        navigate('/decks')
    }, [navigate])

    return <Routes>
        <Route
            index
            element={<InputPage state={state} setState={setState} onView={handleView}/>}
        />
        <Route
            path="decks"
            element={
                state.type !== 'processing success'
                    ? <Navigate replace to="/"/>
                    : <DecksPage game={state.game}/>
            }
        />
        <Route path="*" element={<NoMatchPage/>}/>
    </Routes>
}

