import React, { Component } from "react";
import { Card, CardText, CardTitle, CardBody, CardImg, List } from "reactstrap";

class DishDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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

  renderComments(dish) {
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

  render() {
    const dishSelected = this.props.dish;

    return (
      <div className="container">
        <div className="row">
          {this.renderDish(dishSelected)}
          {this.renderComments(dishSelected)}
        </div>
      </div>
    );
  }
}

export default DishDetails;
