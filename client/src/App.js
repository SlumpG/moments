import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {

  return (
    <Router>
    <Container maxWidth="lg">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </Container>
    </Router>
  );
}

export default App;
