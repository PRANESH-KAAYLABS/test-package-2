import React from "react";
import { Button } from "@mui/material";
const PraneshText = props => {
  const {
    name
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hi ", name, ", this is your package text..."), /*#__PURE__*/React.createElement(Button, {
    variant: "contained"
  }, "Hello "), /*#__PURE__*/React.createElement("button", null, "hello gokul"));
};
export default PraneshText;