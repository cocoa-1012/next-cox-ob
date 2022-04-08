import { FC } from "react";
import styles from "./ProgressStepper.module.scss";

export interface ProgressStepperProps {
  steps: number;
  currentStep: number;
  className?: string;
}

const ProgressStepper: FC<ProgressStepperProps> = ({
  steps,
  currentStep,
  className,
}) => {
  steps = steps ?? currentStep + 1;

  return (
    <div className={className}>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{
            width: `${(100 / steps) * currentStep}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressStepper;
