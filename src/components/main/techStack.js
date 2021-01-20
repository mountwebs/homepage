import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { FaReact, FaPython, FaGraduationCap } from "react-icons/fa";
import { css } from "@emotion/react";

const containerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const techTypeDivCss = css``;

export default function Chips() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const skills = [
    { type: "Front-end", chips: [{ label: "React", icon: <FaReact /> }] },
  ];

  const skillTableContent = skills.map(item => (
    <div>
      <div>
        <h4>{item.type}</h4>
      </div>
      <div>
        {item.chips.map(chip => (
          <Chip size="small" label={chip.label} avatar={chip.icon} />
        ))}
      </div>
    </div>
  ));

  return (
    <div css={containerCss}>
      <div>
        <h3>Tech stack</h3>
      </div>
      <div>{skillTableContent}</div>
    </div>
  );
}

{
  /* <div css={containerCss}>
<Chip label="Basic" size="small" avatar={<FaReact />} />
<Chip label="Disabled" disabled />
<Chip
  avatar={<Avatar>M</Avatar>}
  label="Clickable"
  onClick={handleClick}
/>
<Chip
  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
  label="Deletable"
  onDelete={handleDelete}
/>
<Chip
  icon={<FaceIcon />}
  label="Clickable deletable"
  onClick={handleClick}
  onDelete={handleDelete}
/>
<Chip
  label="Custom delete icon"
  onClick={handleClick}
  onDelete={handleDelete}
  deleteIcon={<DoneIcon />}
/>
<Chip label="Clickable Link" component="a" href="#chip" clickable />
<Chip
  avatar={<Avatar>M</Avatar>}
  label="Primary clickable"
  clickable
  color="primary"
  onDelete={handleDelete}
  deleteIcon={<DoneIcon />}
/>
<Chip
  icon={<FaceIcon />}
  label="Primary clickable"
  clickable
  color="primary"
  onDelete={handleDelete}
  deleteIcon={<DoneIcon />}
/>
<Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
<Chip
  icon={<FaceIcon />}
  label="Deletable secondary"
  onDelete={handleDelete}
  color="secondary"
/>
</div> */
}
