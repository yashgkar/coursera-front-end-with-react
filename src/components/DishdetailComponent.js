import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardImgOverlay } from "reactstrap";
import { X } from "react-bootstrap-icons";



function RenderDish({ dish, onRemove, comments }) {
  if (dish != null) {
    return (
      <div>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>
                  <X size={25} onClick={onRemove} />
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
            {comments ? <RenderComments comments={comments} /> : null}

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
        <RenderDish dish={props.dish} onRemove={props.onRemove} comments={props.comments}/>
      </div>
    </div>
  );
}



export default DishDetail;