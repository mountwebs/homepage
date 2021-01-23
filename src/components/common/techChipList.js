import React from "react";
import TechChip from "./techChip";

const techChipList = ({ list, style, name }) => {
  const chips = list.map(tech => <TechChip tech={tech} />);
  const render = () => {
    if (name) {
      return (
        <div style={{ ...style, display: "flex" }}>
          <div>{name}</div>
          <div>{chips}</div>
        </div>
      );
    }
    return <div style={style}>{chips}</div>;
  };
  return render();
};

export default techChipList;
