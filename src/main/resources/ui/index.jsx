import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import LjQuestionnaire from './questionnaire.jsx';
import LjWelcome from './welcome.jsx';
import LjProfile from './profile.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Link to='/questionnaire'>Questionnaire</Link>
                <span> | </span>
                <Link to='/profile'>Profile</Link>
                <Switch>
                    <Route exact path="/" component={LjWelcome}/>
                    <Route path="/questionnaire" component={LjQuestionnaire}/>
                    <Route path="/profile" component={LjProfile}/>
                </Switch>
            </div>
        )
    }
}

render((<BrowserRouter><App/></BrowserRouter>), document.getElementById('root'));