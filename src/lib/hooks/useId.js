import { useRef } from "react";
let nextId = 0;

const useId = (prefix = "") => {
  const id = useRef();
  if (!id.current) {
    id.current = `${prefix}-${nextId++}`;
  }
  return id.current;
};

export default useId;
