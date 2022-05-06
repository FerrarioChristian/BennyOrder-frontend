import { useEffect, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../utils/axios";
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
  const [tables, setTables] = useState<TableType[]>([]);
  useEffect(() => {
    axiosInstance.get("/tables", { withCredentials: true }).then((res) => {
      setTables(res.data);
    });
  }, []);
  return (
    <>
      <Title>Gestione Tavoli</Title>
      <HeaderLine />
      <CardGridContainer>
        {tables.map((table) => (
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
