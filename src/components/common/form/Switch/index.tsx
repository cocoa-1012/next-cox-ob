import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {}

const Switch: React.FC<Props> = ({
  label,
  onChange,
  name,
  checked,
  disabled = false,
}) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        value=""
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        data-testid="checkbox"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
    </div>
  );
};

export default Switch;
