import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";



function RenderDish({ dish, comments }) {
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
            <RenderComments comments={comments} />

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

function RenderComments({ comments }) {
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

const DishDetail = (props) => {

  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={props.dish} comments={props.comments} />
      </div>
    </div>
  );
}



export default DishDetail;