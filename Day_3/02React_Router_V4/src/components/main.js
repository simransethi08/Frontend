import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Roster from './roster';
import Schedule from './schedule';

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>
)

export default Main;