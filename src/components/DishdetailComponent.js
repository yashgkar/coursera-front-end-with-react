import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Row, Col, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  handleToggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  submitHandle = (values) => {
    this.handleToggle();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }
  render() {
    return (
      <React.Fragment>
        <Button className="bg-white text-dark" onClick={this.handleToggle}><i className="fa fa-pencil fa-lg"></i>{' '}Submit Comment</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.handleToggle}>
          <ModalHeader toggle={this.handleToggle}> Submit Comment </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.submitHandle(value)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={4}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" id="rating" name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={4}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={4}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    className="form-control"
                    validators={{
                      required
                    }}
                    rows="6"
                  />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: 'Comment Required'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col >
                  <Button type="submit" color="primary" >Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );

  }
}

function RenderDish({ dish, comments, addComment }) {
  if (dish != null) {
    return (
      <div>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            <RenderComments comments={comments}
              addComment={addComment}
              dishId={dish.id} />

          </div>
        </div>
      </div>

    );
  } else {
    return (
      <div></div>
    );
  }
}

function RenderComments({ dishId, comments, addComment }) {
  if (comments != null) {
    const com = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <CardText>
            <li>{comment.comment}</li>
            <li>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} `}</li>
          </CardText>
        </div>
      )
    })
    return (
      <ul className="list-unstyled">
        {com}
        <CommentForm dishId={dishId} addComment={addComment} />
      </ul>
    )

  } else {
    return (<div></div>)
  }
}

const DishDetail = (props) => {

  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={props.dish} comments={props.comments} addComment={props.addComment} />
      </div>
    </div>
  );
}



export default DishDetail;