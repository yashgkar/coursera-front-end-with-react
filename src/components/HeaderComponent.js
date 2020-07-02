import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar dark>
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Ristorante Con Fusion</h1>
								<p>We take inspiration from the world's brest cuisine,
									and create a unique fusion experience</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		)
	}
}

export default Header;
