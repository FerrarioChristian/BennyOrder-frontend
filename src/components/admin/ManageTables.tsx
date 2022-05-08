import { useQuery } from "react-query";
import styled from "styled-components";
import { tablesListApi } from "../../utils/apiCalls/tables";
import { TableType } from "../../utils/types";
import { CardGridContainer } from "../generic/Card";
import Table from "./Table";

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--primary);
  cursor: default;
`;

const HeaderLine = styled.hr`
  border: 1px solid;
  color: var(--primary);
  margin-bottom: 2rem;
`;

function ManageTables() {
  const { data } = useQuery("tablesList", tablesListApi);
  return (
    <>
      <Title>Gestione Tavoli</Title>
      <HeaderLine />
      <CardGridContainer>
        {data?.data.map((table: TableType) => (
          <Table
            key={table.id}
            id={table.id}
            serial={table.serial}
            name={table.name}
            availability={table.availability}
            seats={table.seats}
            type="tables"
            created_at={table.created_at}
          />
        ))}
      </CardGridContainer>
    </>
  );
}
export default ManageTables;
