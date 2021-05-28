import React from 'react'
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'


const App = () => {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Join}/>
                <Route path="/Chat" component={Chat}/>
            </Router>
        </div>
    )
}

export default App

