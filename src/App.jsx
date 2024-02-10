import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Search } from './Components'
import { Main } from './pages'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Search/>} >
                        <Route path='/' element={<Main />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;