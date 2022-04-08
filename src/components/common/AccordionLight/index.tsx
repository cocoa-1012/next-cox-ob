import classNames from "classnames";
import {
  FC,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
} from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import styles from "./AccordionLight.module.scss";

interface CustomToggleProps {
  eventKey: string;
}

const CustomToggle: FC<PropsWithChildren<CustomToggleProps>> = ({
  children,
  eventKey,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey);
  const isActive = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={classNames(
        "btn btn-link text-decoration-none p-0 w-100 flex justify-content-between mb-4",
        styles.title,
        {
          [styles.isActive]: isActive,
        }
      )}
      onClick={decoratedOnClick}
    >
      {children}
      <i className={`${styles.icon} fa-solid fa-angle-down ms-4`}></i>
    </button>
  );
};

export interface AccordionLightProps {
  title: string;
  // Interface of Accordion.Collapse. Could not find a short version
  children: ReactElement<any, string | JSXElementConstructor<any>> & ReactNode;
}

const AccordionLight: FC<PropsWithChildren<AccordionLightProps>> = ({
  title,
  children,
}) => {
  return (
    <Accordion>
      <CustomToggle eventKey="0">{title}</CustomToggle>
      <Accordion.Collapse eventKey="0">{children}</Accordion.Collapse>
    </Accordion>
  );
};

export default AccordionLight;
