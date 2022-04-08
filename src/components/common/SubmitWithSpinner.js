import React from "react";

const SubmitWithSpinner = ({
  isFetch,
  text,
  className = "",
  loadingText = "Loading...",
}) => {
  return (
    <div className={className}>
      {isFetch ? (
        <button
          className="btn btn-primary width-100-percent"
          type="button"
          disabled
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">{loadingText}</span>
        </button>
      ) : (
        <input
          type="submit"
          disabled={isFetch}
          data-wait="Please wait..."
          className="btn btn-primary width-100-percent"
          value={text}
          data-testid="submit"
        />
      )}
    </div>
  );
};

export default SubmitWithSpinner;
