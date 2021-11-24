import { useState } from "react";
import { StyledDiv ,StyledUl, Hidden } from "./Sidebar.styled";
export default function Sidebar({ link, children }) {
  const [isExtended , setIsExtended] = useState(false)
  return (
    <StyledDiv extend={isExtended} onClick={()=>{setIsExtended(!isExtended)}} >
      <Hidden extend={isExtended}>
       More
      </Hidden>
      <StyledUl extend={isExtended}>
        {[1, 2, 3, 4, 5].map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </StyledUl>
    </StyledDiv>
  );
}
