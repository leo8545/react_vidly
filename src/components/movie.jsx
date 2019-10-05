import React, { Component } from "react";
import Like from "./common/like";

class Movie extends Component {
  render() {
    const {
      _id,
      title,
      genre,
      numberInStock,
      dailyRentalRate,
      liked
    } = this.props.movie;
    return (
      <React.Fragment>
        {
          <tr>
            <td>{title}</td>
            <td>{genre.name}</td>
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>
            <td>
              <Like
                movie={this.props.movie}
                liked={liked}
                onLike={this.props.onLike}
              />
            </td>
            <td>
              <button onClick={() => this.props.onDelete(_id)}>Delete</button>
            </td>
          </tr>
        }
      </React.Fragment>
    );
  }
}

export default Movie;
