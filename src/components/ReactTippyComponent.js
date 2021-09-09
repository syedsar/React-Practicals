import React from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const ReactTippyComponent = () => {
  return (
    <div>
      <div style={{ padding: "10px" }}>
        <Tooltip title="basic tooltip" position="right" duration="1000" style={{color:'blue'}}>
          <button>Hover</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ReactTippyComponent;
