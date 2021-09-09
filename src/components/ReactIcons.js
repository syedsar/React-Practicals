import React from "react";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { GiAbstract005 } from "react-icons/gi";

const ReactIcons = () => {
  return (
    <div>
      {/* IconContext is used to proived values to hole component or app icons */}
      <IconContext.Provider value={{ color: "blue", size: "10rem" }}>
        <FaReact />
        <GiAbstract005 color="gray" size="5rem" />
      </IconContext.Provider>
    </div>
  );
};

export default ReactIcons;
