import React, { useCallback, useState } from "react";

import CreateTemplate from "./CreateTemplate";
import Icon from "../components/common/Icon";
import { LIST_OF_ICONS, TYPE_OF_ICONS } from "../helpers";

const Description = ({ icon, onCopy }) => {
  const [status, setStatus] = useState("copy");
  return (
    <span>
      ({icon}){" "}
      <i style={{ cursor: "pointer" }} onClick={() => onCopy(icon, setStatus)}>
        {status}
      </i>
    </span>
  );
};

const IconsComponent = ({ icon, typeOfIcons, listOfIcons }) => {
  const allIconTypes = Object.keys(typeOfIcons);

  const onCopy = useCallback((text, setStatus) => {
    setTimeout(() => setStatus("copy"), 1000);
    navigator.clipboard.writeText(text).then(
      function () {
        setStatus("success");
      },
      function (err) {
        setStatus("error");
        console.error("Async: Could not copy text: ", err);
      }
    );
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center">
        <h4 className="me-3">Test:</h4>
        <Icon icon={icon} />
      </div>
      <div className="d-flex flex-column">
        {allIconTypes.map((key) => {
          const i = listOfIcons[key];
          return (
            <div key={key} className="d-flex align-items-center my-4">
              <div className="d-flex flex-column mx-3">
                <h6 className="me-3 my-0">{key}:</h6>
                <Description icon={i} onCopy={onCopy} />
              </div>
              <Icon icon={i} key={key} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default {
  title: "Miscellaneous/Icons",
  component: IconsComponent,
};

const Template = (args) => (
  <CreateTemplate>
    <IconsComponent {...args} />
  </CreateTemplate>
);

export const IconsExample = Template.bind({});
IconsExample.args = {
  icon: "",
  typeOfIcons: TYPE_OF_ICONS,
  listOfIcons: LIST_OF_ICONS,
};
