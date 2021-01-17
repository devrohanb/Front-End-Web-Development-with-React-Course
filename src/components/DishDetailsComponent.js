import React from "react";
import { Card, CardText, CardTitle, CardBody, CardImg, List } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {dish.comments.map((comment) => {
          return (
            <List type="unstyled">
              <li>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            </List>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  console.log("DishDetail Component's render() is invoked.");
  // const dishSelected = props.dish;
  return (
    <div key={props.dish} className="container">
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments dish={props.dish} />
      </div>
    </div>
  );
};

export default DishDetail;
