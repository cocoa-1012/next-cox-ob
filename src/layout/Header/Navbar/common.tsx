import Link from "next/link";
import classNames from "classnames";
import React from "react";
import { getIconClass } from "../../../helpers";
import {
  Enum_Componentnavigationscategorylink_Icon,
  Maybe,
} from "../../../generated/graphql";

export const RenderLink = ({
  className = "dropdown-link",
  path,
  text,
  icon,
  withIcon = true,
}: {
  className?: string;
  path: string;
  text: string;
  icon?: Maybe<Enum_Componentnavigationscategorylink_Icon>;
  withIcon: boolean;
}) => {
  return (
    <Link href={path}>
      <a
        className={classNames(className, {
          "justify-content-end": !withIcon,
        })}
      >
        {withIcon && (
          <span className="me-2">
            <i className={`${getIconClass(icon)} text-dark`} />
          </span>
        )}

        <div className="drop-title">{text}</div>
      </a>
    </Link>
  );
};
