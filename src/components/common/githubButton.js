import React from "react";
import Button from "@material-ui/core/Button";
import { SiGithub } from "react-icons/si";

const GithubButton = ({ children, href, style }) => {
  return (
    <div
      style={{
        ...style,
        display: "inline",
        marginRight: "10px",
        marginBottom: "10px",
      }}
    >
      <Button variant="contained" href={href} style={{ textTransform: "none" }}>
        <SiGithub
          style={{
            height: 20,
            width: 20,
            marginRight: 7,
          }}
        />
        {children}
      </Button>
    </div>
  );
};

export default GithubButton;
