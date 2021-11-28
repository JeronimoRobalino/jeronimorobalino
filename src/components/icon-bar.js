import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconBar = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} onClick={() => props.active} />
    </div>
  );
};
