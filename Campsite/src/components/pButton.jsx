import React from "react";
import '../index.css'

function PButton(props) {
  return (
      <>
        <a href={props.toLink} className="button pBtn">{props.children}</a>
      </>
  );
}

export default PButton;
