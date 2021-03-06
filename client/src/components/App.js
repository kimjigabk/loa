import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";
import Header from "./Header";
import Landing from "./Landing";

import Dashboard from "./dashboard/Dashboard";
import Statistics from "./statistics/Statistics";
import CharacterCreate from "./characters/CharacterCreate";
import NextWeek from "./dashboard/NextWeek";
import ConfigPage from "./configpage/ConfigPage";
import CharacterEdit from "./characters/CharacterEdit";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div id="App" style={{ textAlign: "center" }} className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/homework" exact component={Dashboard} />
              <Route path="/statistics/" exact component={Statistics} />
              <Route path="/config/" exact component={ConfigPage} />
              <Route path="/characters/new" exact component={CharacterCreate} />
              <Route path="/characters/save" exact component={NextWeek} />
              <Route
                path="/characters/edit/:id"
                exact
                component={CharacterEdit}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
