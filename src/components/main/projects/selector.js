import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { css } from "@emotion/react";
import { rhythm } from "../../../utils/typography";

const selectorCss = css`
  display: flex;
  justify-content: center;
  margin-bottom: ${rhythm(0.5)};
`;

const Selector = ({ filterState, handleFilterChange }) => {
  return (
    <div css={selectorCss}>
      {" "}
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={filterState.dev}
              onChange={handleFilterChange}
              name="dev"
              style={{ color: "var(--dev)" }}
            />
          }
          label="Code"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filterState.maker}
              onChange={handleFilterChange}
              style={{ color: "var(--maker)" }}
              name="maker"
            />
          }
          label="Makes"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filterState.writer}
              onChange={handleFilterChange}
              style={{ color: "var(--writer)" }}
              name="writer"
            />
          }
          label="Writings"
        />
      </FormGroup>
    </div>
  );
};

export default Selector;
