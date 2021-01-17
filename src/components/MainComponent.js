// Sudo container component
import Menu from "./MenuComponent";
import DishDetails from "./DishDetailsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        {/* Header Component */}
        <Header />

        {/* TODO: Menu component */}
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        {/* DishDetails Component */}
        <DishDetails
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        {/* Footer Coomponent */}
        <Footer />
      </div>
    );
  }
}

export default Main;
