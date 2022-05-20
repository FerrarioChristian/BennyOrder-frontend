import React, { useRef, useState } from "react";
import EuroIcon from "@mui/icons-material/Euro";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { ProductType } from "../../../utils/types";
import {
  useDeleteProduct,
  useEditProduct,
  useNewProduct,
} from "../../../utils/apiCalls/products";
import Card from "../Card/Card";
import Availability from "../Card/Availability";
import { CardInlineFlex, CardInput } from "../Card/Card.styles";
import CardActions from "../Card/CardActions";

interface Props {
  product: ProductType;
  close: () => void;
  mode: "edit" | "new";
}

function ProductForm({ product, close, mode }: Props) {
  const newName = useRef<HTMLInputElement>(null);
  const newPrice = useRef<HTMLInputElement>(null);
  const newDescription = useRef<HTMLInputElement>(null);
  const [newAvailability, setNewAvailability] = useState(
    product.available.toString()
  );

  const { mutate: newProduct } = useNewProduct();
  const { mutate: editProduct } = useEditProduct();
  const { mutate: deleteProduct } = useDeleteProduct();

  const submitDeleteProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    deleteProduct(product.id);
    close();
  };

  const submitEditProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    editProduct({
      id: product.id,
      name: newName.current!.value,
      price: newPrice.current!.value,
      description: newDescription.current!.value,
      available: newAvailability === "true", // TEMPORARY
    });
    close();
  };

  const submitNewProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    newProduct({
      name: newName.current!.value,
      price: newPrice.current!.value,
      description: newDescription.current!.value,
      available: newAvailability === "true", // TEMPORARY
    });
    close();
  };

  return (
    <Card title={product.name} isEdit nameInputRef={newName}>
      <Availability
        availability={product.available}
        type="products"
        isEdit
        setNewAvailability={setNewAvailability}
      />
      <CardInlineFlex>
        <FormatAlignLeftIcon />
        <CardInput defaultValue={product.description} ref={newDescription} />
      </CardInlineFlex>
      <CardInlineFlex>
        <EuroIcon />
        <CardInput defaultValue={product.price} ref={newPrice} />
      </CardInlineFlex>

      <CardActions
        cancel={close}
        submit={mode === "edit" ? submitEditProduct : submitNewProduct}
        deletes={mode === "edit" ? submitDeleteProduct : undefined}
      />
    </Card>
  );
}

export default ProductForm;
