import { Children, FC, ReactChildren, useContext } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { WizzardContext } from ".";
import styles from "./Wizzard.module.scss";

const transitionStyleForward = {
  entering: {
    transform: "translateX(calc(100% + 10px)",
    transition: "transform 250ms ease",
  },
  entered: {
    transform: "translateX(0)",
    transition: "transform 250ms ease",
  },
  exiting: {
    opacity: 0,
    transition: "opacity 200ms ease",
  },
  exited: { opacity: 0, transition: "opacity 200ms ease" },
  timeout: {
    enter: 300,
    exit: 200,
  },
};

const transitionStylesBack = {
  entering: {
    transform: "translateX(calc(-100% - 10px))",
    transition: "transform 250ms ease",
  },
  entered: { transform: "translateX(0)", transition: "transform 250ms ease" },
  exiting: { opacity: 0, transition: "opacity 200ms ease" },
  exited: { opacity: 0, transition: "opacity 200ms ease" },
  timeout: {
    enter: 250,
    exit: 200,
  },
};

export interface WizzardStepsProps {
  children: ReactChildren;
}

export const WizzardSteps: FC<WizzardStepsProps> = ({ children }) => {
  const { activeIndex, isForward } = useContext(WizzardContext);

  let transitionStyle: any;

  if (isForward) {
    transitionStyle = transitionStyleForward;
  } else {
    transitionStyle = transitionStylesBack;
  }

  return (
    <div className={styles.container}>
      <SwitchTransition>
        <Transition
          key={activeIndex + transitionStyle.toString()}
          timeout={transitionStyle.timeout}
        >
          {(state) => {
            return (
              <div
                style={{
                  ...transitionStyle.default,
                  ...transitionStyle[state],
                }}
              >
                {Children.toArray(children)[activeIndex]}
              </div>
            );
          }}
        </Transition>
      </SwitchTransition>
    </div>
  );
};
