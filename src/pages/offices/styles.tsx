import styled from "styled-components";
import { GLOBAL_COLOR } from "../../utils/globalColor";

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${GLOBAL_COLOR.primary};
`;
export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSearch = styled.div`
  height: 60px;
  display: flex;
  padding: 10px 10rem;
  background: ${GLOBAL_COLOR.secundary};
  align-items: center;
  @media (max-width: 1024px) {
    padding: 10px 2rem;
  }
`;

export const PrincipalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10rem;
  justify-content:space-between;
  @media (max-width: 1024px) {
    padding: 10px 2rem;
  }
`;
