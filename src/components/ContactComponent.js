import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Control, LocalForm} from "react-redux-form";

class Contact extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (values) => {
		console.log("Current State is: " + JSON.stringify(values));
		alert("Current State is: " + JSON.stringify(values));
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Contact Us</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Contact Us</h3>
					</div>
				</div>

				<div className="row row-content">
					<div className="col-12">
						<h3>Location Information</h3>
					</div>
					<div className="col-12 col-sm-4 offset-sm-1">
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
							<i className="fa fa-phone"></i>: +852 1234 5678<br />
							<i className="fa fa-fax"></i>: +852 8765 4321<br />
							<i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
						</address>
					</div>
					<div className="col-12 col-sm-6 offset-sm-1">
						<h5>Map of our Location</h5>
					</div>
					<div className="col-12 col-sm-11 offset-sm-1">
						<div className="btn-group" role="group">
							<a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
							<a role="button" className="btn btn-info" href="tel:+85212345678"><i className="fa fa-skype"></i> Skype</a>
							<a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
						</div>
					</div>
				</div>
				<div className="row row-content">
					<div className="col-12">
						<h3>Send us Your Feedback</h3>
					</div>
					<div className="col-12 col-md-9">
						<LocalForm onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
							<Row className="form-group">
								<Label htmlFor="firstname" md={2}>First Name</Label>
								<Col md={10}>
									<Control.text model=".firstname" id="firstname" name="firstname"
										className="form-control"
										placeholder="First Name" required />


								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="lastname" md={2}>Last Name</Label>
								<Col md={10}>
									<Control.text model=".lastname" id="lastname" name="lastname"
										className="form-control"
										placeholder="Last Name" required />

								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="telnum" md={2}>Telephone Number</Label>
								<Col md={10}>
									<Control.text model=".telnum" id="telnum" name="telnum"
										className="form-control"
										placeholder="Telephone Number" />

								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="email" md={2}>Email</Label>
								<Col md={10}>
									<Control.text model=".email" id="email" name="email"
										className="form-control"
										placeholder="Email"/>

								</Col>
							</Row>
							<Row className="form-group">
								<Col md={{ size: 6, offset: 2 }}>
									<div className="form-check">
										<Label check>
											<Control.checkbox model=".agree" type="checkbox" name="agree"
												/>{' '}

											<strong>May we contact you?</strong>
										</Label>
									</div>
								</Col>
								<Col md={{ size: 3, offset: 1 }}>
									<Control.select model=".contractType" name="contactType">
										<option>Tel.</option>
										<option>Email</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="message" md={2}>Your Feedback</Label>
								<Col md={10}>
									<Control.textarea model=".message" className="form-control" id="message" name="message"
										rows="12"/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Send Feedback
									</Button>
								</Col>
							</Row>

						</LocalForm>

					</div>
				</div>
			</div>

		);
	}
}

export default Contact;