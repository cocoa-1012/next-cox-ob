import { forwardRef } from "react";
import {
  default as BsToggleButton,
  ToggleButtonProps,
} from "react-bootstrap/ToggleButton";
import {
  default as BsToggleButtonGroup,
  ToggleButtonGroupProps,
} from "react-bootstrap/ToggleButtonGroup";
import useId from "../../../../lib/hooks/useId";

import styles from "./ToggleButtonGroup.module.scss";

export const ToggleButton = forwardRef(
  ({ checked, children, ...props }: ToggleButtonProps, ref) => {
    const id = useId("toggle-button");

    return (
      <BsToggleButton
        {...props}
        className={styles.button}
        variant={checked ? "primary" : "outline-primary"}
        checked={checked}
        id={id}
      >
        {checked && <i className="fa-solid fa-check check me-3"></i>}
        {children}
      </BsToggleButton>
    );
  }
);

export const ToggleButtonGroup = forwardRef(
  ({ children, ...props }: ToggleButtonGroupProps<any>, ref) => {
    return (
      <BsToggleButtonGroup ref={ref} className={styles.group} {...props}>
        {children}
      </BsToggleButtonGroup>
    );
  }
);
