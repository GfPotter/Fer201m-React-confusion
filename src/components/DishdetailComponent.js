import React, { Component } from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    
  }

  renderComments(comments) {
    if (comments != null) {
      const cmt = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author}, &nbsp;
              {comment.date}
            </p>
          </li>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          <ul className="list-unstyled">{cmt}</ul>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    const selectDish = this.props.selectDish;
    if (selectDish != null) {
      const dishItem = this.props.renderDish(selectDish);
      const dishCmt = this.renderComments(selectDish.comments);
      return (
        <div className="row">
        {dishCmt}  {dishItem} 
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
