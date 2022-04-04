import { useMemo } from "react";
import useToggle from "./useToggle";
import PasswordEye from "../components/auth/PasswordEye";

const usePasswordToggle = (): [string, React.ReactNode] => {
  const [visible, toggleVisiblity] = useToggle(false);

  const inputType = visible ? "text" : "password";

  const PasswordEyeFC = useMemo(() => {
    return <PasswordEye visible={visible} toggleVisibility={toggleVisiblity} />;
  }, [visible, toggleVisiblity]);

  return [inputType, PasswordEyeFC];
};

export default usePasswordToggle;
