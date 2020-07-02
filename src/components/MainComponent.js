import React, { Component } from 'react';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null
		}
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });
	}

	removeDish() {
		this.setState({ selectedDish: null });
	}

	render() {

		const HomePage = () => {
			return (
				<Home />
			);
		}

		const MenuandDetails = () => {
			return (
				<div>
					<Menu dishes={this.state.dishes}
						onClick={(dishId) => this.onDishSelect(dishId)} />
					< DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
						onRemove={() => this.removeDish()} />
				</div >
			);
		}

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={MenuandDetails} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div >
		);
	}
}

export default Main;