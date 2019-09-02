import React, {Component} from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { Container } from "./components/Grid"
import { ToastyContainer, Zoom } from 'react-toastify'; 
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Nav />
        <Router>
          <Container>
            <ToastyContainer
            postion="top-center"
            autoClose={5000}
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseonhover/>
            <Switch>
              <Route exact path="./" component={Search} />
              <route path="bookself" component={Saved}/>
              <Route exact path="/books/:id" component={null}/>
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}
export default App;
