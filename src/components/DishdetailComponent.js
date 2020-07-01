import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardImgOverlay, Button } from "reactstrap";
import { X } from "react-bootstrap-icons";

class DishDetail extends Component {
  componentDidMount() {
    console.log('conponentdid mount')
  }

  componentDidUpdate() {
    console.log('conponentdidupdate')
  }

  renderDish(dish) {
    console.log('render')
    if (dish != null) {
      return (
        <div>
          <div className='row'>
            <div className='col-12 col-md-5 m-1'>
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                  <CardTitle>
                    <X size={25} onClick={() => this.props.onRemove()}/>
                  </CardTitle>
                </CardImgOverlay>

                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col-12 col-md-5 m-1'>
              <h4>Comments</h4>
              {this.renderComments(dish.comments)}
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

  renderComments(comments) {
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
        </ul>
      )

    } else {
      return (<div></div>)
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
        </div>
      </div>
    );
  }

}

export default DishDetail;