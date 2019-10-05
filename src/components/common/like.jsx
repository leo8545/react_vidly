import React from "react";
const Like = props => {
  let classes = "like";
  if (props.liked) classes += "d";
  return (
    <i
      className={classes}
      onClick={() => props.onLike(props.movie)}
      style={{ cursor: "pointer" }}
    >
      Like
    </i>
  );
};

export default Like;
