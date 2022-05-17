import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Select from "react-select";

import { AvailabilityType } from "../../../utils/types";
import { CardInlineFlex } from "./Card.styles";

/* import { ColourOption, colourOptions } from '../data';
import Select, { StylesConfig } from 'react-select';


const colourStyles: StylesConfig<ColourOption> = {
  option: (styles, { data, isFocused, isSelected }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: isFocused
        ? data.color // sbiadito
        : undefined,
      color: data.color,
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default () => (
  <Select
    defaultValue={colourOptions[2]}
    options={colourOptions}
    styles={colourStyles}
  />
);
 */

const selectCustomStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "yellow" : "black",
    backgroundColor: state.isSelected ? "green" : "white",
    maxWidth: "15rem",
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: "20px",
    maxWidth: "15rem",
    minHeight: "1.5rem",
    padding: "0",
    marginBottom: "1rem",
    border: "1px solid var(--text)",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: "2px",
    color: "var(--text)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: "var(--text)",
  }),
  menu: (provided: any) => ({
    ...provided,
    maxWidth: "15rem",
    top: "2rem",
  }),
};

function Availability({
  availability,
  hidden,
  type,
  isEdit,
  setNewAvailability,
}: AvailabilityType) {
  if (hidden) return null;

  const tables = ["Occupato", "Disponibile", "Prenotato"];
  const products = ["Finito", "Disponibile"];

  let sesso;

  if (availability === true) sesso = 1;
  else if (availability === false) sesso = 0;
  else sesso = availability;

  let text = null;

  switch (type) {
    case "tables":
      text = tables;
      break;
    case "products":
      text = products;
      break;
    default:
      return null;
  }

  // FIXME farlo in javascript (crea array di oggetti a partire dall'array text)
  if (isEdit) {
    const options: { label: string; value: number }[] = [];
    let i = 0;
    text.forEach((item) => {
      options.push({
        value: i,
        label: item,
      });
      i += 1;
    });
    return (
      <Select
        options={options}
        styles={selectCustomStyles}
        defaultValue={sesso !== undefined ? options[sesso] : options[1]}
        onChange={(option) => {
          setNewAvailability?.(option!.value.toString());
        }}
      />
    );
  }

  switch (sesso) {
    case 0:
      return (
        <CardInlineFlex color="var(--danger)">
          <CancelOutlinedIcon />
          <p>{text[0]}</p>
        </CardInlineFlex>
      );
    case 1:
      return (
        <CardInlineFlex color="var(--success)">
          <CheckCircleOutlineIcon />
          <p>{text[1]}</p>
        </CardInlineFlex>
      );
    case 2:
      return (
        <CardInlineFlex color="var(--warning)">
          <AccessTimeOutlinedIcon />
          <p>{text[2]}</p>
        </CardInlineFlex>
      );

    default:
      return null;
  }
}

export default Availability;
