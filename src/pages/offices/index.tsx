import React, { useState, Children, useEffect } from "react";
import { Wrapper, Header, ContainerSearch, PrincipalContainer } from "./styles";
import Search from "../../components/search";
import Logo from "../../assets/img/logo.png";
import Card from "../../components/card";
import useSearch from "../../api/useSearch";

function Offices() {
  const [inputText, setInputText] = useState("");
  const { isLoading, filterData } = useSearch({ inputText });
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(filterData);
  }, [filterData]);
  const handleChangeInput = (ev: { target: { value: string } }) => {
    const { value } = ev.target;
    setInputText(value);
  };

  const handleChangeOnline = (ev: { id: number; }) => {
    const filter:any = data.map((item: any) => {
      if (item.id === ev.id) {
        return { ...item, online: !item.online };
      } else {
        return { ...item };
      }
    });

    setData(filter)
  };

  return (
    <Wrapper>
      <Header>
        <img src={Logo} alt="logoZerop"></img>
      </Header>
      <ContainerSearch>
        <Search change={handleChangeInput} />
      </ContainerSearch>

      <PrincipalContainer>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            {Children.toArray(
              data.map((item: any) => (
                <Card data={item} changeStatus={handleChangeOnline} />
              ))
            )}
          </>
        )}
      </PrincipalContainer>
    </Wrapper>
  );
}

export default Offices;
