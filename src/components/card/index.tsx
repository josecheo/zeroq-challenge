import React from "react";
import { ContainerCard, Title, Footer, Text, SubContainer } from "./styles";
import person from "../../assets/img/person30.png";
import clock from "../../assets/img/clock30.png";
import moment from "moment";

interface Item {
  name: string;
  lines: {
    waiting: number;
    elapsed: number;
  };
  online: boolean;
 
}
interface PropCard {
  data: Item;
  changeStatus: any;
}

function Card({ data,changeStatus }: PropCard) {
  return (
    <ContainerCard online={data.online} onClick={()=>changeStatus(data)}>
      <Title online={data.online}>{data.name}</Title>
      <Footer online={data.online}>
        <SubContainer>
          <img src={person} alt="person" width={20} />
          <Text>{data.lines.waiting}</Text>
        </SubContainer>
        <SubContainer>
          <img src={clock} alt="person" width={20} />
          <Text>{moment.unix(data.lines.elapsed).format("hh:mm")}</Text>
        </SubContainer>
      </Footer>
    </ContainerCard>
  );
}

export default Card;
