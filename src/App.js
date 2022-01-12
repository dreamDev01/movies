import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Basket from "./pages/Basket/Basket";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => {
                  return <Redirect to={"/movies"} />;
                }}
              />
              <Route exact path={"/movies"} component={Home} />
              <Route exact path={"/movies/:id"} component={MovieDetail} />
              <Route exact patr={"/basket"} component={Basket} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
