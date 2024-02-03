import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Root } from 'Root'
import './styles/main.sass'

const root = document.getElementById('root')
if (root === null) throw new Error('root element not found')

createRoot(root).render(
    <StrictMode>
        <HashRouter>
            <Root/>
        </HashRouter>
    </StrictMode>
)
