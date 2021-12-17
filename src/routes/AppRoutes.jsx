import React from 'react';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import MainLogin from '../screens/login/login';
import SignUp from '../screens/sign-up/sign-up';

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MainLogin />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/account">
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRoutes;
