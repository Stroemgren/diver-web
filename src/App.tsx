import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './theme'
import Map from './containers/Map'
import Spot from './containers/Spot'
import Explore from './containers/Explore'

import { store, history } from './configureStore'

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <CssBaseline />
                    <Switch>
                        <Route path="/dive-spot/:id" render={() => <Spot />} />
                        <Route path="/map" render={() => <Map />} />
                        <Route path="/explore" render={() => <Explore />} />
                        <Route path="/" render={() => <Redirect to="/map" />} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>
    );
}

export default App;
