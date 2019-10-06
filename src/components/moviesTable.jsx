import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => <Like movie={movie} onLike={this.props.onLike} />
    },
    {
      key: "delete",
      content: movie => (
        <button onClick={() => this.props.onDelete(movie._id)}>Delete</button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table>
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />

        <TableBody rows={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
