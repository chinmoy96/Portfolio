import styled from "styled-components";
import { device } from "@/constants/devices";
import Button from "../Button/Button";
export const StyledUl = styled.ul`
margin-top: 3rem;
  opacity: ${(props) => (props.extend ? "1" : "0")};
  transition: all 0.4s;
`;

export const StyledMenuIcon = styled.div`
display: ${(props) => (props.extend ? "flex" : "none")};
align-items: center;
justify-content: center;

`;
export const Hidden = styled.div`
  margin-left: 3rem;
  margin-top: 3rem;
  color: #e4e4e4;
  display: ${(props) => (props.extend ? "none" : "block")};
  transition: all 0.5s;

`;
export const StyledDiv = styled.div`
  cursor: pointer;
  margin-left: -3rem;
  width: ${(props) => (props.extend ? "15rem" : "5rem")};
  background-color: ${(props) => (props.extend ? "#303030" : "transparent")};
  opacity: ${(props) => (props.extend ? "0.7" : "1")};
  transition: all 0.5s;
`;

export const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 4rem;
  margin-top: 4rem;
`;
export const StyledButton = styled.button`
  && {
    border-radius: 0.5rem;
    border: none;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    font-size: 1rem;
    background-size: 300%;
    transition: all 0.6s;
    color: black;
    margin-right: 1rem;
    background-image: linear-gradient(90deg, white 50%, black 50%);
    width: 10rem;
    &:hover {
      color: #fff;
      background-position: 100%;
      transform: translateX(0.5rem);
    }
  }
`;
