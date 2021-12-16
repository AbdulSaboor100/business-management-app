import React from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import MainLogin from '../screens/login/login';

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MainLogin />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRoutes;
