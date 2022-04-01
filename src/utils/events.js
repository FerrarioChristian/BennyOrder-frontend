const submitOnEnter = (submit) => (e) => {
  if (e.key === "Enter" || e.key === "NumpadEnter") {
    submit.current.click();
  }
};

export default submitOnEnter;
