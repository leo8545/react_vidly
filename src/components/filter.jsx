import React, { Component } from "react";
class Filter extends Component {
  render() {
    const { movies, filterMovie } = this.props;
    return (
      <React.Fragment>
        <div className="sidebar filter-movies">
          <table>
            <tbody>
              <tr>
                <td>
                  <button onClick={() => filterMovie("all")}>All</button>
                </td>
              </tr>
              {movies.map(m => (
                <tr key={m.id}>
                  <td>
                    <button onClick={() => filterMovie(m.genre)}>
                      {m.genre}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
