import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
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

function Availability({
  availability,
  hidden,
  type,
  isEdit,
  setNewAvailability,
}: AvailabilityType) {
  const [selected, setSelected] = useState(1);

  if (hidden) return null;

  const handleSelected = (
    event: React.MouseEvent<HTMLElement>,
    newSelected: number
  ) => {
    setSelected(newSelected);
    setNewAvailability?.(newSelected.toString());
  };

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
      <ToggleButtonGroup
        value={selected}
        exclusive
        sx={{ marginBottom: "1rem;" }}
        onChange={handleSelected}
      >
        {options.map((option) => (
          <ToggleButton key={option.value} value={option.value}>
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
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
