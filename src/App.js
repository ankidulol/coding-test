import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Start from "./components/screens/Start/Start.js";
import Game from "./components/screens/Game/Game.js";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./logic/redux/index.js";
import { PersistGate } from "redux-persist/integration/react";

import { history } from "./history";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
