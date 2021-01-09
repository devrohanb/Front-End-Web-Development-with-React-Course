import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";

function App() {
  return (
    <div>
      {/* // TODO: Navbar */}
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      {/* TODO: Menu component */}
      <Menu />
    </div>
  );
}

export default App;
