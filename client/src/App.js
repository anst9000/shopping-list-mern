import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import ItemModal from "./components/ItemModal";
import ShoppingList from "./components/ShoppingList";
import store from "./store";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
