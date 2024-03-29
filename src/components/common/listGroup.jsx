import React from "react";

const ListGroup = props => {
  const { items, selectedItem, textProperty, onItemSelect } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[textProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
