import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        {/* // TODO: Navbar */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* TODO: Menu component */}
        <Menu dishes={this.state.dishes} /> {/* Here "dishes" is a prop */}
      </div>
    );
  }
}

export default App;
