import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((currState) => !currState), []);
  return [state, toggle];
};

export default useToggle;
