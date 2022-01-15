import styled from "styled-components";
import { GLOBAL_COLOR } from "../../utils/globalColor";

export const ContainerInput = styled.div`
  display: flex;
  height:30px;
  border-radius: 5px;
  padding: 5px 15px;
  transition: background-color 0.5 ease-in-out;
  background-color: #FFFFFF;
  align-items:center;
  width: 600px;
`;

export const Input = styled.input`
  border: 0;
  margin-left:10px;
  background-color: transparent;
  color:${GLOBAL_COLOR.gray};
  width: 100%;
  &:focus {
    outline: none;
  }
`;
