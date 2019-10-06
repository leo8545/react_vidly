import React from "react";
const Like = props => {
  let classes = "like";
  if (props.movie.liked) classes += "d";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={() => props.onLike(props.movie)}
    >
      Like
    </i>
  );
};

export default Like;
