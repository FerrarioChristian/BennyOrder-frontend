import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { CardInlineFlex } from "./Card";
import { AvailabilityType } from "../../utils/types";

function Availability({ availability, hidden, type }: AvailabilityType) {
  if (hidden) return null;

  const tables = ["Occupato", "Disponibile", "Prenotato"];
  const products = ["Finito", "Disponibile"];

  let sesso = availability;

  if (availability === true) sesso = 1;
  if (availability === false) sesso = 0;

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
