import classNames from "classnames";
import { useEffect, useState } from "react";

const Loading = ({ initVisible = false }) => {
  const [isVisible, setVisible] = useState(initVisible);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div
      className={classNames(
        "opacity-transition wrap-spinner",
        { "opacity-0": !isVisible },
        { "opacity-1": isVisible }
      )}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
