import styled from "styled-components";

export default function Button({ link, children }) {
  return <Link href={link}>{children}</Link>;
}

const Link = styled.a`
  border-radius: 0.5rem;
  position: relative;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-size: 300%;
  transition: all 0.6s;
  color: black;
  background-image: linear-gradient(90deg, white 50%, black 50%);
  &:hover {
    color: #fff;
    background-position: 100%;
    transform: translateX(0.5rem);
  }
`;
