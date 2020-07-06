import React, { Component } from 'react';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import About from "./AboutusComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null,
			promotions: PROMOTIONS,
			leaders: LEADERS,
			comments: COMMENTS
		}
	}

	onDishSelect = (dishId) => {
		this.setState({ selectedDish: dishId });
	}

	render() {

		const HomePage = () => {
			return (
				<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		}

		const DishWithId = ({ match }) => {
			return (
				<DishDetail dish={this.state.dishes.filter(c => c.id === parseInt(match.params.id, 10))[0]}
					comments={this.state.comments.filter(c => c.dishId === parseInt(match.params.id, 10))}
				/>
			)
		}

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
					<Route path="/menu/:id" component={DishWithId} />
					<Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
					<Route exact path="/contactus" component={Contact} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div >
		);
	}
}

export default Main;