import React from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route
            path="/auth"
            exact
            component={() => (user?.result ? <Redirect to="/" /> : <Auth />)}
          />
          <Route path="/posts/search" exact component={Home} />
          <Route  path="/posts/:id" exact component={PostDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
