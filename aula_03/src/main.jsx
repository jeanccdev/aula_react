import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/index'
import { Form } from './pages/Form'
import { Search } from './pages/Search'
import { GlobalStyle } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <Search />
    </React.StrictMode>
)