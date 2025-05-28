import styled, { css } from "styled-components";

const StyledList = styled.li`
  display: flex;
  gap: 1.3rem;
  size: 1rem;
  color: #bdc0c6;
  font-weight: normal;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
  }

  & svg {
    width: 1rem;
    height: 1rem;
    color: grey;
  }

  ${(props) =>
    props.name === "Dashboard" &&
    css`
      display: flex;
      gap: 1.3rem;
      size: 1rem;
      color: #2a2491;
      font-weight: normal;

      & svg {
        width: 1rem;
        height: 1rem;
        color: #2a2491;
      }
    `}
`;

export default StyledList;
