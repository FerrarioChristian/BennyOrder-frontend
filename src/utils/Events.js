export const submitOnEnter = (submit) => {
  return (e) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      submit.current.click();
    }
  };
};
