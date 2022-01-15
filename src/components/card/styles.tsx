import styled from "styled-components";
import { GLOBAL_COLOR } from "../../utils/globalColor";

interface Props {
  online: boolean;
}

export const ContainerCard = styled.div`
  width: calc((100% - 4%) / 4);
  margin-top: 20px;
  min-width: 320px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  background: ${(props: Props) =>
    props.online ? GLOBAL_COLOR.secundary : GLOBAL_COLOR.lightGray};

  @media (max-width: 1300px) {
    width: calc((100% - 4%) / 2);
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  color: ${(props: Props) => (props.online ? "#FFFFFF" : GLOBAL_COLOR.gray)};
  height: 100%;
  padding: 20px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background: ${(props: Props) =>
    props.online ? GLOBAL_COLOR.third : GLOBAL_COLOR.gray};
  padding: 5px 35px;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
`;
