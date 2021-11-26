import { useState } from "react";
import Button from "../Button/Button";
import {
  StyledDiv,
  StyledUl,
  Hidden,
  StyledButton,
  StyledLi,
  StyledMenuIcon
} from "./Sidebar.styled";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Items = [
  {
    name: "About Me",
    link: "#",
  },
  {
    name: "Work",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Blogs",
    link: "#",
  },
  {
    name: "Contact Me",
    link: "#",
  },
];
export default function Sidebar({ link, children }) {
  const [isExtended, setIsExtended] = useState(false);
  return (
    <StyledDiv
      extend={isExtended}
      onClick={() => {
        setIsExtended(!isExtended);
      }}
    >
      <Hidden extend={isExtended}><MenuRoundedIcon/></Hidden>
      <StyledUl extend={isExtended}>
        <StyledMenuIcon extend={isExtended}><div><MenuOpenIcon/></div></StyledMenuIcon>
        {Items.map((item, id) => (
          <StyledLi key={id}>
            <StyledButton>{item.name}</StyledButton>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
}
