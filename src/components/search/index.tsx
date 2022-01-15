import React from "react";
import { ContainerInput, Input } from "./styles";
import search from "../../assets/img/search.png";

interface PropSearch {
  change: (value: any) => void;
}

function Search({ change }: PropSearch) {
  return (
    <ContainerInput>
      <img src={search} alt="search" width={20} />
      <Input type="text" placeholder="Buscar Sucursal" onChange={change} />
    </ContainerInput>
  );
}

export default Search;
