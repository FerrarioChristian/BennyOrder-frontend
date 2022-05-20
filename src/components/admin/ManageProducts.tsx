import Modal from "react-modal";
import Product from "../generic/Product/Product";
import { useListProducts } from "../../utils/apiCalls/products";
import { ProductType } from "../../utils/types";
import { HeaderLine, Title } from "./AdminLayout/AdminLayout";
import { CardActionsButton } from "../generic/Card/CardActions";
import { CardGridContainer } from "../generic/Card/Card.styles";
import useToggle from "../../hooks/useToggle";
import ProductForm from "../generic/Product/ProductForm";
import newProductData from "../generic/Product/newProductData";

function ManageProducts() {
  const [isOpen, toggleIsOpen] = useToggle();
  const { data } = useListProducts();

  return (
    <>
      <Title>Prodotti</Title>
      <HeaderLine />
      <CardActionsButton color="var(--primary)" onClick={toggleIsOpen}>
        Nuovo Prodotto
      </CardActionsButton>
      <Modal isOpen={isOpen} onRequestClose={() => toggleIsOpen()}>
        <ProductForm product={newProductData} close={toggleIsOpen} mode="new" />
      </Modal>
      <CardGridContainer>
        {data?.data.map((product: ProductType) => (
          <Product key={product.id} product={product} admin />
        ))}
      </CardGridContainer>
    </>
  );
}
export default ManageProducts;
