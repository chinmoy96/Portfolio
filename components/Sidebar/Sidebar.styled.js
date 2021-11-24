import styled from "styled-components";
import { device } from "@/constants/devices";
export const StyledUl = styled.ul`
opacity: ${(props) => (props.extend ? "100" : "0")};
  transition: all 0.4s;
  
`;

export const Hidden = styled.div`
  color: #e4e4e4;
  opacity: ${(props) => (props.extend ? "0" : "100")};
  transition: all 0.5s;
`;
export const StyledDiv = styled.div`
  cursor: pointer;
  margin-left: -3rem;
  width: ${(props) => (props.extend ? "15rem" : "5rem")};
  background-color: ${(props) => (props.extend ? "#303030" : "transparent")};

  transition: all 0.5s;
`;
