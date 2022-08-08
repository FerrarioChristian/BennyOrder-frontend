import Modal from "react-modal";
import AddIcon from "@mui/icons-material/Add";
import Product from "../generic/Product/Product";
import { useListProducts } from "../../utils/apiCalls/products";
import { ProductType } from "../../utils/types";
import { HeaderLine, Title } from "./AdminLayout/AdminLayout";
import { CardGridContainer } from "../generic/Card/Card.styles";
import useToggle from "../../hooks/useToggle";
import ProductForm from "../generic/Product/ProductForm";
import newProductData from "../generic/Product/newProductData";
import Button from "../generic/Button/Button";

function ManageProducts() {
  const [isOpen, toggleIsOpen] = useToggle();
  const { data } = useListProducts();

  return (
    <>
      <Title>Gestione Prodotti</Title>
      <HeaderLine />
      <Button color="var(--primary)" onClick={toggleIsOpen}>
        <AddIcon />
        Nuovo
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => toggleIsOpen()}>
        <Title>Nuovo Prodotto</Title>
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
