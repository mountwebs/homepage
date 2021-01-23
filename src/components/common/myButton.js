import React from "react";
import Button from "@material-ui/core/Button";

const MyButton = ({ children, href, style }) => {
  return (
    <Button
      variant="contained"
      href={href}
      style={{
        textTransform: "none",
        marginRight: "10px",
        marginBottom: "10px",
        ...style,
      }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
