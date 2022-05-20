import Modal from "react-modal";
import EuroIcon from "@mui/icons-material/Euro";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { useState } from "react";
import { OrderType, ProductType } from "../../../utils/types";
import Availability from "../Card/Availability";
import Card from "../Card/Card";
import { CardInlineFlex } from "../Card/Card.styles";
import useToggle from "../../../hooks/useToggle";
import ProductForm from "./ProductForm";

interface Props {
  product: ProductType;
  admin: boolean;
  setOrders?: React.Dispatch<React.SetStateAction<OrderType[]>>;
}

export default function Product({ product, admin, setOrders }: Props) {
  const [isEdit, toggleIsEdit] = useToggle(false);
  const [notes] = useState("");

  const addToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => [...currOrder, { id: product.id, notes }]);
  };

  const removeFromOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => {
      const index = currOrder.findIndex((prod) => prod.id === product.id);
      currOrder.splice(index, 1);
      return currOrder;
    });
  };

  return (
    <>
      <Modal isOpen={isEdit} onRequestClose={() => toggleIsEdit()}>
        <ProductForm product={product} close={toggleIsEdit} mode="edit" />
      </Modal>
      <Card title={product.name} isEdit={isEdit} toggleEdit={toggleIsEdit}>
        <CardInlineFlex>
          <FormatAlignLeftIcon />
          <p>{product.description}</p>
        </CardInlineFlex>
        <CardInlineFlex>
          <EuroIcon />
          <p>Prezzo: {product.price}</p>
        </CardInlineFlex>
        <Availability
          availability={product.available}
          hidden={!admin}
          type="products"
        />
      </Card>
      <button type="button" onClick={addToOrder} hidden={admin}>
        Aggiungi
      </button>
      <button type="button" onClick={removeFromOrder} hidden={admin}>
        Rimuovi
      </button>
    </>
  );
}
