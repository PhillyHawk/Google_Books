import React, {Component} from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { Container } from "./components/Grid"
import { ToastContainer, Zoom } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Nav />
        <Jumbotron />
        <Router>
          <Container>
            <ToastContainer
            postion="top-center"
            autoClose={5000}
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover/>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved}/>
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
