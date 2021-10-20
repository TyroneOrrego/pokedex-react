import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from "./pages/Home/Home";
import { Pokedex } from "./pages/Pokedex/Pokedex";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/pokedex">
                    <Pokedex />
                </Route>

                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>

    );
};