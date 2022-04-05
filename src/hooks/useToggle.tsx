import { useCallback, useState } from "react";

export interface ToggleType {
  visible: boolean;
  toggleVisibility?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((currState) => !currState), []);
  return [state, toggle];
};

export default useToggle;
