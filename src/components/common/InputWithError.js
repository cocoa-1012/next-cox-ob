import React, { useEffect, useState } from "react";

const InputWithError = ({ error, successMessage, register, ...props }) => {
  const [isVisibleSuccessMsg, setVisibleSuccessMsg] = useState(true);
  useEffect(() => {
    let timeout = null;
    if (successMessage) {
      setVisibleSuccessMsg(true);
      timeout = setTimeout(() => setVisibleSuccessMsg(false), 10000);
    }
    return () => clearTimeout(timeout);
  }, [successMessage]);
  return (
    <>
      <input {...props} {...register} />
      {error && <span className="text-danger px-3 h7">{error?.message}</span>}
      {isVisibleSuccessMsg && successMessage && (
        <span className="text-success px-3 h7">{successMessage}</span>
      )}
    </>
  );
};

export default InputWithError;
